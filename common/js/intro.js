function setIntro() {
  return new Promise((resolve) => {
    const introHTML = `
      <div id="intro" class="intro-fullscreen">
        <video autoplay muted playsinline preload="auto" id="introVideo">
          <source src="https://video-workers.ydm9405.workers.dev/intro.mp4" type="video/mp4" />
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