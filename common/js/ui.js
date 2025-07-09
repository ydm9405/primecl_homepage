async function initialize() {
  await setIntro(); // 영상이 로딩될 때까지 기다림

  setHeader();
  setMainPage();
  document.body.classList.add('loaded');

  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.style.transition = "opacity 1s ease";
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.remove();
      }, 1000);
    }
  }, 5000);
}