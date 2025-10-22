/**
	2017. 01. 23
	stroy21
	FunnsySky 
	funnysky@story21.co.kr
**/

///////////////////////////////////////////////////////////////////////////////////////////////////

var isLocal = true;   // true 로컬, false 서버				
var vodPath;		       // 영상 주소
var controlcheck = 1;     // 0:순차진행안함 1:순차진행

/* 재생 시 로딩해야 할 함수 */
function studyOnLoad() {

	var stdyFnlInfo = window.parent.stdyFnlInfo;              //  최종진도값  ex) 0103 (01차시 03페이지) 
	var authKey = window.parent.authKey;                    //  인증키(콘텐츠)
	var preViewLectYn = window.parent.preViewLectYn;  //   Y: 맛보기강의
	var reviewYn = window.parent.reviewYn;                  //   Y: 복습
	//alert("reviewYn : " + reviewYn)
}

studyOnLoad();

//alert("location.href : "+location.href)

if (location.href.indexOf("file") != -1 || location.href.indexOf("story21") != -1) {
	console.log("개발중")
} else {
	console.log("포팅");
}


if (isLocal) {
	console.log("개발")
	vodPath = "https://vod.cdn.hunet.co.kr/eLearning/Hunet/HLAC12148/";
} else {
	console.log("포팅");
	vodPath = "https://vod.cdn.hunet.co.kr/eLearning/Hunet/HLAC12148/";

}

/** 
	CSS
**/
document.write('<link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">');
document.write('<link href="../common/css/reset.css"  rel="stylesheet" />');
document.write('<link href="../common/css/style.css"  rel="stylesheet" />');

document.write('<link href="../common/css/bottom.css"  rel="stylesheet" />');
document.write('<link href="../common/css/font.css"  rel="stylesheet" type="text/css" charset="utf-8" />');


/**
	JS
**/

document.write('<script language="javascript" src="./js/scriptInfo.js"></script>');
document.write('<script language="javascript" src="./js/index.js"></script>');
document.write('<script language="javascript" src="../common/js/bottom.js"></script>');
document.write('<script language="javascript" src="../common/js/top.js"></script>');
document.write('<script language="javascript" src="../common/js/ui.js"></script>');
document.write('<script language="javascript" src="../common/js/audio.js"></script>');
document.write('<script language="javascript" src="../common/LMS/LMS_API.js"></script>');
document.write('<script language="javascript" src="../common/LMS/kbc.en.2023v1.min.js"></script>');


function itostr(inum) {
	return inum < 10 ? "0" + inum : inum;
}

// 시분초 초로 변환 
function timeToSecond(str) {
	var timeArr = str.split(":");
	var SecondTime = Number(timeArr[0] * 60) + Number(timeArr[1]);
	console.log("SecondTime : " + SecondTime + " str : " + str);
	return SecondTime;
}

function isMobilePlatform() {
	const ua = navigator.userAgent;

	// iPadOS 13+ 대응 (Mac OS + 터치 지원)
	const isModerniPad =
		(ua.includes("Macintosh") && 'ontouchend' in document) ||
		(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

	if (
		ua.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null ||
		ua.match(/LG|SAMSUNG|Samsung|iPad/i) != null ||
		isModerniPad
	) {
		return true;
	}
	return false;
}


function NextMove(next_page) {
	if (isLocal) {
		location = next_page;
	} else {
		//	location= next_page;
		window.parent.postMessage({ 'func': 'next', 'message': {} }, "*");
	}
}


function initLoading() {
	var html = '';
	html += '<div id="loading-center">';
	html += '<div id="loading-center-absolute">';
	html += '<div class="object" id="object_four"></div>';
	html += '<div class="object" id="object_three"></div>';
	html += '<div class="object" id="object_two"></div>';
	html += '<div class="object" id="object_one"></div>';
	html += '</div>';
	html += '</div>';
	$("#loadingUI").html(html);
}

function toggleFullscreen() {
	const elem = document.getElementById("fs-container"); // 또는 document.documentElement
	if (!document.fullscreenElement) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.webkitRequestFullscreen) { // Safari
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { // IE/Edge
			elem.msRequestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
}

var effectSnd = new Audio();
effectSnd.autoplay = true;
effectSnd.addEventListener('ended', function () {
	var sound = effectSnd.src.split("/");
	sound = sound[(sound.length - 1)].replace(".mp3", "");
	console.log(sound);
});
function effect_sound_fn(_type) {
	effectSnd.src = "../common/sound/" + _type + ".mp3";
	effectSnd.load(function () {
		effectSnd.play();
	});
}

function playBGM(_type) {
	let bgm = document.getElementById("bgm-audio");
	if (!bgm) {
		bgm = document.createElement("audio");
		bgm.id = "bgm-audio";
		bgm.loop = true;
		document.body.appendChild(bgm); // 필요한 경우 wrap 또는 mediaUI에 넣을 수도 있음
	}
	bgm.src = "../common/sound/" + _type + ".mp3";
	bgm.volume = 0.15;
	bgm.load();
	bgm.play();
}

function stopBGM() {
	const bgm = document.getElementById("bgm-audio");
	if (bgm) {
		bgm.pause();
		bgm.currentTime = 0; // 처음부터로 초기화
	}
}

function addBlinkEffect(buttonId) {
	setTimeout(() => {
		const btn = document.getElementById(buttonId);
		if (btn) {
			btn.classList.add("blinking");
		}
	}, 2000); // 무조건 2초(2000ms) 딜레이
}

function removeBlinkEffect(buttonId) {
	const btn = document.getElementById(buttonId);
	if (btn) {
		btn.classList.remove("blinking");
	}
}