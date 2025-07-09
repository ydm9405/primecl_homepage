function initialize() {
  setIntro();
  
  setTimeout(() => {
    setHeader();
    setMainPage();
    document.body.classList.add('loaded');
  }, 1000);

  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.style.transition = "opacity 1s ease";
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.remove(); // display: none보다 remove가 깔끔
      }, 1000);
    }
  }, 5000);
}