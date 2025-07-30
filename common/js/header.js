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
          + `
          <li class="menu-item">
            <span>자체 과정</span>
          </li>
          <li class="menu-item">
            <span>스튜디오</span>
          </li>
          <li class="menu-item">
            <span>오시는 길</span>
          </li>
        </ul>
      </nav>
      <div class="contact-btn">
        <button id="openContactPopup">사업 문의</button>
      </div>
    </header>
    <div class="contact-popup" id="contactPopup">
      <div class="popup-content">
        <button class="close-popup" id="closeContactPopup">&times;</button>
        <div class="business-wrap">
          <p class= "business-text">콘텐츠 개발: <span class="business-impact">louis63@primecl.co.kr</span></p>
          <p class= "business-text">자체과정 도입: <span class="business-impact">wendy3464@primecl.co.kr</span></p>
        </div>
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
        case "자체 과정":
          setContentsCreationPage();
          observeFadeUp();
          break;
        case "스튜디오":
          setContentsStudioPage();
          break;
        case "오시는 길":
          setLocationPage();
          break;
        default:
          setMainPage();
      }
    });
  });
  const openBtn = document.getElementById("openContactPopup");
  const closeBtn = document.getElementById("closeContactPopup");
  const contactPopup = document.getElementById("contactPopup");

  if (openBtn && contactPopup) {
    openBtn.addEventListener("click", () => {
      contactPopup.style.display = "flex";
    });
  }

  if (closeBtn && contactPopup) {
    closeBtn.addEventListener("click", () => {
      contactPopup.style.display = "none";
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