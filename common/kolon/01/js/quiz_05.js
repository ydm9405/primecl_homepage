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

window.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("MPlayer");
    if (!video) return;

    video.addEventListener("ended", function () {
        const score = 9;
        const chapterType = "insight";

        if (typeof top.saveChapterScore === "function") {
            try {
                top.saveChapterScore(chapterType, score, 5);
                console.log("📤 자동 점수 저장 완료:", chapterType, score);
            } catch (e) {
                console.error("❌ 점수 저장 실패:", e);
            }
        }
    });
});