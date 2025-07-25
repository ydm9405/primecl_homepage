function setHeader() {
  const headerHTML = `
    <header class="site-header">
        <div class="logo">
          <a href="#" id="logoLink">
            <img class="logo_img" src="./common/img/header/logo_eng.png" alt="로고 이미지">
          </a>
        </div>
        <nav class="main-nav">
          <ul class="menu-list">
            <li class="menu-item">
              <span>회사 소개</span>
            </li>`
            //공공, 대학 사업 보류
            //<li class="menu-item">
            //  <span>Service</span>
            //</li>
            +`
            <li class="menu-item">
              <span>Creation</span>
            </li>
            <li class="menu-item">
              <span>스튜디오</span>
            </li>
          </ul>
        </nav>
        <button id="scrollToMap" class="map-btn">지도보기</button>
      </header>
    
      <!-- 지도 팝업 -->
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

  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

  document.querySelectorAll(".menu-item span").forEach((item) => {
    item.addEventListener("click", () => {
      const menu = item.textContent.trim();
      window.scrollTo({ top: 0, behavior: "instant" });
      switch (menu) {
        case "회사 소개":
          setCompanyPage();
          break;
        //공공, 대학 사업 보류
        //case "Service":
        //  setContentsServicePage();
        //  break;
        case "Creation":
          setContentsCreationPage();
          observeFadeUp();
          break;
        case "스튜디오":
          setContentsStudioPage();
          break;
        default:
          setMainPage();
      }
    });
  });

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

  // 🔸 메뉴 active 클래스 제거
  document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));

  setMainPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
}