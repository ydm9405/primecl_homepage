function loadScript(path) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement("script");
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
        const link = document.createElement("link");
        link.href = path;
        link.rel = "stylesheet";
        link.type = "text/css";
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`CSS load error: ${path}`));
        document.head.appendChild(link);
    });
}

const cssList = [
    "./common/css/reset.css",
    "./common/css/font.css",
    "./common/css/header.css",
    "./common/css/main.css",
    "./common/css/bottom.css",
];

const jsList = [
    "./common/js/intro.js",
    "./common/js/header.js",
    "./common/js/main.js",
    "./common/js/bottom.js",
    "./common/js/ui.js",
];

(async () => {
    try {
        await Promise.all(cssList.map(loadCSS));
        await Promise.all(jsList.map(loadScript));

        if (typeof initialize === "function") {
            initialize();
        }

    } catch (err) {
        console.error("⛔ 리소스 로딩 실패:", err.message);
    }
})();