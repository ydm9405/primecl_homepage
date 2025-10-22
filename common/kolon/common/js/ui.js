/**
	2017. 03. 10
	stroy21
	FunnsySky 
	funnysky@story21.co.kr
	UI View 
**/

var w_h;
var w_w;
var container_scale = 1;
var dev = true;// true 개발중 //false 검수
var mobileReadyFlag = false;//모바일 재생 확인
var samsung_Browser_4;
var deviceMobile;
var device_Android_4;
var device_iPhone;
var device_iPad;
var samsung_Browser_4;
var iframe = window.parent.document.getElementById("main") || window.parent.document.querySelector("iframe[name='main']");
var browserWidth = top.window.innerWidth;
var browserHeight = top.window.innerHeight;

/* 모바일 기기 확인 ---------------------------------------------------------------------------------------------------------------------------- */

/* 2025.06.20 수정 */

var confMobile = mobileConf();

console.log("confMobile : "+confMobile);

function mobileConf(){

	/* 터치 이벤트가 있는지 여부로 모바일 기기 체크 */

	try{
		document.createEvent("TouchEvent");
		return "mobile";
	}catch(e){
		return "pc";
	}

}
/* ---------------------------------------------------------------------------------------------------------------------------------------- */

/** onload **/
document.addEventListener("DOMContentLoaded", function () {
	if (isMobilePlatform()) {
		console.log(" 모바일 ");
	}
	if (!isLocal) {
		adjustMainIframeSize();
	}
	responsive();
});

/** resizing **/
$(window).resize(function (e) {
	//M_chage();
	if (!isLocal) {
		adjustMainIframeSize();
	}
	responsive();
});

/** 모바일 화면 돌릴때 **/
$(window).on("orientationchange", function (event) {
	//M_chage();
	if (!isLocal) {
		adjustMainIframeSize();
	}
	responsive();
});
/** 페이지 초기화 **/
function initialize() {
	$('#fs-index').attr('showing', false)
	if (!dev) {//개발 아닐때 
		$("body").attr("oncontextmenu", "return false");
		$("body").attr("ondragstart", "return false");
		$("body").attr("onselectstart", "return false");
	}
	/** coin */
	// setCoin();
	// settingStart()

	/** menu **/
	setIndex();

	/** bottom **/
	setBottom();

	/** top **/
	// newstyle()
	setTop();

	/** 효과음 장착 **/
	writeEffectAudio();
	$("*").removeAttr("title")

	// if (jQuery.browser.safari) {
	// 	console.log("사파리 브라우저 차단")
	// 	// Safari인 경우 얼럿 메시지 띄우기
	// 	alert("(Error) safari 브라우저는 지원하지 않습니다.");

	// 	$('#wrap').css("pointer-events","none")
	// 	setPause()
	// 	handleCloseClick()
	// }	
	setTimeout(() => {
		if (!isLocal) {
			adjustMainIframeSize();
		}
		$(top.window).resize(function (e) {
			//M_chage();
			if (!isLocal) {
				adjustMainIframeSize();
			}
			responsive();
		});
	}, 100);

	document.addEventListener("fullscreenchange", () => {
		const isFullscreen = !!document.fullscreenElement;
		handleFullscreenChange(isFullscreen);
	});
}

//반응형 scale 조정
function responsive() {
	w_h = $('#wrap').height();
	w_w = $('#wrap').width();

	const maxW = 1280;
	const maxH = 720;

	const isFullscreen = !!document.fullscreenElement;

	let h_scale = w_h / maxH;
	let w_scale = w_w / maxW;

	/* 2025.06.20 수정 */
	if (isFullscreen || confMobile == "mobile") {
		// 전체화면일 때는 무제한 확장 허용 + 모바일 기기에서도 무제한 확장
		container_scale = Math.min(h_scale, w_scale);
	} else {
		// 전체화면 아닐 때는 최대 1까지만 확대
		container_scale = Math.min(1, Math.min(h_scale, w_scale));
	}

	$("#fs-container").css("transform", `scale(${container_scale}, ${container_scale})`);
	$("#fs-container").css({
		left: "50%",
		top: "50%",
		"margin-left": -maxW / 2 * container_scale,
		"margin-top": -maxH / 2 * container_scale
	});
}



function M_chage() {
	if (!mobileReadyFlag) {
		$("#mobile_ready img").attr("src", "../common/css/img/m_ready.png");
		$("#mobile_ready").show();
	} else {
		$("#mobile_ready").hide();
	}
	$("#mobile_ready").on("click", function () {
		$(this).hide();
		setPlay();
		mobileReadyFlag = true;
	});
	//	}
}

//모바일 view
function movileAlertView() {
	var m_view = '';
	m_view += '<div id="mobile_ready" style="z-index:999;width:100%;height:100%;position:fixed;left:0;top:0;text-align:center;background:rgba(0,0,0,0.8);display:none;">';
	m_view += '	<img style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);">';
	m_view += '</div>';
	$("#wrap").append(m_view);

}

function isMobilePlatform() {
	const ua = navigator.userAgent;

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

function MobileCheck() {
	deviceMobile = true;
	device_Android_4 = false;
	device_iPhone = false;
	device_iPad = false;
	samsung_Browser_4 = false;

	const ua = navigator.userAgent;

	// iPadOS 13 이상 대응 (맥 + 터치)
	const isModerniPad =
		(ua.includes("Macintosh") && 'ontouchend' in document) ||
		(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

	if (/Android/i.test(ua) || /iPhone/i.test(ua) || /iPad/i.test(ua) || /Mobile/i.test(ua) || isModerniPad) {
		if (/SamsungBrowser\/4.0/i.test(ua)) {
			alert("배속을 지원하지 않는 브라우저 입니다.");
			samsung_Browser_4 = true;
		}

		if (/Android 4./i.test(ua)) {
			device_Android_4 = true;
		} else {
			device_Android_4 = false;
			device_iPhone = /iPhone/i.test(ua);
			device_iPad = /iPad/i.test(ua) || isModerniPad;
		}
	} else {
		deviceMobile = false;
	}
}

function adjustMainIframeSize() {
	// 부모 프레임의 최상단 위치에 있는 #main iframe 요소를 찾습니다.

	// #main iframe이 감지되었을 때만 실행합니다.
	if (iframe !== 'undefined' && iframe !== null) {
		// 브라우저의 너비와 높이를 가져옵니다.
		// 부모 프레임인 #main의 크기를 브라우저 크기에 맞춥니다.
		browserWidth = top.window.innerWidth;
		browserHeight = top.window.innerHeight;
		iframe.style.width = browserWidth + "px";
		iframe.style.height = browserHeight + "px";
	}
}

function adjustContainerInnerSize(isFullscreen) {
	const container = document.querySelector(".container_inner");
	if (!container) return;

	if (isFullscreen) {
		container.style.width = "100vw";
		container.style.height = "100vh";
	} else {
		container.style.width = "1280px";
		container.style.height = "720px";
	}
}

function handleFullscreenChange(isFullscreen) {
	adjustContainerInnerSize(isFullscreen); // ✅ 크기 동적 적용
	responsive(); // ✅ 스케일 재조정
}