function initialize() {
  setIntro(); // 인트로 먼저 보여줌

  setTimeout(() => {
    // 2.5초 후 본문 요소 추가
    setHeader();
    setMainPage();
  }, 2500);

  setTimeout(() => {
    // 3초 후 인트로 제거
    const intro = document.getElementById("intro");
    if (intro) {
      intro.style.transition = "opacity 1s ease";
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.remove();
      }, 1000);
    }
  }, 3000);
}