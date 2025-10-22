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

    let currentSet = null;
    let quizFinished = false;
    let hasInsightScore = false;

    const bridgeQuizSet = [
        {
            options: [
                { label: "나이대", isCorrect: false },
                { label: "여권번호", isCorrect: true }
            ]
        },
        {
            options: [
                { label: "신용카드번호", isCorrect: true },
                { label: "사업자번호", isCorrect: false },
                { label: "사망자 이름", isCorrect: false }
            ]
        },
        {
            options: [
                { label: "사업자주소", isCorrect: false },
                { label: "도서명", isCorrect: false },
                { label: "지문정보", isCorrect: true }
            ]
        },
        {
            options: [
                { label: "이메일주소", isCorrect: true },
                { label: "대표자명", isCorrect: false }
            ]
        }
    ];

    function initBridgeActivity() {
        const container = document.getElementById("bridge-activity");
        container.innerHTML = ""; // 초기화
        container.style.display = "block";

        // ✅ START 버튼 먼저 생성
        const startBtn = document.createElement("div");
        startBtn.id = "bridge-start";
        startBtn.className = "bridge-start-btn";
        startBtn.innerHTML = `<img src="../common/img/bridgeUI/start.png" alt="START">`;
        effect_sound_fn("01/01_03_03")

        addBlinkEffect("bridge-start")

        startBtn.addEventListener("click", () => {
            effect_sound_fn("click")
            playBGM("bgm")
            startBtn.remove(); // START 버튼 제거 후 문제들 표시
            renderBridgeStages(); // 아래에서 정의할 실제 문제 렌더링 함수 호출
        });

        container.appendChild(startBtn);
    }

    function renderBridgeStages() {
        const container = document.getElementById("bridge-activity");
        let buttonCount = 1; // ← 고유 번호 카운터

        bridgeQuizSet.forEach((quiz, idx) => {
            const stage = document.createElement("div");
            stage.className = "bridge-stage";
            stage.dataset.step = idx;

            if (idx > 0) stage.classList.add("disabled");

            quiz.options.forEach(opt => {
                const btn = document.createElement("button");
                btn.className = `bridge-btn btn-${buttonCount}`;
                buttonCount++;

                btn.dataset.correct = opt.isCorrect;
                btn.innerHTML = `<span class="bridge-label">${opt.label}</span>`;

                btn.addEventListener("click", () => {
                    if (stage.classList.contains("disabled")) return;

                    const isCorrect = btn.dataset.correct === "true";
                    btn.querySelectorAll('.bridge-correct-icon, .bridge-wrong-icon').forEach(el => el.remove());
                    const feedbackImg = document.createElement("img");
                    if (isCorrect) {
                        effect_sound_fn("correct")
                        feedbackImg.src = "../common/img/bridgeUI/correct.png";
                        feedbackImg.className = "bridge-correct-icon";
                    } else {
                        effect_sound_fn("incorrect")
                        feedbackImg.src = "../common/img/bridgeUI/wrong.png";
                        feedbackImg.className = "bridge-wrong-icon";
                    }

                    const existingImg = btn.querySelector(".bridge-correct-icon, .bridge-wrong-icon");
                    if (existingImg) existingImg.remove();
                    btn.appendChild(feedbackImg);

                    const allBtns = stage.querySelectorAll(".bridge-btn");
                    allBtns.forEach(b => b.style.pointerEvents = "none");

                    setTimeout(() => {
                        feedbackImg.remove();

                        if (isCorrect) {
                            btn.classList.add("correct");
                            stage.classList.add("answered");
                            stage.classList.add("disabled");

                            const nextStage = document.querySelector(`.bridge-stage[data-step="${idx + 1}"]`);
                            if (nextStage) {
                                nextStage.classList.remove("disabled");
                            } else {
                                const container = document.getElementById("bridge-activity");

                                const completeWrap = document.createElement("div");
                                completeWrap.className = "bridge-complete-wrap";

                                const completeImg = document.createElement("img");
                                completeImg.src = "../common/img/bridgeUI/complete.png";
                                completeImg.className = "bridge-complete-image";


                                effect_sound_fn("complete")
                                completeWrap.appendChild(completeImg);
                                container.appendChild(completeWrap);

                                enableFooterControlsAfterQuiz();
                                progressControll = "Y";
                                setBalloon();
                                stopBGM();
                                quizFinished = true;
                            }
                        } else {
                            btn.classList.add("wrong");

                            if (idx > 0) {
                                stage.classList.add("disabled");
                                stage.classList.remove("answered");

                                const prevStage = document.querySelector(`.bridge-stage[data-step="${idx - 1}"]`);
                                if (prevStage) {
                                    prevStage.classList.remove("disabled");
                                    prevStage.classList.remove("answered");
                                }
                            }

                            // 이후 스테이지 모두 잠금
                            for (let i = idx + 1; i < bridgeQuizSet.length; i++) {
                                const later = document.querySelector(`.bridge-stage[data-step="${i}"]`);
                                if (later) {
                                    later.classList.add("disabled");
                                    later.classList.remove("answered");
                                }
                            }
                        }
                        //
                        allBtns.forEach(b => b.style.pointerEvents = "auto");
                    }, 1500);
                });

                stage.appendChild(btn);
            });

            container.appendChild(stage);
        });
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
        disableFooterControlsDuringQuiz();
        if (rewardAlreadyGiven) return;

        const img = document.createElement("img");
        img.className = "quiz-deco-img";
        img.src = "../common/img/quizUI/01/bridge955.png"
        document.getElementById("fs-content").appendChild(img);

        initBridgeActivity(); // ✅ 브릿지 퀴즈만 시작
    });

    video.addEventListener("play", function () {
        stopBGM();
        // 1. 퀴즈 이미지 제거
        const existingImg = document.querySelector(".quiz-deco-img");
        if (existingImg) existingImg.remove();

        // 2. 퀴즈 박스 숨기기
        const quizBox = document.getElementById("bridge-activity");
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
            const quizBox = document.getElementById("bridge-activity");
            const resultBox = document.getElementById("quiz-result");
            quizBox && (quizBox.style.display = "none", quizBox.innerHTML = "");
            resultBox && (resultBox.style.display = "none", resultBox.innerHTML = "");
        }
    });
});
