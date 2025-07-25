function setIntro() {
  return new Promise((resolve) => {
    const introHTML = `
      <div id="intro" class="intro-fullscreen">
        <video autoplay muted playsinline preload="auto" id="introVideo">
          <source src="https://pub-79eaf3fe26bb455ead7282522d6076b0.r2.dev/intro.mp4" type="video/mp4" />
        </video>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", introHTML);

    const video = document.getElementById("introVideo");

    // ✅ 영상이 재생 가능한 상태일 때 resolve
    video.addEventListener("canplay", () => {
      resolve();
    });
  });
}