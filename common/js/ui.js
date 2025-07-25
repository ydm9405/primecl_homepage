async function initialize() {
  // 🔹 1. 인트로 먼저 실행 → intro DOM 삽입됨
  const introPromise = setIntro(); 

  // 🔹 2. main.mp4 미리 로딩 (브라우저에 힌트 제공)
  const preloadMain = document.createElement("link");
  preloadMain.rel = "preload";
  preloadMain.as = "video";
  preloadMain.href = "https://video-workers.ydm9405.workers.dev/main.mp4";
  preloadMain.type = "video/mp4";
  document.head.appendChild(preloadMain);

  // 🔹 3. 인트로가 로딩 완료될 때까지 기다림
  await introPromise;

  // 🔹 4. 본문 구성 시작
  setHeader();

  // 🔹 5. 이제야 mainVideoSection 생성 (로고가 인트로 뒤에 보이게)
  createMainVideoSection(); 

  // 🔹 6. 메인페이지 활성화
  setMainPage();

  // 🔹 7. 로딩 완료 표시
  document.body.classList.add("loaded");

  // 🔹 8. 인트로 제거 애니메이션
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