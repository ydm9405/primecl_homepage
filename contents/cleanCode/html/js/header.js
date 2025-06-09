function setHeader() {
  console.log("setHeader 호출");
  $("#fs-header").append(`
      <div id="header">
          <div id="pageHeader"><h1 class="headerTitle">처음 배우는 클린코드 with 파이썬</h1></div>
          <div id="logo"><a href="https://prime2.synology.me:38088/ownCourse/index.html"><img class="logo_img" src ="../../../img/logo.png"></a></div>
      </div>
  `);
}