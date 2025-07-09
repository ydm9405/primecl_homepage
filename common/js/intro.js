function setIntro() {
    const introHTML = `
    <div id="intro" class="intro-fullscreen">
      <video autoplay muted playsinline preload="auto" id="introVideo">
        <source src="https://video-workers.ydm9405.workers.dev/intro.mp4" type="video/mp4" />
      </video>
    </div>
  `;
    document.body.insertAdjacentHTML("beforeend", introHTML);
}