let rewardAlreadyGiven = false;
let currentResultMarks = [];
let scoreSummaryShown = false;
let quizSet = []; // 👈 전역에 먼저 선언
/*실제 개발*/

//const user_id = top.GL_openConfig.learnerSeq;
//const course_id = top.GL_openConfig.learningSubjectSeq;
//const session_no = parseInt(top.GL_openConfig.indexNo);

/*실제 개발*/

/*테스트*/

const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get("user_id") || "test_user";
const course_id = urlParams.get("course_id") || "test_course";
const session_no = parseInt(urlParams.get("session_no")) || 1;

/*테스트*/

console.log("✅ 초기화: user_id =", user_id, "course_id =", course_id, "session_no =", session_no);

window.allowDrop = function (event) {
    event.preventDefault();
};

window.drag = function (event) {
    event.dataTransfer.setData("text", event.target.id);
};

window.drop = function (event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedEl = document.getElementById(data);

    const dropZone = event.target.closest(".drop-zone");

    if (dropZone) {
        // 기존에 있는 항목 제거
        const existing = dropZone.querySelector(".drag-item");
        if (existing) existing.remove();

        // draggedEl 복사본 생성 → 원본은 그대로 보기 영역에 유지
        const clone = draggedEl.cloneNode(true);
        clone.id = "clone-" + Date.now(); // 고유 ID
        clone.setAttribute("draggable", "false"); // 다시 드래그 불가 (필요시 조정)
        dropZone.innerHTML = ""; // 기존 제거
        dropZone.appendChild(clone);

        const submitBtn = document.getElementById("submit-drag-btn");
        if (submitBtn) submitBtn.style.display = "block";
    }
};

window.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("MPlayer"); // video 태그의 실제 ID
    if (!video) return;

    const quizSet = [
        {
            chapter_type: "analysis",
            questions: [
                {
                    type: "initial",
                    q: "아래 빈칸에 알맞은 문구를 입력해주세요. (10점)",
                    a: "고유식별정보",
                    explanation: "「개인정보 보호법 시행령」 제19조 고유식별정보의 범위에서는 주민등록번호, 운전면허번호, 여권번호, 외국인등록번호를 고유식별정보로 정의하고 있습니다.",
                    point: 10
                },
                {
                    type: "ox",
                    q: "사망한 사람의 정보는 개인정보가 아니다. (5점)",
                    a: 1,
                    options: ["<img src='../common/img/quizUI/o.png'>", "<img src='../common/img/quizUI/x.png'>"],
                    explanation: "「개인정보 보호법」 제2조(정의)에서는 ‘살아 있는 개인’의 정보를 개인정보로 정의하고 있습니다. 개인정보 보호 법령상 개인정보는 ‘살아 있는’ 자연인에 관한 정보이므로 사망했거나 실종 선고 등 관계 법령에 의해 사망한 것으로 간주되는 자에 관한 정보는 개인정보로 볼 수 없습니다. 다만, 사망자의 정보라고 하더라도 유족과의 관계를 알 수 있는 정보는 유족의 개인 정보에 해당합니다.",
                    point: 5
                },
                {
                    type: "ox",
                    q: "개인정보처리시스템은 담당자 이외에도 긴급 상황(담당자의 병가, 휴가 등)을 대비해 전체 임직원에게 접근 권한을 부여해야 한다. (5점)",
                    a: 2,
                    options: ["<img src='../common/img/quizUI/o.png'>", "<img src='../common/img/quizUI/x.png'>"],
                    explanation: "개인정보처리자는 개인정보처리시스템에 대한 접근권한을 업무 수행에 필요한 최소한의 범위로 업무 담당자에 따라 차등 부여하여야 합니다(안전성 확보조치 기준 제5조 제1항). 만약 전보 또는 퇴직 등 인사이동이 발생하여 개인정보취급자가 변경되었을 경우에는 지체없이 개인정보처리시스템의 접근권한을 변경 또는 말소하여야 합니다.(안전성 확보 조치 기준 제5조 제2항)",
                    point: 5
                },
                {
                    type: "initial",
                    q: "아래 빈칸에 알맞은 문구를 입력해주세요. (10점)",
                    a: "개인정보 처리 목적",
                    explanation: "정보주체가 아닌 제3자로부터 개인정보를 제공받아 처리할 경우, 정보주체가 요청하면 3일 이내에 개인정보의 수집 출처를 알려야 합니다. 개인정보 수집 출처 통지 시 안내해야 할 법적 필수 항목은 ① 개인정보 수집 출처, ② 개인정보 처리 목적, ③ 개인정보 처리 정지 및 철회를 요구할 수 있다는 사실로 총 3가지 항목이 모두 포함되어야 합니다.",
                    point: 10
                }
            ]
        },
    ];

    let shownTimes = {};
    let currentSet = null;
    let currentIndex = 0;
    let scoreByChapter = {
        analysis: 0,
        problem: 0,
        insight: 0
    };
    let quizFinished = false;
    let rewardShown = false;
    let insightGiven = false;
    let hasInsightScore = false;

    function showNextQuiz() {
        console.log("✅ currentSet 확인:", currentSet);
        console.log("✅ currentQuestion 확인:", currentSet?.questions?.[currentIndex]);
        console.log("🧠 퀴즈 진입:", {
            chapterType: currentSet.chapter_type,
            questionIndex: currentIndex,
            question: currentSet.questions[currentIndex]?.q,
            type: currentSet.questions[currentIndex]?.type
        });
        if (rewardAlreadyGiven) return;

        const q = currentSet.questions[currentIndex];
        const quizBox = document.getElementById("quiz-box");
        if (!quizBox) return;

        let html = `<div class="quiz-initial-wrap initial-${currentIndex}"><p class="quiz-text">${q.q}</p>
        `;

        if (q.type === "initial") {
            if (currentIndex === 0) {
                html += `
                    <div class="input-wrap">
                        <span>주민등록번호는<br></span>
                        <input type="text" id="initial-input" class="initial-input" placeholder="ㄱㅇㅅㅂㅈㅂ" />
                        <span>에 해당한다.</span>
                    </div>
                    <div class="button-wrap">
                        <button id="submit-initial-btn" class="submit-initial-btn"><img src="../common/img/quizUI/submit.png"></button>
                    </div>
                `;
            } else if (currentIndex === 3) {
                html += `
                    <div class="input-wrap">
                        <span>정보주체가 아닌 제3자로부터 개인정보를 수집한 경우 정보주체가 요청하면 해당 사업자는 요청 받은 날부터 3일 이내에 ①개인정보의 수집 출처 ②</span>
                        <input type="text" id="initial-input" class="initial-input" placeholder="ㄱㅇㅈㅂ ㅊㄹ ㅁㅈ" />
                        <span>③정보주체가 개인정보 처리 정지 및 철회를 요구할 수 있다는 사실을 알려야 합니다.</span>
                    </div>
                    <div class="button-wrap">
                        <button id="submit-initial-btn" class="submit-initial-btn"><img src="../common/img/quizUI/submit.png"></button>
                    </div>
                `;
            }
        } else if (q.type === "ox") {
            html += `<div class="dotted_line"></div>`; // ✅ 한 번만 출력

            q.options.forEach((opt, idx) => {
                const extraClass = (idx === 0) ? "ox-o" : "ox-x"; // 0: O, 1: X
                html += `
                    <button class="ox-btn ${extraClass}" onclick="submitQuiz(${idx + 1})">${opt}</button><br/>
                `;
            });
        } else if (q.type === "drag") {
            html += `
                <div class="drag-question-body">
                    <p>
                        <span class="drag-sentence">
                            정보주체가 아닌 제3자로부터 개인정보를 수집한 경우 정보주체가 요청하면 해당 사업자는 요청 받은 날부터 3일 이내에 ①개인정보의 수집 출처<br>②
                            <span class="drop-zone inline-drop" id="single-drop" ondrop="drop(event)" ondragover="allowDrop(event)"></span>
                            ③정보주체가 개인정보 처리 정지 및 철회를 요구할 수 있다는 사실을 알려야 합니다.
                        </span>
                    </p>
                </div>
                <div class="drag-options">
            `;

            q.options.forEach((opt, idx) => {
                html += `
                    <div class="drag-item" draggable="true" id="drag-${idx}" 
                        ondragstart="drag(event)" data-answer="${opt}">
                        ${opt}
                    </div>
                `;
            });

            html += `
                </div>
                <div class="drag-submit-wrap">
                    <button id="submit-drag-btn" class="submit-drag-btn" style="display: none;"><img src="../common/img/quizUI/submit.png"></button>
                </div>
            `;
        } else if (q.type === "multi") {
            html += `<div class="multi-choice-wrap">`;
            q.options.forEach((opt, idx) => {
                html += `
                    <button class="multi-btn" onclick="submitQuiz(${idx + 1})">${opt}</button><br/>
                `;
            });
            html += `</div>`;
        }

        html += `</div>`;
        quizBox.innerHTML = html;
        quizBox.style.display = "block";

        // 초성퀴즈 제출 이벤트
        if (q.type === "initial") {
            const inputEl = document.getElementById("initial-input");
            const submitBtn = document.getElementById("submit-initial-btn");

            // 초기 버튼 숨김 (혹시 CSS에서도 해놨지만 안전하게 한 번 더)
            submitBtn.style.display = "none";

            // input 입력 시 버튼 표시 제어
            inputEl.addEventListener("input", function () {
                if (this.value.trim() !== "") {
                    submitBtn.style.display = "inline-block"; // 또는 block
                    addBlinkEffect("submit-initial-btn")
                } else {
                    submitBtn.style.display = "none";
                }
            });

            // 클릭 이벤트
            submitBtn.addEventListener("click", function () {
                this.style.display = "none"
                const userInput = inputEl.value.trim();
                const isCorrect = userInput === q.a;
                currentResultMarks.push(isCorrect ? "O" : "X");

                if (isCorrect) {
                    scoreByChapter[currentSet.chapter_type] += q.point || 1;
                    currentSet.correctCount++;
                    effect_sound_fn("correct")
                } else {
                    effect_sound_fn("incorrect")
                }

                const feedbackEl = document.createElement("div");
                feedbackEl.className = "quiz-result-initial";
                feedbackEl.innerHTML = `
                    <p class="quiz-explanation-answer">${q.a} ${getFeedbackIconHtml(isCorrect, currentSet.chapter_type, q.point || 1)}</p>
                    <p class="quiz-explanation">${q.explanation}</p>
                    <button id="next-quiz-btn"><img src="../common/img/quizUI/next_quiz_btn.png"></button>
                `;
                addBlinkEffect("next-quiz-btn")

                document.querySelector(".quiz-initial-wrap").appendChild(feedbackEl);

                inputEl.disabled = true;
                submitBtn.disabled = true;

                document.getElementById("next-quiz-btn").addEventListener("click", () => {
                    currentIndex++;
                    if (currentIndex < currentSet.questions.length) {
                        showNextQuiz();
                    } else {
                        showSetResult();
                    }
                });
            });
        }

        // 드래그 제출 이벤트
        if (q.type === "drag") {
            document.getElementById("submit-drag-btn").addEventListener("click", function () {
                const drop = document.getElementById("single-drop");
                const item = drop.querySelector(".drag-item");
                const selected = item ? item.getAttribute("data-answer") : "";
                this.style.display = "none";

                setTimeout(() => {
                    const nextBtn = document.getElementById("next-quiz-btn");
                    if (nextBtn) {
                        nextBtn.classList.add("drag-next-btn"); // 원하는 클래스 추가
                        // nextBtn.innerText = "계속하기";  ← 텍스트 바꾸고 싶다면
                    }
                }, 0);
                // ✅ 이 줄만 남기고 submitQuiz()로 위임
                submitQuiz(selected);
            });
        }
    }

    function showSetResult() {
        enableFooterControlsAfterQuiz()
        progressControll = "Y";
        setBalloon();
        const resultEl = document.getElementById("quiz-result");
        if (!resultEl) return;
        stopBGM();
        const total = currentSet.questions.length;
        const correct = currentSet.correctCount;
        const chapterType = currentSet.chapter_type;
        const quizBox = document.getElementById("quiz-box");
        if (quizBox) quizBox.style.display = "none";

        const chapterLabel = {
            analysis: "분석력",
            problem: "문제해결력",
            insight: "통찰력"
        }[chapterType] || chapterType;

        if (typeof top.saveChapterScore === "function") {
            try {
                top.saveChapterScore(chapterType, scoreByChapter[chapterType], 2);
                console.log("📤 점수 저장 완료:", chapterType, scoreByChapter[chapterType]);
            } catch (e) {
                console.error("❌ 점수 저장 실패:", e);
            }
        } else {
            console.warn("⚠️ saveChapterScore 함수가 정의되어 있지 않음");
        }
        const score = scoreByChapter[chapterType];

        if (score === 0) effect_sound_fn("02/02_analysis_0");
        else if (score === 5) effect_sound_fn("02/02_analysis_5");
        else if (score === 10) effect_sound_fn("02/02_analysis_10");
        else if (score === 15) effect_sound_fn("02/02_analysis_15");
        else if (score === 20) effect_sound_fn("02/02_analysis_20");
        else if (score === 25) effect_sound_fn("02/02_analysis_25");
        else if (score === 30) effect_sound_fn("02/02_analysis_30");

        // ✅ 각 문제에 대한 O/X 출력 테이블 생성
        let markTable = '<div class="quiz-mark-container">';
        currentResultMarks.forEach((mark, idx) => {
            const isCorrect = mark === "O";
            const oxImg = isCorrect
                ? "../common/img/quizUI/result_o.png"
                : "../common/img/quizUI/result_x.png";

            const qImg = `../common/img/quizUI/q${idx + 1}.png`; // ✅ Q1, Q2, Q3 이미지 경로

            markTable += `
        <div class="quiz-mark-box">
            <img src="${qImg}" alt="Q${idx + 1}" class="quiz-q-img" />
            <img src="${oxImg}" alt="${mark}" class="quiz-ox-img" />
        </div>
    `;
        });
        markTable += '</div>';

        resultEl.innerHTML = `
          <div class="set-result-wrap">
            ${markTable}
            <p class="quiz-result-score  ${chapterType}-result">
              <strong>${chapterLabel}</strong> 
              <span class="score-value">${scoreByChapter[chapterType]}</span>&nbsp;점을 획득하셨습니다.
            </p>
            <button id="retry-quiz-btn" class="retry-quiz-btn">
              <img src='../common/img/quizUI/retry_btn.png'>
            </button>
          </div>
        `;
        resultEl.style.display = "block";

        addBlinkEffect("retry-quiz-btn")

        document.getElementById("retry-quiz-btn").addEventListener("click", () => {
            playBGM("bgm");
            effect_sound_fn("click");
            resultEl.style.display = "none";

            // ✅ 초기화
            currentIndex = 0;
            currentSet.correctCount = 0;
            currentResultMarks = [];

            scoreByChapter[currentSet.chapter_type] = 0;

            // 다시 퀴즈 시작
            const quizBox = document.getElementById("quiz-box");
            if (quizBox) {
                quizBox.style.display = "block";
                quizBox.innerHTML = "";
            }
            showNextQuiz();
        });

        // ✅ 결과표시 후 배열 초기화
        currentResultMarks = [];
    }

    window.submitQuiz = function (selected) {
        if (rewardAlreadyGiven) return;

        const currentQuestion = currentSet.questions[currentIndex];
        const correct = currentQuestion.a;
        const explanation = currentQuestion.explanation;
        const chapterType = currentSet.chapter_type;
        const isCorrect = selected === correct;

        currentResultMarks.push(isCorrect ? "O" : "X");

        if (isCorrect) {
            const point = currentQuestion.point || 1;
            scoreByChapter[chapterType] += point;
            currentSet.correctCount++;
            effect_sound_fn("correct");
        } else {
            effect_sound_fn("incorrect")
        }

        // 버튼 이미지 업데이트
        const buttons = document.querySelectorAll(".ox-btn");
        buttons.forEach((btn, idx) => {
            const optIndex = idx + 1;
            btn.disabled = true;

            let imgSrc = "";

            // O 버튼은 idx 0, X 버튼은 idx 1이라고 가정
            const isO = optIndex === 1;

            if (optIndex === correct) {
                // 정답인 버튼
                imgSrc = isO
                    ? "../common/img/quizUI/o_on.png"
                    : "../common/img/quizUI/x_on.png";
            } else {
                // 오답인 버튼
                imgSrc = isO
                    ? "../common/img/quizUI/o_non.png"
                    : "../common/img/quizUI/x_non.png";
            }

            btn.innerHTML = `<img src="${imgSrc}">`;
        });

        // 해설 및 다음 버튼
        const quizBox = document.getElementById("quiz-box");
        const feedback = document.createElement("div");
        feedback.className = "quiz-explanation";
        let answerContent = "";
        if (currentQuestion.type === "ox") {
            const answerImgSrc = correct === 1
                ? "../common/img/quizUI/o_feedback.png"
                : "../common/img/quizUI/x_feedback.png";

            answerContent = `<img src="${answerImgSrc}" class="ox_feedback">`;
        } else {
            // ✅ multi 또는 기타 유형일 경우 정답 숫자 출력
            answerContent = `<div class="quiz-answer-wrap"><p class="quiz-answer-text ${currentQuestion.type}-answer-text">${correct}</p></div>`;
        }

        addBlinkEffect("next-quiz-btn")

        // 결과 아이콘
        let resultIcon = "";

        // OX 문제일 경우 정답값 기준으로 클래스 지정
        if (currentQuestion.type === "ox") {
            const isAnswerO = parseInt(currentQuestion.a) === 1;
            resultIcon = `<img class="${isAnswerO ? 'correctIcon_o' : 'correctIcon_x'}" src='../common/img/quizUI/correctIcon.png'>`;
        } else if (currentQuestion.type === "multi") {
            const buttons = document.querySelectorAll(".multi-btn");
            buttons.forEach((btn, idx) => {
                const optIndex = idx + 1;
                btn.disabled = true;

                // 정답 표시
                if (optIndex === correct) {
                    btn.classList.add("correct");
                    // 정답 말풍선 아이콘 추가
                    btn.innerHTML = `<img src="../common/img/quizUI/correctIcon_multi.png" class="correctIcon_multi"> ${btn.innerHTML}`;
                }

                // 사용자가 선택한 보기에는 체크 표시
                if (optIndex === selected) {
                    btn.classList.add("selected");
                    // 빨간 체크 아이콘 추가
                    btn.innerHTML = `<img src="../common/img/quizUI/check.png" class="selected-icon"> ${btn.innerHTML}`;
                }
            });
        } else if (currentQuestion.type === "drag") {

        }
        else {
            // 기타 유형은 기존 방식 (정답 여부에 따라 아이콘 구분)
            resultIcon = isCorrect
                ? "<img class='correctIcon_o' src='../common/img/quizUI/correctIcon.png'>"
                : "<img class='correctIcon_x' src='../common/img/quizUI/correctIcon.png'>";
        }

        let explanationHtml = "";
        let answerContentHtml = "";

        if (currentQuestion.type === "ox") {
            explanationHtml = `<p class="quiz-explanation ox-explanation">${explanation}</p>`;

            answerContentHtml = `
                <p class="quiz-answer-img">
                    ${answerContent}
                </p>
            `;
        } else {
            explanationHtml = `<p class="quiz-explanation ${chapterType}-explanation">${explanation}</p>`;

            answerContentHtml = `
                <p class="quiz-answer-img">
                    ${answerContent}
                </p>
            `;
        }

        feedback.innerHTML = `
            <p><strong>${resultIcon}</strong></p>
            ${explanationHtml}
            <p class="quiz-explanation">${getFeedbackIconHtml(isCorrect, chapterType, currentQuestion.point || 1)}</p>
            ${answerContentHtml}
            <button id="next-quiz-btn">${currentIndex < currentSet.questions.length - 1
                ? "<img src = '../common/img/quizUI/next_quiz_btn.png'>"
                : "<img src = '../common/img/quizUI/result_quiz_btn.png'>"}
            </button>
        `;
        quizBox.appendChild(feedback);

        document.getElementById("next-quiz-btn").addEventListener("click", function () {
            currentIndex++;
            if (currentIndex < currentSet.questions.length) {
                showNextQuiz();
            } else {
                showSetResult();
                if (quizSet.every(set => shownTimes[set.time])) quizFinished = true;
            }
        });
    };

    function getFeedbackIconHtml(isCorrect, chapterType = "", point = 0) {
        if (!isCorrect) {
            // 오답: 기존처럼 이미지만
            return `<img src="../common/img/contentUI/quiz/x.png" alt="오답" class="feedback-icon">`;
        }

        // 정답: 이미지 대신 텍스트로 chapter_type + point 표시
        const label = {
            analysis: "분석력",
            problem: "문제해결력",
            insight: "통찰력"
        }[chapterType] || chapterType;

        return `<div class="quiz-meta">
                    <span class="quiz-label">${label}</span><br/>
                    <span class="quiz-point">${point} UP</span>
                </div>`;
    }

    function disableFooterControlsDuringQuiz() {
        const controlEls = document.querySelectorAll('#fs-footer .control > *:not(.paging)');
        controlEls.forEach(el => {
            el.style.pointerEvents = 'none';
        });
    }

    function enableFooterControlsAfterQuiz() {
        const controlEls = document.querySelectorAll('#fs-footer .control > *:not(.paging)');
        controlEls.forEach(el => {
            el.style.pointerEvents = 'auto';
        });
    }

    video.addEventListener("ended", function () {
        disableFooterControlsDuringQuiz()
        if (rewardAlreadyGiven) return;

        currentSet = quizSet[0];
        currentIndex = 0;
        currentSet.correctCount = 0;
        // 이미지 추가
        const img = document.createElement("img");
        img.className = "quiz-deco-img";
        img.src = "../common/img/quizUI/02/quiz153.png"
        document.getElementById("fs-content").appendChild(img);

        const quizBox = document.getElementById("quiz-box");
        if (quizBox) {
            quizBox.style.display = "block";
            quizBox.innerHTML = "";
        }

        playBGM("bgm");
        showNextQuiz();
    });
    video.addEventListener("play", function () {
        stopBGM();
        // 1. 퀴즈 이미지 제거
        const existingImg = document.querySelector(".quiz-deco-img");
        if (existingImg) existingImg.remove();

        // 2. 퀴즈 박스 숨기기
        const quizBox = document.getElementById("quiz-box");
        if (quizBox) {
            quizBox.style.display = "none";
            quizBox.innerHTML = ""; // 내용도 지움
        }

        // 3. 결과창 숨기기
        const resultBox = document.getElementById("quiz-result");
        if (resultBox) {
            resultBox.style.display = "none";
            resultBox.innerHTML = "";
        }

        // 4. 퀴즈 중이면 footer control 비활성화, 아니면 다시 활성화
        if (quizFinished) {
            enableFooterControlsAfterQuiz(); // 퀴즈 끝난 경우 컨트롤 복구
        }
    });

    video.addEventListener("seeked", function () {
        stopBGM();
        if (quizFinished) {
            // 유저가 재생바를 건드린 경우에도 정리
            const quizBox = document.getElementById("quiz-box");
            const resultBox = document.getElementById("quiz-result");
            quizBox && (quizBox.style.display = "none", quizBox.innerHTML = "");
            resultBox && (resultBox.style.display = "none", resultBox.innerHTML = "");
        }
    });
});
