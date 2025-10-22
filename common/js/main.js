//카테고리
const contentsCategory = [
  {
    key: "leadership",
    name: "리더십",
    icon: "./common/img/contentsCreation/icon_leadership.png"
  },
  {
    key: "it",
    name: "IT",
    icon: "./common/img/contentsCreation/icon_it.png"
  },
  {
    key: "workManagement",
    name: "업무관리",
    icon: "./common/img/contentsCreation/icon_work.png"
  },
  {
    key: "liberalArts",
    name: "인문교양",
    icon: "./common/img/contentsCreation/icon_liberal.png"
  },
  {
    key: "selfDevelopment",
    name: "자기계발",
    icon: "./common/img/contentsCreation/icon_selfdev.png"
  },
  {
    key: "selfManagement",
    name: "자기관리",
    icon: "./common/img/contentsCreation/icon_selfmanage.png"
  },
  {
    key: "organizationalManagement",
    name: "조직관리",
    icon: "./common/img/contentsCreation/icon_organization.png"
  }
];

//내용
const contentsData = {
  //리더쉽
  leadership: [
    {
      title: "일잘러의 멘탈관리 수업 - 회복탄력성",
      image: "./common/img/contentsCreation/resilience.png",
      materialLink: "./common/down/resilience.pdf",
      previewLink: "https://player.vimeo.com/video/1099890425"
    },
    {
      title: "슬기로운 갈등 관리",
      image: "./common/img/contentsCreation/mediation.png",
      materialLink: "./common/down/mediation.pdf",
      previewLink: "https://player.vimeo.com/video/1099883106"
    },
    {
      title: "개인과 조직의 성장을 이끄는 밀레니얼 워커십",
      image: "./common/img/contentsCreation/millennial.png",
      materialLink: "./common/down/millennial.pdf",
      previewLink: "https://player.vimeo.com/video/1099881049"
    },
    {
      title: "[연결과 변화] 우리는 지금 칭기즈칸처럼",
      image: "./common/img/contentsCreation/genghisKhan.png",
      materialLink: "./common/down/genghisKhan.pdf",
      previewLink: "https://player.vimeo.com/video/1113780210"
    },
  ],
  //IT
  it: [
    {
      title: "처음 배우는 생성형AI 프로그램개발(LLM)",
      image: "./common/img/contentsCreation/LLM.png",
      materialLink: "./common/down/LLM.pdf",
      previewLink: "https://player.vimeo.com/video/1099891617"
    },
    {
      title: "처음 배우는 쿠버네티스 개발 전략",
      image: "./common/img/contentsCreation/kubernetes.png",
      materialLink: "./common/down/kubernetes.pdf",
      previewLink: "https://player.vimeo.com/video/1099891525"
    },
    {
      title: "처음 배우는 리액트",
      image: "./common/img/contentsCreation/react.png",
      materialLink: "./common/down/react.pdf",
      previewLink: "https://player.vimeo.com/video/1099891551"
    },
    {
      title: "전혀 다른 생성형 AI",
      image: "./common/img/contentsCreation/ai.png",
      materialLink: "./common/down/ai.pdf",
      previewLink: "https://player.vimeo.com/video/1099891176"
    },
    {
      title: "처음 배우는 클린코드 With 파이썬",
      image: "./common/img/contentsCreation/cleanCode.png",
      materialLink: "./common/down/cleanCode.pdf",
      previewLink: "https://player.vimeo.com/video/1099882971"
    },
    {
      title: "AI시대, 일잘러를 위한 데이터 사고와 분석법",
      image: "./common/img/contentsCreation/data.png",
      materialLink: "./common/down/data.pdf",
      previewLink: "https://player.vimeo.com/video/1099882017"
    },
    {
      title: "챗 GPT로 만드는 주식&<br>암호화폐 자동매매 시스템",
      image: "./common/img/contentsCreation/cryptocurrency.png",
      materialLink: "./common/down/cryptocurrency.pdf",
      previewLink: "https://player.vimeo.com/video/1099882133"
    },
    {
      title: "누구나 쉽게 배우는 도커 기초 및 활용법",
      image: "./common/img/contentsCreation/docker.png",
      materialLink: "./common/down/docker.pdf",
      previewLink: "https://player.vimeo.com/video/1099882852"
    },
    {
      title: "모두를 위한 AI 데이터 시각화 수업",
      image: "./common/img/contentsCreation/dataVisualization.png",
      materialLink: "./common/down/dataVisualization.pdf",
      previewLink: "https://player.vimeo.com/video/1104024205"
    },
    {
      title: "누구나 쉽게 배우는 NoSQL-Mongo DB",
      image: "./common/img/contentsCreation/mongoDB.png",
      materialLink: "./common/down/mongoDB.pdf",
      previewLink: "https://player.vimeo.com/video/1104024302"
    },
    {
      title: "처음 배우는 카프카",
      image: "./common/img/contentsCreation/kafka.png",
      materialLink: "./common/down/kafka.pdf",
      previewLink: "https://player.vimeo.com/video/1105033623"
    },
    {
      title: "누구나 쉽게 배우는 MariaDB 기초 및 활용",
      image: "./common/img/contentsCreation/mariaDB.png",
      materialLink: "./common/down/mariaDB.pdf",
      previewLink: "https://player.vimeo.com/video/1113780169"
    },
  ],
  //업무관리
  workManagement: [
    {
      title: "10분만에 AI 활용법",
      image: "./common/img/contentsCreation/aiQuickstart.png",
      materialLink: "./common/down/aiQuickstart.pdf",
      previewLink: "https://player.vimeo.com/video/1099882065"
    },
    {
      title: "스마트 워크로 워크 스마트하기",
      image: "./common/img/contentsCreation/smartWork.png",
      materialLink: "./common/down/smartWork.pdf",
      previewLink: "https://player.vimeo.com/video/1099882304"
    },
    {
      title: "일잘러의 창의적 문제 해결 방법",
      image: "./common/img/contentsCreation/creativity.png",
      materialLink: "./common/down/creativity.pdf",
      previewLink: "https://player.vimeo.com/video/1099883069"
    },
    {
      title: "일잘러의 비즈니스 매너",
      image: "./common/img/contentsCreation/etiquette.png",
      materialLink: "./common/down/etiquette.pdf",
      previewLink: "https://player.vimeo.com/video/1099880723"
    },
    {
      title: "신규 입사자의 온보딩 과정,<br>워(Work).플(People).킹(Networking)",
      image: "./common/img/contentsCreation/onboarding.png",
      materialLink: "./common/down/onboarding.pdf",
      previewLink: "https://player.vimeo.com/video/1099881458"
    },
    {
      title: "AI 마케터 시대, 생성형 AI와 팀플레이하기",
      image: "./common/img/contentsCreation/AImarketing.png",
      materialLink: "./common/down/AImarketing.pdf",
      previewLink: "https://player.vimeo.com/video/1115077151"
    },
  ],
  //인문교양
  liberalArts: [
    {
      title: "명욱교수와 함께 떠나는 술기로운 세계사",
      image: "./common/img/contentsCreation/boozehistory.png",
      materialLink: "./common/down/boozehistory.pdf",
      previewLink: "https://player.vimeo.com/video/1099891577"
    },
    {
      title: "직장인을 위한 인생 특강 - 니체",
      image: "./common/img/contentsCreation/nietzsche.png",
      materialLink: "./common/down/nietzsche.pdf",
      previewLink: "https://player.vimeo.com/video/1099891647"
    },
    {
      title: "직장인을 위한 인생 수업 - 그리스로마신화",
      image: "./common/img/contentsCreation/mythology.png",
      materialLink: "./common/down/mythology.pdf",
      previewLink: "https://player.vimeo.com/video/1099882040"
    },
    {
      title: "승리하는 사람들의 인생 바이블, 손자병법",
      image: "./common/img/contentsCreation/strategy.png",
      materialLink: "./common/down/strategy.pdf",
      previewLink: "https://player.vimeo.com/video/1099881210"
    },
    {
      title: "직장인을 위한 인생 특강 - 한비자",
      image: "./common/img/contentsCreation/hanfei.png",
      materialLink: "./common/down/hanfei.pdf",
      previewLink: "https://player.vimeo.com/video/1099880864"
    },
  ],
  //자기계발
  selfDevelopment: [
    {
      title: "일잘러의 생각정리 기술-비주얼씽킹&마인드맵",
      image: "./common/img/contentsCreation/visual.png",
      materialLink: "./common/down/visual.pdf",
      previewLink: "https://player.vimeo.com/video/1099891485"
    },
    {
      title: "일잘러를 위한 Reading & Writing 기술",
      image: "./common/img/contentsCreation/reading.png",
      materialLink: "./common/down/reading.pdf",
      previewLink: "https://player.vimeo.com/video/1099891347"
    },
  ],
  //자기관리
  selfManagement: [
    {
      title: "일잘러들의 성공 키워드 - 행동력 수업",
      image: "./common/img/contentsCreation/agency.png",
      materialLink: "./common/down/agency.pdf",
      previewLink: "https://player.vimeo.com/video/1099890601"
    },
  ],
  //조직관리
  organizationalManagement: [
    {
      title: "개인과 조직의 성장을 이끄는 힘, 멘토링 바이블",
      image: "./common/img/contentsCreation/mentoring.png",
      materialLink: "./common/down/mentoring.pdf",
      previewLink: "https://player.vimeo.com/video/1099881613"
    },
    {
      title: "윤수빈 작가의 ‘조직을 바꾸는 말 한마디의 힘’",
      image: "./common/img/contentsCreation/powerofspeech.png",
      materialLink: "./common/down/powerofspeech.pdf",
      previewLink: "https://player.vimeo.com/video/1113780299"
    },
  ],
};

function replaceContent(html) {
  document.querySelectorAll("main").forEach((el) => {
    if (el.id !== "mainPage") el.remove();
  });

  const oldFooter = document.querySelector("footer");
  if (oldFooter) oldFooter.remove();

  document.body.insertAdjacentHTML("beforeend", html);
}

function createMainVideoSection() {
  if (document.getElementById("mainVideoWrapper")) return;

  const section = document.createElement("section");
  section.id = "mainVideoWrapper";
  section.style = "position: relative; width: 100vw; height: calc(100vh - 104px); overflow: hidden; cursor: pointer;";
  section.innerHTML = `
    <div id="mainLogoMotion" class="logo-motion"">
      <img src="./common/img/header/logo_icon.png" alt="회사 로고" />
    </div>
    <video id="mainVideo" autoplay muted loop playsinline  preload="auto"
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: -1;">
      <source src="https://pub-79eaf3fe26bb455ead7282522d6076b0.r2.dev/main.mp4" type="video/mp4" />
    </video>
  `;

  section.addEventListener("click", () => {
    // 메뉴 스타일 적용
    document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));

    const menuItems = document.querySelectorAll(".menu-item span");
    menuItems.forEach(span => {
      if (span.textContent.trim() === "Creation") {
        span.closest(".menu-item").classList.add("active");
      }
    });

    // 페이지 전환
    setContentsCreationPage();
  });


  const main = document.createElement("main");
  main.id = "mainPage";
  main.style.display = "block"; // ✅ 항상 보이게
  main.appendChild(section);
  document.body.appendChild(main);

  const video = document.getElementById("mainVideo");
  const logo = document.getElementById("mainLogoMotion");

  if (!document.body.classList.contains("mainLogoShown")) {
    video.pause(); // 🔸 초기엔 일시정지

    video.addEventListener("canplaythrough", () => {
      logo.classList.remove("show");
      logo.remove();
      document.body.classList.add("mainLogoShown");
      video.play(); // 🔸 모든 데이터를 받을 수 있는 시점에 재생 시작
    });

    logo.classList.add("show");
  } else {
    logo.remove();
  }
}

function setMainPage() {
  // 모든 다른 main 숨기기
  document.querySelectorAll("main").forEach((el) => {
    if (el.id !== "mainPage") el.style.display = "none";
  });

  const main = document.getElementById("mainPage");
  const video = document.getElementById("mainVideo");

  if (main) main.style.display = "block";
  if (video) {
    video.style.display = "block"; // ✅ 다시 보이게
    if (video.paused) video.play().catch(() => { });
  }

  const footer = document.querySelector("footer");
  if (footer) footer.remove();
}

function hideMainPage() {
  const main = document.getElementById("mainPage");
  const video = document.getElementById("mainVideo");

  if (main) main.style.display = "none";
  if (video) {
    video.pause();
    video.style.display = "none"; // ✅ 영상 요소 자체도 숨김
  }
}

function setCompanyPage() {
  console.log("setCompanyPage 호출됨")
  const html = `
    <main>
      <nav class="category-nav">
        <ul class="timeline">
          <li class="active"><a href="#banner_01">Info</a></li>
          <li><a href="#banner_02">History</a></li>
          <li><a href="#banner_03">Value</a></li>
          <li><a href="#banner_04">Certificate</a></li>
        </ul>
      </nav>
      <section>
        <img class="companyBanner_main" src="./common/img/company/banner_main.png">
        <div class="companyWrap">
          <h2 class="companyTitle">
            <span class="sub_title">Company Info</span></br>
            회사 소개
            <img class="main-title-img" src="./common/img/contentsCreation/main-title-img.png" alt="타이틀이미지">
          </h2>
          <div class="banner_01" id="banner_01">
            <img class="companyBanner" src="./common/img/company/banner_01.png"/>
          </div>
          <div class="banner_02" id="banner_02">
            <img class="companyBanner" src="./common/img/company/banner_02.png"/>
          </div>
          <div class="banner_03" id="banner_03">
            <img class="companyBanner" src="./common/img/company/banner_03.png"/>
          </div>
          <div class="banner_04" id="banner_04">
            <img class="companyBanner" src="./common/img/company/banner_04.png"/>
                <button id="openCertPopup" class="cert-btn">인증서 보기</button>
          </div>
        </div>
      </section>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  const companyWrap = document.querySelector(".companyWrap");
  if (companyWrap) {
    companyWrap.classList.add("hidden-until-loaded");
  }
  renderFooterAfterImagesLoaded(() => {
    const mvw = document.getElementById("mainVideoWrapper");
    if (mvw && mvw.parentElement) {
      mvw.parentElement.style.display = "none";
    }
  });

  const mvw = document.getElementById("mainVideoWrapper");
  if (mvw && mvw.parentElement) {
    mvw.parentElement.style.display = "none";
  }

  // ✅ 클릭 시 부드러운 스크롤
  document.addEventListener("click", function (e) {
    const target = e.target.closest("a[href^='#banner_']");
    if (!target) return;

    e.preventDefault();

    const headerHeight = 104;
    const id = target.getAttribute("href");
    const section = document.querySelector(id);
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollTo = sectionTop - headerHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });

    document.querySelectorAll(".timeline li").forEach(li => li.classList.remove("active"));
    target.closest("li").classList.add("active");
  });

  // ✅ 스크롤 시 자동 active 표시
  window.addEventListener("scroll", function () {
    const headerHeight = 104;
    const sections = document.querySelectorAll("[id^='banner_']");

    let currentId = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top;

      if (offsetTop <= headerHeight + 10 && offsetTop + rect.height > headerHeight + 10) {
        currentId = "#" + section.id;
      }
    });

    if (currentId) {
      document.querySelectorAll(".timeline li").forEach(li => li.classList.remove("active"));
      const activeLink = document.querySelector(`.timeline li a[href='${currentId}']`);
      if (activeLink) {
        activeLink.closest("li").classList.add("active");
      }
    }
    const nav = document.querySelector(".category-nav");
    if (nav) {
      if (scrollY > 390) {
        nav.classList.add("shrink");
      } else {
        nav.classList.remove("shrink");
      }
    }
  });

  document.getElementById("openCertPopup").addEventListener("click", openCertPopup);
}

function openCertPopup() {
  if (document.getElementById("certPopup")) return;

  const popup = document.createElement("div");
  popup.id = "certPopup";

  popup.innerHTML = `
    <div class="cert-popup-overlay">
      <div class="cert-popup-container">
        <button class="cert-close-btn">&times;</button>
        <div class="cert-carousel">
          ${Array.from({ length: 15 }, (_, i) => {
            const index = i + 1;
            return `<img src="./common/img/cert/cert_${String(index).padStart(2, '0')}.png" class="cert-slide" data-index="${index}">`;
          }).join('')}
        </div>
        <div class="cert-thumbnail-wrapper">
          <button class="thumb-nav prev">&lt;</button>
          <div class="cert-thumbnail-row">
            ${Array.from({ length: 15 }, (_, i) => {
              const index = i + 1;
              return `
                <div class="thumb-box" data-index="${index}">
                  <img src="./common/img/cert/cert_${String(index).padStart(2, '0')}.png" class="cert-thumb" data-index="${index}">
                  <div class="thumb-label">${index}</div>
                </div>
              `;
            }).join('')}
          </div>
          <button class="thumb-nav next">&gt;</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(popup);

  setupCertCarousel(); // ✅ 여기만 실행하면 끝
}

function setupCertCarousel() {
  const images = [...document.querySelectorAll(".cert-slide")];
  let thumbStart = 0; // 시작 인덱스
  const thumbBoxes = [...document.querySelectorAll(".thumb-box")];
  const THUMBS_PER_VIEW = 5;

  function renderThumbnailStrip() {
    thumbBoxes.forEach((box, i) => {
      if (i >= thumbStart && i < thumbStart + THUMBS_PER_VIEW) {
        box.style.display = "flex"; // 보여질 때 flex 유지
      } else {
        box.style.display = "none";
      }
    });
  }

  document.querySelector(".thumb-nav.prev").addEventListener("click", () => {
    thumbStart = Math.max(0, thumbStart - 1);
    renderThumbnailStrip();
  });
  document.querySelector(".thumb-nav.next").addEventListener("click", () => {
    thumbStart = Math.min(thumbBoxes.length - THUMBS_PER_VIEW, thumbStart + 1);
    renderThumbnailStrip();
  });
  let current = 1;

  function renderSlides() {
    images.forEach((img) => {
      const idx = Number(img.dataset.index);
      const diff = (idx - current + 15) % 15;

      img.classList.remove("center", "left", "right", "hidden");
      if (diff === 0) {
        img.classList.add("center");
      } else if (diff === 1) {
        img.classList.add("right");
      } else if (diff === 14) {
        img.classList.add("left");
      } else {
        img.classList.add("hidden");
      }
    });

    thumbBoxes.forEach((box) => {
      const thumb = box.querySelector(".cert-thumb");
      thumb.classList.remove("active");
      if (Number(thumb.dataset.index) === current) {
        thumb.classList.add("active");
      }
    });
  }

  renderSlides();

  images.forEach(img => {
    img.addEventListener("click", () => {
      current = Number(img.dataset.index);
      renderSlides();
    });
  });

  thumbBoxes.forEach(thumb => {
    thumb.addEventListener("click", () => {
      current = Number(thumb.dataset.index);
      renderSlides();
    });
  });

  document.querySelector(".cert-close-btn").addEventListener("click", () => {
    document.getElementById("certPopup")?.remove();
  });
}

function setContentsServicePage() {
  console.log("setContentsServicePage 호출됨")
  const html = `
    <main>
      <section>
        <img class="companyBanner_main" src="./common/img/company/banner_main.png">
        <div class="serviceWrap">
          <h2 class="serviceTitle">
            <span class="sub_title">Contents Service</span></br>
            공공/대학 사업
            <img class="main-title-img" src="./common/img/contentsCreation/main-title-img.png" alt="타이틀이미지">
          </h2>
          </div>
        </div>
      </section>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  renderFooterAfterImagesLoaded();
}

function setLocationPage() {
  console.log("setLocationPage 호출됨");

  const html = `
    <main>
      <section>
        <img class="companyBanner_main" src="./common/img/location/banner_main.png">
        <div class="locationWrap">
          <h2 class="locationTitle">
            <span class="sub_title">Location</span></br>
            오시는 길
            <img class="main-title-img" src="./common/img/contentsCreation/main-title-img.png" alt="타이틀이미지">
          </h2>

          <!-- 지도 삽입 -->
          <div class="map-embed-container">
            <div class="map-loading">지도를 불러오는 중...</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.2726296593441!2d126.88693849162053!3d37.4768270442357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6100118f9ac3%3A0xc3e406ca227ee7e!2z7Y2867iU66atIOqwgOyCsA!5e0!3m2!1sko!2skr!4v1750375926441!5m2!1sko!2skr"
              width="100%" height="700px" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" onload="document.querySelector('.map-loading').style.display='none'"></iframe>
          </div>
          <div class="banner_01" id="banner_01">
            <img class="locationBanner" src="./common/img/location/banner_01.png"/>
          </div>

        </div>
      </section>
    </main>
  `;

  hideMainPage();
  replaceContent(html);
  renderFooterAfterImagesLoaded();
}

function setContentsCreationPage() {
  console.log("setContentsCreationPage 호출됨")
  const html = `
    <main>
      <nav class="category-nav">
        <ul class="timeline">
          <li class="active"><a href="#category-leadership">리더십</a></li>
          <li><a href="#category-it">IT</a></li>
          <li><a href="#category-workManagement">업무관리</a></li>
          <li><a href="#category-liberalArts">인문교양</a></li>
          <li><a href="#category-selfDevelopment">자기계발</a></li>
          <li><a href="#category-selfManagement">자기관리</a></li>
          <li><a href="#category-organizationalManagement">조직관리</a></li>
        </ul>
      </nav>
      <img class="companyBanner_main" src="./common/img/company/banner_main.png">
      <section class="contents-creation">
          <div class="categoryWrap">
            <h2 class="mainTitle">
              <span class="sub_title">Contents Creation</span></br>
              자체과정 콘텐츠 부문
              <img class="main-title-img" src="./common/img/contentsCreation/main-title-img.png" alt="메인타이틀이미지">
            </h2>
            ${contentsCategory
              .map((cat) => {
                const cardsHTML = generateCourseCards(contentsData[cat.key] || [], cat.key);
                const hasMore = (contentsData[cat.key] || []).length > 6;
                
                return `
                    <div class="category fade-up" id="category-${cat.key}">
                      <h3>
                        <img src="${cat.icon}" class="icon" alt="${cat.name} 아이콘">
                        ${cat.name}
                        <div class="line"></div>
                      </h3>
                      <div class="card-grid">${cardsHTML}</div>
                      ${hasMore ? `<div class="more-wrap"><button class="more-btn" data-target="${cat.key}">더보기</button></div>` : ""}
                    </div>
                `;
              })
            .join("")}
          </div>
      </section>
      <div style="display: none;">
        <a href="./common/kolon/01/01_01.html">코오롱 1차시</a>
      </div>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  const mainImage = document.querySelector(".companyBanner_main");
  const contentsEl = document.querySelector(".contents-creation");

  // 일단 콘텐츠 감추기
  if (contentsEl) {
    contentsEl.classList.add("hidden-until-loaded");
  }

  // 이미지 로딩 완료 시 콘텐츠 보이기
  if (mainImage) {
    if (mainImage.complete) {
      contentsEl?.classList.remove("hidden-until-loaded");
    } else {
      mainImage.addEventListener("load", () => {
        contentsEl?.classList.remove("hidden-until-loaded");
      });
    }
  }
  renderFooterAfterImagesLoaded();
  document.addEventListener("click", function (e) {
    const target = e.target.closest("a[href^='#category-']");
    if (!target) return;

    e.preventDefault();

    const headerHeight = 104;
    const id = target.getAttribute("href");
    const section = document.querySelector(id);
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollTo = sectionTop - headerHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });

    document.querySelectorAll(".timeline li").forEach(li => li.classList.remove("active"));
    target.closest("li").classList.add("active");
  });


  window.addEventListener("scroll", function () {
    const headerHeight = 104;
    const sections = document.querySelectorAll("[id^='category-']");

    let currentId = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top;

      if (offsetTop <= headerHeight + 10 && offsetTop + rect.height > headerHeight + 10) {
        currentId = "#" + section.id;
      }
    });

    if (currentId) {
      document.querySelectorAll(".timeline li").forEach(li => li.classList.remove("active"));
      const activeLink = document.querySelector(`.timeline li a[href='${currentId}']`);
      if (activeLink) {
        activeLink.closest("li").classList.add("active");
      }
    }
    const nav = document.querySelector(".category-nav");
    if (nav) {
      if (scrollY > 390) {
        nav.classList.add("shrink");
      } else {
        nav.classList.remove("shrink");
      }
    }
  });
  observeFadeUp();

  // 🍀 콘텐츠 생성 페이지 로딩 완료 후 추가
  document.querySelectorAll(".course-card .title_wrap").forEach(el => {
    el.addEventListener("click", () => {
      const card = el.closest(".course-card");
      const link = card?.dataset?.preview;
      if (link) {
        openPreviewModal(link);
      }
    });
  });

  document.querySelectorAll(".more-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const key = btn.dataset.target;
      document.querySelectorAll(`.course-card.hidden[data-category="${key}"]`)
        .forEach(card => card.classList.remove("hidden"));
      btn.style.display = "none"; // 버튼은 숨김
    });
  });
}

function setContentsStudioPage() {
  console.log("setContentsStudioPage 호출됨")
  const html = `
    <main>
      <nav class="category-nav">
        <ul class="timeline">
          <li class="active"><a href="#banner_01">스튜디오 A</a></li>
          <li><a href="#banner_02">스튜디오 B</a></li>
          <li><a href="#banner_03">스튜디오 C</a></li>
        </ul>
      </nav>
      <section>
        <img class="studioBanner_main" src="./common/img/studio/banner_main.png">
        <div class="studioWrap">
          <h2 class="studioTitle">
            <span class="sub_title">Studio Info</span></br>
            스튜디오 A
            <img class="main-title-img" src="./common/img/contentsCreation/main-title-img.png" alt="타이틀이미지">
          </h2>
          <div class="banner_01" id="banner_01">
            <img class="studioBanner" src="./common/img/studio/banner_01.png"/>
          </div>
          <div class="banner_02" id="banner_02">
            <h2 class="studioTitle">
              스튜디오 B
              <img class="main-title-img" src="./common/img/contentsCreation/main-title-img.png" alt="타이틀이미지">
            </h2>
            <img class="studioBanner" src="./common/img/studio/banner_02.png"/>
          </div>
          <div class="banner_03" id="banner_03">
            <h2 class="studioTitle">
              스튜디오 C
              <img class="main-title-img" src="./common/img/contentsCreation/main-title-img.png" alt="타이틀이미지">
            </h2>
            <img class="studioBanner" src="./common/img/studio/banner_03.png"/>
          </div>
        </div>
      </section>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  renderFooterAfterImagesLoaded();
  document.addEventListener("click", function (e) {
    const target = e.target.closest("a[href^='#banner_']");
    if (!target) return;

    e.preventDefault();

    const headerHeight = 104;
    const id = target.getAttribute("href");
    const section = document.querySelector(id);
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollTo = sectionTop - headerHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });

    document.querySelectorAll(".timeline li").forEach(li => li.classList.remove("active"));
    target.closest("li").classList.add("active");
  });

  // ✅ 스크롤 시 자동 active 표시
  window.addEventListener("scroll", function () {
    const headerHeight = 104;
    const sections = document.querySelectorAll("[id^='banner_']");

    let currentId = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top;

      if (offsetTop <= headerHeight + 10 && offsetTop + rect.height > headerHeight + 10) {
        currentId = "#" + section.id;
      }
    });

    if (currentId) {
      document.querySelectorAll(".timeline li").forEach(li => li.classList.remove("active"));
      const activeLink = document.querySelector(`.timeline li a[href='${currentId}']`);
      if (activeLink) {
        activeLink.closest("li").classList.add("active");
      }
    }
    const nav = document.querySelector(".category-nav");
    if (nav) {
      if (scrollY > 390) {
        nav.classList.add("shrink");
      } else {
        nav.classList.remove("shrink");
      }
    }
  });
}

function generateCourseCards(dataList, categoryKey) {
  return dataList
    .map((item, index) => {

      return `
        <div class="course-card ${index >= 8 ? 'hidden' : ''}" data-category="${categoryKey}" data-preview="${item.previewLink}">
          <div class="title_wrap">
            <img src="${item.image}" alt="썸네일" />
            <p class="course-title">${item.title}</p>
            <div class="preview-overlay">
              <span class="preview-text"></span>
            </div>
          </div>
        </div>
      `;
    }).join("");
}

function openPreviewModal(link) {
  // 이미 모달이 있으면 제거
  const old = document.getElementById("previewModal");
  if (old) old.remove();

  // 모달 요소 생성
  const modal = document.createElement("div");
  modal.id = "previewModal";
  modal.style = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.8);
    display: flex; justify-content: center; align-items: center;
    z-index: 9999;
  `;
  modal.innerHTML = `
    <div style="position: relative; width: 80vw; max-width: 960px; aspect-ratio: 16/9;">
      <iframe src="${link}" 
              style="width: 100%; height: 100%; border: none;" 
              allow="autoplay; fullscreen" allowfullscreen></iframe>
      <button onclick="document.getElementById('previewModal').remove()" 
              style="position: absolute; top: -40px; right: 0; background: none; border: none; font-size: 30px; color: white; cursor: pointer;">×</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function observeFadeUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
}

function renderFooterAfterImagesLoaded(callback) {
  const images = document.querySelectorAll(".companyWrap img");
  let loaded = 0;

  if (images.length === 0) {
    renderBottomBanner();
    document.querySelector(".companyWrap")?.classList.remove("hidden-until-loaded"); // ✅ 즉시 표시
    callback?.();
    return;
  }

  images.forEach(img => {
    if (img.complete) {
      loaded++;
    } else {
      img.addEventListener("load", () => {
        loaded++;
        if (loaded === images.length) {
          renderBottomBanner();
          document.querySelector(".companyWrap")?.classList.remove("hidden-until-loaded"); // ✅ 모두 로딩 후 표시
          callback?.();
        }
      });
    }
  });

  if (loaded === images.length) {
    renderBottomBanner();
    document.querySelector(".companyWrap")?.classList.remove("hidden-until-loaded"); // ✅ 모두 로딩 후 표시
    callback?.();
  }
}