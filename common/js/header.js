window.addEventListener('load', () => {
  // 🔹 인트로 영상 페이드아웃
  const intro = document.getElementById('intro');
  if (intro) {
    // ✅ 2.5초 후 본문 먼저 등장
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 2500);

    // ✅ 3초 후 인트로 페이드아웃
    setTimeout(() => {
      intro.style.transition = 'opacity 1s ease';
      intro.style.opacity = 0;

      // ✅ 1초 뒤 인트로 완전 제거
      setTimeout(() => {
        intro.style.display = 'none';
      }, 1000);
    }, 3000);
  }
});

function setHeader() {
  const headerHTML = `
    <header class="site-header">
        <div class="logo">
          <a href="#" id="logoLink">
            <img class="logo_img" src="./common/img/header/logo.png" alt="로고 이미지">
          </a>
        </div>
        <nav class="main-nav">
          <ul class="menu-list">
            <li class="menu-item">
              <span>Company</span>
            </li>
            <li class="menu-item">
              <span>Contents Service</span>
            </li>
            <li class="menu-item">
              <span>Contents Creation</span>
            </li>
            <li class="menu-item">
              <span>Studio</span>
            </li>
          </ul>
        </nav>
        <button id="scrollToMap" class="map-btn">지도보기</button>
      </header>
    
      <!-- ✅ 지도 팝업 포함 -->
      <div id="mapPopup" class="map-popup">
        <div class="map-popup-content">
          <button id="closeMapPopup" class="close-btn">닫기 ✖</button>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.2726296593441!2d126.88693849162053!3d37.4768270442357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6100118f9ac3%3A0xc3e406ca227ee7e!2z7Y2867iU66atIOqwgOyCsA!5e0!3m2!1sko!2skr!4v1750375926441!5m2!1sko!2skr"
            width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy">
          </iframe>
        </div>
      </div>
    `;

  document.body.insertAdjacentHTML("beforeend", headerHTML);

  document.querySelectorAll(".menu-item span").forEach((item) => {
    item.addEventListener("click", () => {
      const menu = item.textContent.trim();
      switch (menu) {
        case "Company":
          setCompanyPage();
          break;
        case "Contents Service":
          setContentsServicePage();
          break;
        case "Contents Creation":
          setContentsCreationPage();
          break;
        case "Studio":
          setContentsStudioPage();
          break;
        default:
          setMainPage();
      }
    });
  });

  // 🔹 지도 버튼 이벤트
  const scrollBtn = document.getElementById("scrollToMap");
  const closeBtn = document.getElementById("closeMapPopup");
  const mapPopup = document.getElementById("mapPopup");

  if (scrollBtn && mapPopup) {
    scrollBtn.addEventListener("click", () => {
      mapPopup.style.display = "flex";
    });
  }

  if (closeBtn && mapPopup) {
    closeBtn.addEventListener("click", () => {
      mapPopup.style.display = "none";
    });
  }

  document.getElementById("logoLink").addEventListener("click", (e) => {
    e.preventDefault();

    setMainPage();
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ 맨 위로 이동
  });
}