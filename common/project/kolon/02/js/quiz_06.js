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

function dragOnlyAnswer() {
    const drag01 = document.getElementById("drag_bg_01");
    const drag02 = document.getElementById("drag_bg_02");
    const drag03 = document.getElementById("drag_bg_03");
    const drag_correct = document.querySelector(".drag_correct");

    let isAnswered = false; // ✅ 클릭 여부 플래그

    const handleClick = (isCorrect) => {
        if (isAnswered) return; // ✅ 이미 클릭했다면 무시
        isAnswered = true;

        effect_sound_fn(isCorrect ? "correct" : "incorrect");
        drag01.style.display = "none"
        drag02.style.display = "none"
        drag03.style.display = "block"
        drag_correct.style.display = "block";
        setBalloon();
        progressControll = "Y";
    };

    drag01.addEventListener("click", () => handleClick(false));
    drag02.addEventListener("click", () => handleClick(true));
}

function showDragOnlyUI() {
    const container = document.getElementById("fs-content");
    const wrap = document.createElement("div");
    wrap.id = "drag-only-wrap";
    wrap.innerHTML = `
        <div class="drag-only-question"></div>
        <div id="drag_bg_01"></div>
        <div id="drag_bg_02"></div>
        <div id="drag_bg_03"></div>
        <img class="drag_correct" src="../common/img/quizUI/06/correct.png"></img>
    `;
    container.appendChild(wrap);
    dragOnlyAnswer();
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

window.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("MPlayer");
    if (!video) return;

    video.addEventListener("ended", function () {
        playBGM("bgm");
        disableFooterControlsDuringQuiz();
        if (rewardAlreadyGiven) return;

        const img = document.createElement("img");
        img.className = "quiz-deco-img";
        img.src = "../common/img/quizUI/02/quiz955.png";
        document.getElementById("fs-content").appendChild(img);

        showDragOnlyUI();
    });

    video.addEventListener("play", function () {
        stopBGM();
        const wrap = document.getElementById("drag-only-wrap");
        if (wrap) wrap.remove();

        const existingImg = document.querySelector(".quiz-deco-img");
        if (existingImg) existingImg.remove();

        const quizBox = document.getElementById("bridge-activity");
        if (quizBox) {
            quizBox.style.display = "none";
            quizBox.innerHTML = "";
        }

        const resultBox = document.getElementById("quiz-result");
        if (resultBox) {
            resultBox.style.display = "none";
            resultBox.innerHTML = "";
        }
    });

    video.addEventListener("seeked", function () {
        stopBGM();
        const wrap = document.getElementById("drag-only-wrap");
        if (wrap) {
            wrap.style.display = "none";
            wrap.innerHTML = "";
        }
    });
});
