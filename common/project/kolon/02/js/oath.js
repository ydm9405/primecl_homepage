let quizFinished = false;

function setOath() {
    renderOathForm();
    bindOathEvents();
    requestAgreementInfo();
}

function renderOathForm() {
    const container = document.getElementById("fs-content");
    const div = document.createElement("div");
    div.className = "oath-wrap";
    div.innerHTML = `
  <img src="../common/img/oathUI/oath.png" alt="보안 서약서" style="width: 100%; display: block;">
  <div class="oath-fields">
    <label>소속: <input type="text" id="belong" readonly /></label>
    <label>사번: <input type="text" id="id_num" readonly /></label>
    <label>성명: <input type="text" id="name" placeholder="성명을 입력하세요" /></label>
    <button class="ck_ok"></button>
  </div>
  `;
    container.appendChild(div);
}

function requestAgreementInfo() {
    const info =
        window.getAgreementLearnerInfo?.() ||
        window.parent?.getAgreementLearnerInfo?.() ||
        window.parent?.parent?.getAgreementLearnerInfo?.();
    if (!info) return;

    const wraps = {
        belong: document.querySelector("#belong"),
        idNum: document.querySelector("#id_num"),
        name: document.querySelector("#name"),
        confirmBtn: document.querySelector("button.ck_ok"),
    };

    wraps.belong.value = info.bizNm || '';
    wraps.idNum.value = info.employeeNo || '';

    if (info.signYn === "Y") {
        wraps.name.value = info.name || '';
        wraps.name.setAttribute("readonly", true);
        wraps.confirmBtn.disabled = true;
        progressControll = "Y";
    } else {
        //wraps.name.placeholder = info.name || "이름을 입력하세요";
        wraps.name.placeholder = "성명을 입력해주세요.";
        wraps.name.value = '';
    }

    wraps.name.dataset.original = info.name || '';
}

function bindOathEvents() {
    const wraps = {
        wrap: document.querySelector("#wrap"),
        belong: document.querySelector("#belong"),
        idNum: document.querySelector("#id_num"),
        name: document.querySelector("#name"),
        confirmBtn: document.querySelector("button.ck_ok"),
    };

    const replaceChar = /[~!@\#$%^&*\()\-=+_'\;<>\/.\`:\"\\,\[\]?|{}]/gi;
    const data = { belong: "", idNum: "", name: "" };

    // 이름 입력 유효성 필터링
    wraps.name.addEventListener("input", function () {
        this.value = this.value.replace(replaceChar, "");
        data.name = this.value;

        // 스크롤 이동
        const scrollContainer = document.querySelector(".oath-wrap");
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    });

    wraps.confirmBtn.style.display = "block";

    // 제출 버튼 이벤트
    wraps.confirmBtn.addEventListener("click", function () {
        const typedName = wraps.name.value.trim();
        const originalName = wraps.name.dataset.original;

        // ✅ 빈 값 검사
        if (!typedName) {
            alert("성명을 입력해주세요.");
            return;
        }

        // ✅ 값 불일치 검사
        if (typedName !== originalName) {
            alert("기입한 성명과 실제 성명이 일치하지 않습니다.");
            return;
        }

        // ✅ 정상 제출
        const data = {
            name: typedName,
            bizNm: wraps.belong.value,
            employeeNo: wraps.idNum.value
        };

        window.parent.parent.postMessage({
            func: 'saveContentsAgreement',
            message: {
                ...data,
                indexNo: 2,
                frameNo: 13
            }
        }, "*");

        setTimeout(() => {
            const info =
                window.getAgreementLearnerInfo?.() ||
                window.parent?.getAgreementLearnerInfo?.() ||
                window.parent?.parent?.getAgreementLearnerInfo?.();

            if (info?.signYn === "Y") {
                alert(`${data.name}님의 서약서 제출이 완료되었습니다.`);
                window.parent.parent.postMessage({ func: 'next', message: {} }, "*");
            } else {
                console.log("서약서 저장 안됨.");
            }
        }, 1000);

        wraps.name.setAttribute("readonly", true);
        wraps.confirmBtn.disabled = true;

        progressControll = "Y";
        quizFinished = true;
    });
}

window.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("MPlayer"); // video 태그의 실제 ID
    if (!video) return;
    video.addEventListener("ended", function () {
        setOath();
        effect_sound_fn("02/02_oath")
    })

    video.addEventListener("play", function () {
        // 1. 보안 서약서 제거
        const existingImg = document.querySelector(".oath-wrap");
        if (existingImg) {
            existingImg.remove(); // 완전히 제거하거나
            // 또는 기존처럼 숨기기만 할 수도 있음
        }
    });

    video.addEventListener("seeked", function () {
        if (quizFinished) {
            // 유저가 재생바를 건드린 경우에도 정리
            const existingImg = document.querySelector(".oath-wrap");
            existingImg && (existingImg.style.display = "none", existingImg.innerHTML = "");
        }
    });
})