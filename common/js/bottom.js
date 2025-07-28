function renderBottomBanner() {
  const existing = document.querySelector("footer");
  if (existing) existing.remove();

  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearText = startYear === currentYear ? `${startYear}` : `${startYear}–${currentYear}`;

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="footer-inner">
      <h2 class="footer-title"><img src="./common/img/bottom/bottom_logo.png"></h2>
      <p class="footer-address">서울특별시 금천구 디지털로 178 퍼블릭가산 B동 1401호</p>
      <p class="footer-copy">Copyright © ${yearText} PrimeContentsLab. ALL Rights Reserved.</p>
    </div>
    <button id="scrollTopBtn" class="scroll-top-btn"></button>
  `;
  document.body.appendChild(footer);

  const btn = document.getElementById("scrollTopBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

window.addEventListener("scroll", function () {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return; // ✅ 버튼 없으면 중단

  const certPopup = document.getElementById("certPopup");
  const popupOpened = certPopup && certPopup.style.display === "flex"; // ✅ null 체크 포함

  if (popupOpened) {
    btn.style.display = "none";
    return;
  }

  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});