function loadScript(path) {
  return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = path;
      script.type = "text/javascript";
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Script load error: ${path}`));
      document.head.appendChild(script);
  });
}

function loadCSS(path) {
  return new Promise(function (resolve, reject) {
      var link = document.createElement("link");
      link.href = path;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.onload = () => {
          console.log(`Loaded CSS: ${path}`);
          resolve();
      };
      link.onerror = () => reject(new Error(`CSS load error: ${path}`));
      document.head.appendChild(link);
  });
}

Promise.all([
  loadCSS("./css/reset.css"),
  loadCSS("./css/style.css"),
  loadCSS("./css/font.css"),
  loadCSS("./css/header.css"),
  loadCSS("./css/index.css"),
  loadCSS("./css/contents.css"),
  loadCSS("./css/bottom.css"),
])
  .then(() =>
      Promise.all([
        loadScript("./js/header.js"),
          loadScript("./js/index.js"),
          loadScript("./js/contents.js"),
          loadScript("./js/bottom.js"),
          loadScript("./js/ui.js"),
      ])
  )
  .then(() => {
      $(document).ready(function () {
          initialize();
      });
  })
  .catch((err) => console.error(err.message));

  function setFavicon(url) {
    // 기존 파비콘 삭제
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
      existingFavicon.parentNode.removeChild(existingFavicon);
    }
    
    // 새 파비콘 생성
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';  // 필요에 따라 'image/x-icon'으로 변경
    favicon.href = url;
    
    // <head>에 추가
    document.head.appendChild(favicon);
    }
    
    // 사용 예제
    setFavicon('../html/img/favicon.png');