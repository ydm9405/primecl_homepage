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
      materialLink: "./common/down/resilience.zip",
      previewLink: "https://player.vimeo.com/video/1099890425"
    },
    {
      title: "슬기로운 갈등 관리",
      image: "./common/img/contentsCreation/mediation.png",
      materialLink: "./common/down/mediation.zip",
      previewLink: "https://player.vimeo.com/video/1099883106"
    },
    {
      title: "개인과 조직의 성장을 이끄는 밀레니얼 워커십",
      image: "./common/img/contentsCreation/millennial.png",
      materialLink: "./common/down/millennial.zip",
      previewLink: "https://player.vimeo.com/video/1099881049"
    },
  ],
  //IT
  it: [
    {
      title: "처음 배우는 생성형AI 프로그램개발(LLM)",
      image: "./common/img/contentsCreation/LLM.png",
      materialLink: "./common/down/LLM.zip",
      previewLink: "https://player.vimeo.com/video/1099891617"
    },
    {
      title: "처음 배우는 쿠버네티스 개발 전략",
      image: "./common/img/contentsCreation/kubernetes.png",
      materialLink: "./common/down/kubernetes.zip",
      previewLink: "https://player.vimeo.com/video/1099891525"
    },
    {
      title: "처음 배우는 리액트",
      image: "./common/img/contentsCreation/react.png",
      materialLink: "./common/down/react.zip",
      previewLink: "https://player.vimeo.com/video/1099891551"
    },
    {
      title: "전혀 다른 생성형 AI",
      image: "./common/img/contentsCreation/ai.png",
      materialLink: "./common/down/ai.zip",
      previewLink: "https://player.vimeo.com/video/1099891176"
    },
    {
      title: "처음 배우는 클린코드 With 파이썬",
      image: "./common/img/contentsCreation/cleanCode.png",
      materialLink: "./common/down/cleanCode.zip",
      previewLink: "https://player.vimeo.com/video/1099882971"
    },
    {
      title: "AI시대, 일잘러를 위한 데이터 사고와 분석법",
      image: "./common/img/contentsCreation/data.png",
      materialLink: "./common/down/data.zip",
      previewLink: "https://player.vimeo.com/video/1099882017"
    },
    {
      title: "챗 GPT로 만드는 주식&<br>암호화폐 자동매매 시스템",
      image: "./common/img/contentsCreation/cryptocurrency.png",
      materialLink: "./common/down/cryptocurrency.zip",
      previewLink: "https://player.vimeo.com/video/1099882133"
    },
    {
      title: "누구나 쉽게 배우는 도커 기초 및 활용법",
      image: "./common/img/contentsCreation/docker.png",
      materialLink: "./common/down/docker.zip",
      previewLink: "https://player.vimeo.com/video/1099882852"
    },
    {
      title: "모두를 위한 AI 데이터 시각화 수업",
      image: "./common/img/contentsCreation/dataVisualization.png",
      materialLink: "./common/down/dataVisualization.zip",
      previewLink: "https://player.vimeo.com/video/1099880673"
    },
    {
      title: "누구나 쉽게 배우는 NoSQL-Mongo DB",
      image: "./common/img/contentsCreation/mongoDB.png",
      materialLink: "./common/down/mongoDB.zip",
      previewLink: "https://vimeo.com/987654321"
    },
  ],
  //업무관리
  workManagement: [
    {
      title: "10분만에 AI 활용법",
      image: "./common/img/contentsCreation/aiQuickstart.png",
      materialLink: "./common/down/aiQuickstart.zip",
      previewLink: "https://player.vimeo.com/video/1099882065"
    },
    {
      title: "스마트 워크로 워크 스마트하기",
      image: "./common/img/contentsCreation/smartWork.png",
      materialLink: "./common/down/smartWork.zip",
      previewLink: "https://player.vimeo.com/video/1099882304"
    },
    {
      title: "일잘러의 창의적 문제 해결 방법",
      image: "./common/img/contentsCreation/creativity.png",
      materialLink: "./common/down/creativity.zip",
      previewLink: "https://player.vimeo.com/video/1099883069"
    },
    {
      title: "일잘러의 비즈니스 매너",
      image: "./common/img/contentsCreation/etiquette.png",
      materialLink: "./common/down/etiquette.zip",
      previewLink: "https://player.vimeo.com/video/1099880723"
    },
    {
      title: "신규 입사자의 온보딩 과정,<br>워(Work).플(People).킹(Networking)",
      image: "./common/img/contentsCreation/onboarding.png",
      materialLink: "./common/down/onboarding.zip",
      previewLink: "https://player.vimeo.com/video/1099881458"
    },
  ],
  //인문교양
  liberalArts: [
    {
      title: "명욱교수와 함께 떠나는 술기로운 세계사",
      image: "./common/img/contentsCreation/boozehistory.png",
      materialLink: "./common/down/boozehistory.zip",
      previewLink: "https://player.vimeo.com/video/1099891577"
    },
    {
      title: "직장인을 위한 인생 특강 - 니체",
      image: "./common/img/contentsCreation/nietzsche.png",
      materialLink: "./common/down/nietzsche.zip",
      previewLink: "https://player.vimeo.com/video/1099891647"
    },
    {
      title: "직장인을 위한 인생 수업 - 그리스로마신화",
      image: "./common/img/contentsCreation/mythology.png",
      materialLink: "./common/down/mythology.zip",
      previewLink: "https://player.vimeo.com/video/1099882040"
    },
    {
      title: "승리하는 사람들의 인생 바이블, 손자병법",
      image: "./common/img/contentsCreation/strategy.png",
      materialLink: "./common/down/strategy.zip",
      previewLink: "https://player.vimeo.com/video/1099881210"
    },
    {
      title: "직장인을 위한 인생 특강 - 한비자",
      image: "./common/img/contentsCreation/hanfei.png",
      materialLink: "./common/down/hanfei.zip",
      previewLink: "https://player.vimeo.com/video/1099880864"
    },
  ],
  //자기계발
  selfDevelopment: [
    {
      title: "일잘러의 생각정리 기술-비주얼씽킹&마인드맵",
      image: "./common/img/contentsCreation/visual.png",
      materialLink: "./common/down/visual.zip",
      previewLink: "https://player.vimeo.com/video/1099891485"
    },
    {
      title: "일잘러를 위한 Reading & Writing 기술",
      image: "./common/img/contentsCreation/reading.png",
      materialLink: "./common/down/reading.zip",
      previewLink: "https://player.vimeo.com/video/1099891347"
    },
  ],
  //자기관리
  selfManagement: [
    {
      title: "일잘러들의 성공 키워드 - 행동력 수업",
      image: "./common/img/contentsCreation/agency.png",
      materialLink: "./common/down/agency.zip",
      previewLink: "https://player.vimeo.com/video/1099890601"
    },
  ],
  //조직관리
  organizationalManagement: [
    {
      title: "개인과 조직의 성장을 이끄는 힘, 멘토링 바이블",
      image: "./common/img/contentsCreation/mentoring.png",
      materialLink: "./common/down/mentoring.zip",
      previewLink: "https://player.vimeo.com/video/1099881613"
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
  section.style = "position: relative; width: 100vw; height: calc(100vh - 104px); overflow: hidden;";
  section.innerHTML = `
    <div id="mainLogoMotion" class="logo-motion">
      <img src="./common/img/header/logo_icon.png" alt="회사 로고" />
    </div>
    <video id="mainVideo" autoplay muted loop playsinline
      style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: -1;">
      <source src="https://video-workers.ydm9405.workers.dev/main.mp4" type="video/mp4" />
    </video>
  `;

  const main = document.createElement("main");
  main.id = "mainPage";
  main.style.display = "block"; // ✅ 항상 보이게
  main.appendChild(section);
  document.body.appendChild(main);

  const video = document.getElementById("mainVideo");
  const logo = document.getElementById("mainLogoMotion");

  if (!document.body.classList.contains("mainLogoShown")) {
    logo.classList.add("show");
    video.addEventListener("canplaythrough", () => {
      logo.classList.remove("show");
      logo.remove();
      document.body.classList.add("mainLogoShown");
    });
  } else {
    logo.remove(); // 이미 보여줬으면 제거
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
  const html = `
    <main>
      <section>
        <div class="companyWrap">
          <div class="banner_01">
            <img class="companyBanner" src="./common/img/company/banner_01.png"/>
          </div>
          <div class="banner_02">
            <img class="companyBanner" src="./common/img/company/banner_02.png"/>
          </div>
          <div class="banner_03">
            <img class="companyBanner" src="./common/img/company/banner_03.png"/>
          </div>
          <div class="banner_04">
            <img class="companyBanner" src="./common/img/company/banner_04.png"/>
          </div>
        </div>
      </section>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  renderBottomBanner();

  const mvw = document.getElementById("mainVideoWrapper");
  if (mvw && mvw.parentElement) {
    mvw.parentElement.style.display = "none";
  }
}

function setContentsServicePage() {
  const html = `
    <main>
      <section style="padding: 100px 40px;">
        <h1>Contents Service</h1>
      </section>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  renderBottomBanner();
}

function setContentsCreationPage() {
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
      <section class="contents-creation">
        <h2>자체과정 콘텐츠 부문
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
      </section>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  renderBottomBanner();
  document.addEventListener("click", function (e) {
    const target = e.target.closest("a[href^='#category-']");
    if (!target) return;

    e.preventDefault();

    const headerHeight = 110;
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
    const headerHeight = 110;
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
  });
  observeFadeUp();

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
  const html = `
    <main>
      <section style="padding: 100px 40px;">
        <h1>Contents Studio</h1>
      </section>
    </main>
  `;
  hideMainPage();
  replaceContent(html);
  renderBottomBanner();
}

function generateCourseCards(dataList, categoryKey) {
  return dataList
    .map((item, index) => `
      <div class="course-card ${index >= 6 ? 'hidden' : ''}" data-category="${categoryKey}">
        <div class="title_wrap">
          <img src="${item.image}" alt="썸네일" />
          <p class="course-title">${item.title}</p>
        </div>
        <div class="btn-group">
          <a href="${item.materialLink}" download>
            <button>과정 소개자료</button>
          </a>
          <button onclick="openPreviewModal('${item.previewLink}')">맛보기 영상</button>
        </div>
      </div>
    `).join("");
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