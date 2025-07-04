function setIntro() {
    const introHTML = `
    <div id="intro" class="intro-fullscreen">
      <video autoplay muted playsinline id="introVideo">
        <source src="./mp4/intro.mp4" type="video/mp4" />
      </video>
    </div>
  `;
    document.body.insertAdjacentHTML("beforeend", introHTML);
}