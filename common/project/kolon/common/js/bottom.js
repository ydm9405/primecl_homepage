/**
	2017. 03. 10
	stroy21
	FunnsySky 
	funnysky@story21.co.kr
	Bottom View 
**/

///////////////////////////////////////////////////////////////////////////////////////////////////
var Player, _rect, _slide_bg, _sound_bar, _handleGap = 11, speedNum, pictureNum, _dragWidth, _dragX;
var videoChk = false;
var scriptFlag = false;
var volume = 0.5;
var rateNum = 1;
var mapFlag = false;
var slideDownFlag = false;
var soundBarW;
var enableScript = true;
var pictFlag = false;

var quiz13End = 1;
let lastHandledTime = 0;

var progressControll = "Y"; //수정 

(function chkScript(i) {
	setTimeout(function () {
		if (--i) {
			try {
				progressControll = checkFramePass(curPage); //return pass ? "Y":"N";  // curPageNum 현재 페이지 값 전달.
			}
			catch (err) {
				chkScript(i);
			}
		}
		else {

		}
	}, 1000)
})(30);


function setBottom() {

	var footerStr = '';
	footerStr += '<div class="footer_inner"> ';
	footerStr += '	<div class="control"> ';

	footerStr += '		<p class="indexbtn" title="목차"  alt="목차" ></p> ';
	footerStr += '		<div class="time"> ';//시간
	footerStr += '			<ul class="cf"> ';
	footerStr += '				<li class="time_cur"> 00:00 </li> ';
	footerStr += '				<li> &nbsp;/ &nbsp; </li>';
	footerStr += '				<li class="time_tol"> 00:00 </li> ';
	footerStr += '			</ul> ';
	footerStr += '		</div> ';

	footerStr += '		<div class="slide"> ';//슬라이드 바
	footerStr += '			<div class="slide_inner"> ';
	footerStr += '				<p class="slide_bg" id="slide_bg"><span class="slide_current"></span></p> ';
	footerStr += '			</div> ';
	footerStr += '		</div> ';

	footerStr += '		<p class="play tab over" title="재생"  alt="재생" tabindex="3" ></p> ';
	footerStr += '		<p class="pause tab over" title="일시정지" alt="일시정지" tabindex="4" ></p> ';
	footerStr += '		<p class="replay tab over" title="다시보기" alt="다시보기" tabindex="5" ></p> ';



	console.log("isMobilePlatform() : " + isMobilePlatform())
	if (!isMobilePlatform()) {
		//footerStr += '		<p class="script tab over" title="자막" alt="자막" tabindex="6"  ></p> ';

		footerStr += '		<p class="sound_btn tab over" title="소리끄기" alt="소리끄기"  tabindex="7" ></p> ';
		footerStr += '		<p class="sound"> ';//사운드 박스 
		footerStr += '			<span class="sound_bar_bg">';
		footerStr += '				<span class="sound_bar" id="sound_bar"> ';
		footerStr += '				</span>';
		footerStr += '					<span class="sound_bar_mask"></span> ';
		footerStr += '			</span>';
		footerStr += '		</p> ';

		footerStr += '<div class="scriptView"><div class="script_close">Close<span> ▼</span></div><div class="script_inner"></div></div> ';
	}
	footerStr += '<p class="fullscreen tab over" title="전체화면" alt="전체화면" tabindex="14"></p>';
	footerStr += '		<div class="speed select" title="배속선택" alt="배속선택"> ';//배속
	footerStr += '			<ul> ';
	footerStr += '				<li class="low  tab over"  title="느리게" alt="느리게"  tabindex="8"></li> ';
	footerStr += '				<li class="curRate">x1.0</li> ';
	footerStr += '				<li class="high  tab over"  title="빠르게" alt="빠르게"  tabindex="9"></li> ';
	footerStr += '			</ul>';
	footerStr += '		</div> ';

	footerStr += '		<div class="paging"> ';
	footerStr += '			<ul> ';
	footerStr += '				<li class="pre tab over"  title="이전페이지" alt="이전페이지"  tabindex="10"></li> ';
	footerStr += '				<li class="page_current">1</li> ';
	footerStr += '				<li class="dash"></li> ';
	footerStr += '				<li class="page_total">1</li> ';
	footerStr += '				<li class="next tab over"  title="다음페이지" alt="다음페이지"  tabindex="11"></li> ';
	footerStr += '			</ul> ';
	footerStr += '		</div> ';
	//footerStr += '		<p class="close_btn tab over" title="닫기" alt="닫기"  tabindex="12" ></p> ';	
	if (!isMobilePlatform()) {
	footerStr += '		<p class="note tab over" title="학습자료 다운로드"  alt="학습자료 다운로드" tabindex="13" ></p> ';
	}else {
	footerStr += '		<p class="noteM tab over" title="학습자료 다운로드"  alt="학습자료 다운로드" tabindex="13" ></p> ';		
	}

	footerStr += '	</div> ';//end control
	footerStr += '	<div class="next_tooltip"></div> ';
	footerStr += '	<div class="end_tooltip"></div> ';
	footerStr += '</div> ';

	$("#fs-footer").append(footerStr);

	setScript();

	/** 메인 비디오 || 오디오 장착**/
	// if(pageArray[curPage][1] == "V3"){		
	// 	writeMedia(".mp3")
	// }else{
	// 	writeMedia(".mp4")
	// }
	if (pageArray[curPage][3] == "slide") {
		writeMedia(".mp3")
		$("#mediaObj").hide()
	} else {
		writeMedia(".mp4")
	}

	bottomEvent();
}


//하단 컨트롤러 이벤트
function bottomEvent() {

	$("#fs-footer .map").on("click", handleMapClick);
	$("#fs-footer .help").on("click", handleGuideClick);
	$("#fs-footer .play").on("click", handlePlayClick);
	$("#fs-footer .pause").on("click", handlePauseClick);
	$("#fs-footer .replay").on("click", handleReplayClick);
	$("#fs-footer .sound_btn").on("click", handleSoundClick);

	$("#fs-footer .script").on("click", handleScriptClick);

	$("#fs-footer .speed .low").on("click", handleSpeedLowClick);
	$("#fs-footer .speed .high").on("click", handleSpeedHighClick);

	$("#fs-footer .picture span").on("click", handlePictureClick);

	$("#fs-footer .control .pre").on("click", handlePrevClick);
	$("#fs-footer .control .next").on("click", handleNextClick);
	$("#fs-footer .close_btn").on("click", handleCloseClick);

	$("#fs-footer .control .preM").on("click", handlePrevClick);
	$("#fs-footer .control .nextM").on("click", handleNextClick);

	$("#fs-footer .note").on("click", handleNoteClick)

	$(".script_close").on("click", function () {
		$(".scriptView").stop().animate({ "top": "50px" }, 600);
		scriptFlag = !scriptFlag;
	});

	$("#fs-footer .page_current").text(itostr(curPage));
	$("#fs-footer .page_total").text(itostr(curTol));
	$("#fs-footer .fullscreen").on("click", toggleFullscreen);

	$('.control .tab').on('keypress', function (e) {
		if (e.which == 13) {
			switch ($(this).attr("tabindex")) {
				case 1: handleMapClick();//로드맵
					break;
				case 2: handleGuideClick();//학습도우미
					break;
				case 3: handlePlayClick();//재생
					break;
				case 4: handlePauseClick();//일시정지
					break;
				case 5: handleReplayClick();//다시 재생
					break;
				case 6: handleScriptClick();//자막
					break;
				case 7: handleSoundClick();//사운드 on/off
					break;
				case 8: handleSpeedLowClick();//배속 느리게
					break;
				case 9: handleSpeedHighClick();//배속 빠르게
					break;
				case 10: handlePrevClick();//이전 페이지 이동
					break;
				case 11: handleNextClick();//다음페이지 이동
					break;
			}
		}
	});

	//목차버튼
	var indexonoff = 0;

	$(".indexbtn").on("click", function () {
		if (indexonoff == 0) {
			handleOpenIndex()
			$(".indexbtn").css({ "background": "url('../common/css/img/footer/index_h.png') 50% 50% no-repeat" });
			indexonoff = 1
		} else if (indexonoff == 1) {
			handleHideIndex()
			$(".indexbtn").css({ "background": "url('../common/css/img/footer/index_o.png') 50% 50% no-repeat" });
			indexonoff = 0;
		}
	});


	$(".over").on("mouseover", { state: "u" }, HandlechangeBg);
	$(".over").on("mouseout", { state: "d" }, HandlechangeBg);

	function HandlechangeBg(e) {
		var state = e.data.state;
		var thisBg = $(this).css("background-image");
		thisBg = thisBg.substr(0, thisBg.length - 8);
		$(this).css("background-image", thisBg + '_' + state + '.png")')
	}
}


//비디오 or 오디오 셋팅
function writeMedia(obj) {
	if (pageArray[curPage][1] == "A") {
		$("#fs-content").append('	<div id="mediaObj" />	');
		$("#mediaObj").append('	<audio id="MPlayer"/> ');
	} else {
		$("#fs-content").append('	<div id="mediaObj" />	');
		$("#mediaObj").append('	<video id="MPlayer" contextmenu="false" playsinline webkitplaysinline poster="../common/css/img/footer/bgNull.png"/> ');
	}

	initLoading();

	pathMp4 = vodPath + itostr(curChasi) + "_" + itostr(curPage) + obj;
	//alert("pathMp4 : "+pathMp4)
	Player = document.getElementById("MPlayer");
	Player.controls = false;
	Player.src = pathMp4;
	Player.volume = volume;

	try {
		Player.play().catch((err) => {
			console.warn("자동 재생 실패, 수동 재생 버튼 노출", err);
			//showPlayButton(); // 수동 버튼 보여주기
		});
	} catch (e) {
		console.error("play 예외 발생", e);
		//showPlayButton();
	}

	if (isMobilePlatform()) {
		//showPlayButton(); // 모바일 환경에서 자동 재생 실패 시 재생 버튼 표시
	}

	soundBarW = $('.sound_bar_bg').width();
	if (document.cookie.indexOf("volume") == -1) {
		console.log("쿠키 없음")
		Player.volume = volume;
		$('.sound_bar').css("width", volume * soundBarW);
	} else {
		Player.volume = getCookie('volume');
		//	console.log("쿠키 있음");
		//	console.log(document.cookie);
		getCookie('volume');
		$('.sound_bar').css("width", getCookie('volume') * soundBarW);
	}

	window.onload = function () {
		hideLoadingScreen();
		commonControl();
	};

	getCookie('volume');
}

function showPlayButton() {
	var playButtonOverlay = document.createElement('div');
	playButtonOverlay.id = "playButtonOverlay";
	playButtonOverlay.style.position = "absolute";
	playButtonOverlay.style.top = "0";
	playButtonOverlay.style.left = "0";
	playButtonOverlay.style.width = "100%";
	playButtonOverlay.style.height = "100%";
	playButtonOverlay.style.background = "rgba(0, 0, 0, 0.5)";
	playButtonOverlay.style.display = "flex";
	playButtonOverlay.style.justifyContent = "center";
	playButtonOverlay.style.alignItems = "center";
	playButtonOverlay.style.zIndex = "1000";

	// 플레이 버튼 이미지 추가
	var playButtonImage = document.createElement('img');
	playButtonImage.src = "../common/css/img/m_ready.png"; // 버튼 이미지 경로
	playButtonImage.style.width = "100%"; // 원하는 크기
	playButtonImage.style.cursor = "pointer";
	playButtonOverlay.appendChild(playButtonImage);
	var container = document.getElementById("fs-container");
	if (container) {
		container.appendChild(playButtonOverlay);
	} else {
		console.error("#fs-container 요소가 없습니다.");
	}

	// 재생 버튼 클릭 시 비디오 재생
	playButtonOverlay.addEventListener("click", function () {
		playButtonOverlay.style.display = "none"; // 오버레이 숨기기
		Player.play(); // 수동 재생 시작
	});
}

// 재생 버튼 숨기기 함수
function hidePlayButton() {
	var playButtonOverlay = document.getElementById("playButtonOverlay");
	if (playButtonOverlay) {
		playButtonOverlay.style.display = "none";
	}
}

//슬라이더 드래그 이벤트 
function sliderEvent() {
	$(".slide_inner").on("mouseup", sliderGo);
	$(".slide_inner").on("mouseleave", sliderGo);

	$(".slide_inner").on("mousedown", function (e) {
		var cX = e.clientX;
		var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
		var slideX = e.clientX + scrollX - _dragX;
		var _dragPerc = slideX / (_rect.width);
		var seekto = Player.duration * _dragPerc;

		// progressControll이 "N"이지만 bookTime 이하로는 이동 허용
		if (progressControll == "N" && seekto > bookTime) {
			alert("학습 완료 후 이동 가능합니다.");
			Player.currentTime = bookTime; // 영상은 멈추지 않고 bookTime 위치로 이동
			return;
		}

		slideDownFlag = true;

		if (cX < _dragX) {
			seekto = 0;
		} else if (cX > _dragWidth) {
			seekto = Player.duration;
		} else {
			slideX = e.clientX + scrollX - _dragX;
			_dragPerc = slideX / (_rect.width);
			seekto = Player.duration * _dragPerc;
		}
		Player.currentTime = seekto;
	});

	$(".slide_inner").on("mousemove", function (e) {
		if (slideDownFlag) {
			var cX = e.clientX;
			var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
			var slideX = cX + scrollX - _dragX;
			var _dragPerc = slideX / (_rect.width);
			var seekto = Player.duration * _dragPerc;

			// bookTime을 초과하는 경우 영상 위치를 bookTime으로 이동하되 재생은 유지
			if (seekto > bookTime) {
				Player.currentTime = bookTime;
				return;
			}

			if (cX < _dragX) {
				seekto = 0;
			} else if (cX > _dragWidth) {
				seekto = Player.duration;
			}
			Player.currentTime = seekto;
		}
	});
}

function sliderGo(e) {
	var cX = e.clientX;
	var slideX = e.clientX - _dragX;
	var _dragPerc = slideX / (_rect.width);
	var seekto = Player.duration * _dragPerc;

	if (slideDownFlag) {
		// progressControll이 "N"일 경우에도 bookTime 이하로는 이동 허용
		if (progressControll == "N" && seekto > bookTime) {
			alert("학습 완료 후 이동 가능합니다.");
			slideDownFlag = false;
			return;
		}

		if (cX < _dragX) {
			seekto = 0;
			Player.currentTime = seekto;
			setPlay();
		} else if (cX > _dragWidth) {
			seekto = Player.duration;
			Player.currentTime = seekto;
			setPause();
		} else {
			slideX = e.clientX - _dragX;
			_dragPerc = slideX / (_rect.width);
			seekto = Player.duration * _dragPerc;
			Player.currentTime = seekto;
			setPlay();
		}
	}
	slideDownFlag = false;
}

if (!isLocal) {
	function waitForFnGetPlaySec(curPage, callback) {
		const interval = setInterval(() => {
			if (typeof getLabsPlaySec === "function") {
				clearInterval(interval);
				bookTime = getLabsPlaySec(); // 전역 변수 bookTime에 값 저장
				callback(bookTime); // 함수가 준비된 후 콜백 호출
			}
			// getLabsPlaySec이 없으면 아무것도 안 함
		}, 100);
	}
}

var bookTime = 0; // 시청 완료된 시간을 저장하는 전역 변수

function commonControl() {
	_slide_bg = document.getElementById("slide_bg");
	if (!isMobilePlatform()) {
		_sound_bar = document.getElementById("sound_bar");
	}


	var _interval = window.setInterval(function () {
		if (Player.readyState > 0) {//비디오 들어왔을때
			if (!isMobilePlatform()) {
				$(".sound_bar_bg").on("mousedown", volSeek);
			}

			updateSliderRect();

			slideDownFlag = false;
			sliderEvent(); // 이 안에서 _dragX, _rect 사용

			Player.addEventListener("timeupdate", function () {
				// 현재 시청 시간이 bookTime보다 크면 bookTime 업데이트
				if (Player.currentTime > bookTime) {
					bookTime = Player.currentTime;
				}
			});

			Player.addEventListener("timeupdate", seekTimeUpdate, false);//비디오 시간체크
			function updateSliderRect() {
				_rect = _slide_bg.getBoundingClientRect();
				_dragX = _rect.left;
				_dragWidth = _rect.left + _rect.width;
			}
			slideDownFlag = false;
			sliderEvent();

			clearInterval(_interval);
			videoChk = true;
			if (!isLocal) { //포팅일때
				$(function () {
					waitForFnGetPlaySec(curPage, () => {
						if (typeof getLabsPlaySec === "function") {
							var bookTime = getLabsPlaySec();

							console.log("call-bookTime : ", bookTime, "noPage : ", curPage);
							console.log("마지막 학습부분 불러오기");

							if (typeof bookTime !== 'undefined' && bookTime !== 0) {
								Player.currentTime = bookTime;
								console.log("불러오기 완료");

								if (isMobilePlatform()) {
									mSetPlaytest();
								} else {
									setTimeout(() => {
										setPlay();
									}, 100);
								}
							} else {
								console.log("불러올 정보 없음");
								if (isMobilePlatform()) {
									mSetPlaytest();
								} else {
									setPlay();
								}
							}
						} else {
							console.log("⚠️ getLabsPlaySec 함수 없음. 영상 처음부터 시작");

							if (isMobilePlatform()) {
								mSetPlaytest();
							} else {
								setPlay();
							}
						}
					});
				});

			} else { //포팅 아닐때
				if (isMobilePlatform()) {
					mSetPlaytest()
				} else {
					//setPause();				
					setPlay();
				}
			}
		} else {
			console.log("loading!!!");
		}
	}, 200);

}

/** 러닝맵 클릭 **/
function handleMapClick(e) {
	//protoAlt();
	//return;
	//msg("러닝맵");
	/*******새창*******/
	window.open("../map.html", "", "width=900, height=506")

	/*******
	레이어팝업
	if(!mapFlag){//false
		//console.log("열릴때 "+mapFlag);
		setPause();	
		$(".chap_"+ currentPath).addClass("active");
		$("#map").fadeIn(800);
		mapFlag = true;
		//console.log("열고 "+mapFlag);
	}
	*******/

}

/** 학습도우미 클릭 **/
function handleGuideClick() {
	//protoAlt();
	//return;
	window.open("../ot/ot.html", "", "width=900, height=506")
}

/** play 클릭 **/
function handlePlayClick(e) {
	setPlay();
}

/** pause 클릭 **/
function handlePauseClick(e) {
	setPause();
}

/** 리플레이 클릭 **/
function handleReplayClick(e) {
	if (progressControll == "N") {
		alert("학습 완료 후 리플레이가 가능합니다.");
	} else {
		Player.currentTime = 0;
		setPlay();
	}
}

/** 스크립트 셋팅 **/
function setScript() {

	if (scriptArr[curPage][1] == "") {
		$(".script").css({ "background": "url(../common/css/img/footer/script_enable_d.png) 50% 50% no-repeat", "cursor": "default" });
		enableScript = false;
	} else {
		for (var i = 1; i < scriptArr[curPage].length; i++) {
			$(".script_inner").append('<span>' + scriptArr[curPage][i] + '</span>');
		}
	}
}

/** 스크립트 클릭 **/
function handleScriptClick(e) {

	if (enableScript) {
		if (!scriptFlag) {
			$(".scriptView").show().stop().animate({ "top": "-100px" }, 600);
			//scriptFlag = true
		} else {
			$(".scriptView").stop().animate({ "top": "20px" }, 600, function () {
				$(this).hide();
			});
			//$(".script_inner span").remove();
		}
		scriptFlag = !scriptFlag;
	}
}
var rate = 1;
var rateArr = [0.8, 1, 1.2, 1.5, 2];
var rateArrText = ["x0.8", "x1.0", "x1.2", "x1.5", "x2.0"];
var rateFlag = false;

/**  배속 왼쪽 버튼 클릭**/
function handleSpeedLowClick() {
	if (rateFlag == false) {
		if (rate > 0) {
			rate--;
		}
		if (rate == 0) {
			rate = 0;
			rateFlag = true;
		}
		$(".curRate").text(rateArrText[rate]);
		fnRate(rate);
	} else {
		if (rate >= 0 || rate <= 4) {
			rateFlag = false;
		}
	}
}
/**  배속 오른쪽 버튼 클릭**/
function handleSpeedHighClick() {

	if (rateFlag == false) {
		if (rate < 4) {
			rate++;
		} else {
			rate = 4;
			rateFlag = true;
		}
		$(".curRate").text(rateArrText[rate]);
		fnRate(rate);
	} else {
		if (rate >= 0 || rate <= 4) {
			rateFlag = false;
		}
	}
}
// 배속 변경 
function fnRate(num) {
	try {
		Player.playbackRate = rateArr[num];
		rateNum = rateArr[num];
	} catch (e) {
		//console.log(e);
	}
}

/** 화질 선택 버튼 클릭  **/
function handlePictureClick() {
	if (!pictFlag) {
		$("#fs-footer .footer_inner .picture ul").append('<li>800k</li>');
		$("#fs-footer .footer_inner .picture ul").append('<li>1000k</li>');
		$("#fs-footer .footer_inner .picture ul").show();
		$("#fs-footer .footer_inner .picture span").css("color", "#D29364");
		pictFlag = true;
		$("#fs-footer .footer_inner .picture ul li").on("click", function () {
			fnReMov($(this).index());
			pictureNum = $(this).text();
			$("#fs-footer .footer_inner .picture ul").show();
			$("#fs-footer .footer_inner .picture ul").empty();
			$("#fs-footer .footer_inner .picture span").text(pictureNum);
			$("#fs-footer .footer_inner .picture span").css("color", "#999");
			$("#fs-footer .footer_inner .picture span").hover(function () {
				if (!PC_MODE) {
					$(this).css("color", "#D29364");
				}
			}, function () {
				$(this).css("color", "#999");
			});
			pictFlag = false;
		});
	} else if (pictFlag) {
		pictFlag = false;
		$("#fs-footer .footer_inner .picture ul").empty();
		$("#fs-footer .footer_inner .picture span").hover(function () {
			$(this).css("color", "#D29364");
		}, function () {
			$(this).css("color", "#999");
		});
		pictFlag = false;
	}
}
// 화질 변경
function fnReMov(num) {
	var removArr = ["800k", "1000k"];
	try {
		changeVod(removArr[num], Player.currentTime);
		rateNum = rateArr[num];
	} catch (e) {
		//console.log(e);
	}
}

function changeVod(_fileName, _time) {
	pathMp4 = vodPath + itostr(curChasi) + "_" + itostr(curPage) + "_" + _fileName + ".mp4";
	Player.src = pathMp4;
	//console.log("Player.src : "+Player.src);

	var _interval = window.setInterval(function () {
		if (Player.readyState >= 4) {
			Player.play();
			Player.currentTime = _time
			Player.playbackRate = rateNum;
			clearInterval(_interval);
		} else {
			//console.log("loading!!!");
		}
	}, 200);
}


/** 이전버튼 클릭 **/
function handlePrevClick() {
	if (curPage === 1) {
		if (curChasi === 1) {
			alert("처음 페이지입니다.");
			return;
		} else {
			// 차시가 1이 아니라면 이전 차시로 이동
			if (isLocal) {
				alert("이전 차시로 이동합니다."); // 필요 시 삭제
			} else {
				window.parent.postMessage({ func: 'prevIndex', message: {} }, "*");
			}
			return;
		}
	}

	curPage--;
	var _targetUrl = itostr(curChasi) + '_' + itostr(curPage) + '.html';

	if (isLocal) {
		location.href = _targetUrl;
	} else {
		window.parent.postMessage({ func: 'prev', url: _targetUrl }, "*");
	}
}

/** 다음버튼 클릭 포팅 수정 **/
//function handleNextClick() {
//	var _targetUrl;
//	if (curPage != curTol) {
//		// progressControll이 "N"이고 curChasi가 3이며 curPage가 13일 때 #name이 비어있으면 알림 표시 후 이동 중단
//		if (progressControll == "N" && curChasi == 3 && curPage == 13) {
//			const nameInput = document.querySelector("#name"); // 사용자 이름 입력 필드
//
//			if (!nameInput.value.trim()) { // 이름이 입력되지 않은 경우
//				alert("성명을 입력해 주세요.");
//				return;
//			}
//		}
//
//		if (progressControll == "N") {
//			alert("학습 완료 후 이동 가능합니다.");
//			return;
//		} else {
//			curPage++;
//			_targetUrl = itostr(curChasi) + '_' + itostr(curPage) + '.html';
//			window.parent.postMessage({ 'func': 'next', 'message': {} }, "*");
//		}
//	} else {
//		if (curChasi == 3 && curPage == 14) {
//			alert("마지막 페이지입니다.");
//		} else if (curChasi < 4) {
//			var targetChap = Number(curChasi) + 1;
//			_targetUrl = itostr(targetChap) + '_' + itostr(1) + '.html';
//			window.parent.postMessage({ 'func': 'nextIndex', 'message': {} }, "*");
//		}
//	}
//}

function handleNextClick() {
	var _targetUrl;

	if (curPage != curTol) {
		if (progressControll == "N") {
			alert("학습 완료 후 이동 가능합니다.");
			return;
		}

		curPage++;
		_targetUrl = itostr(curChasi) + '_' + itostr(curPage) + '.html';

		if (isLocal) {
			location.href = _targetUrl;
		} else {
			window.parent.postMessage({ 'func': 'next', 'url': _targetUrl }, "*");
		}
	} else {
		if (curChasi == 1) {
			if (isLocal) {
				alert("마지막 페이지입니다.");
			} else {
				window.parent.postMessage({ 'func': 'nextIndex', 'message': {} }, "*");
			}
		} else {
			alert("마지막 차시입니다.");
		}
	}
}



//재생 일시정지 동시에 
function playPause() {
	if (Player.paused) {
		setPlay();
	} else {
		setPause();
	}
}

function setPause() {
	Player.pause();
}

function setPlay() {
	Player.play();
}

function replayBtn() {
	Player.currentTime = 0;
	Player.play();
}
var soundW;
/** 볼륨조절 **/
function volSeek(e) {
	const _dragX = $(".sound_bar_bg").offset().left; // 여기 수정됨!
	const clickX = e.clientX;
	let xx = clickX - _dragX;

	soundBarW = $('.sound_bar_bg').width();
	soundW = $("#sound_bar").width();

	if (xx < 3) {
		xx = 0;
		Player.muted = true;
		$(".sound_btn").css("background-image", "url(../common/css/img/footer/footer_sound_off_d.png)");
		$(this).attr("alt", "소리켜기").attr("title", "소리켜기");
		SoundFlag = true;
	} else if (xx > soundBarW) {
		xx = soundBarW;
		Player.muted = false;
	} else {
		Player.muted = false;
	}

	volume = xx / soundBarW;
	Player.volume = volume;
	document.cookie = "volume=" + volume;

	$(".sound_bar").css("width", xx);
	$(".sound_btn").css("background-image", "url(../common/css/img/footer/footer_sound_on_d.png)");
	$(this).attr("alt", "소리끄기").attr("title", "소리끄기");
}

// 쿠키 가져오기
function getCookie(cName) {
	cName = cName + '=';
	var cookieData = document.cookie;
	var start = cookieData.indexOf(cName);
	var cValue = '';
	if (start != -1) {
		start += cName.length;
		var end = cookieData.indexOf(';', start);
		if (end == -1) end = cookieData.length;
		cValue = cookieData.substring(start, end);
	}
	return unescape(cValue);
}
var SoundFlag = false;
/** 사운드 on,off **/
function handleSoundClick(e) {

	soundBarW = $('.sound_bar_bg').width();
	$(this).removeClass("over");
	if (!SoundFlag) {
		soundW = $("#sound_bar").width();
		$('.sound_bar').css("width", 0);
		Player.muted = true;
		if (pageArray[curPage][1] == "V3") {
			audioArray.forEach(function (audio) {
				audio.muted = true;
			});
		}
		$(".sound_btn").css("background-image", "url(../common/css/img/footer/footer_sound_off_d.png)");
		$(this).attr("alt", "소리켜기");
		$(this).attr("title", "소리켜기");

	} else {
		Player.muted = false;
		if (pageArray[curPage][1] == "V3") {
			audioArray.forEach(function (audio) {
				audio.muted = false;
			});
		}
		$(".sound_bar").width(soundW)
		$(".sound_btn").css("background-image", "url(../common/css/img/footer/footer_sound_on_d.png)");
		$(this).attr("alt", "소리끄기");
		$(this).attr("title", "소리끄기");

	}
	SoundFlag = !SoundFlag;
}

function handleCloseClick(e) {
	setPause();
	if (isMobilePlatform()) {
		window.location = "close://";
	} else {
		top.close();
	}
}

function handleNoteClick(e){
	var fileName;
	if(curChasi == 1){
		if(!isLocal){
			fileName = "https://hunetdown.cdn.hunet.co.kr/eLearning/Hunet/Document/HLAC12148/[학습자료]_01차시.zip";
		}else{
			fileName = "../common/down/01.zip";
		}
	}
	else if(curChasi == 2){
		if(!isLocal){
			fileName = "https://hunetdown.cdn.hunet.co.kr/eLearning/Hunet/Document/HLAC12148/[학습자료]_02차시.zip";
		}else{
			fileName = "../common/down/02.zip";
		}
	}
	const a = document.createElement("a");
    a.href = fileName;
    a.download = ""; // or extract filename from fileName if needed
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function HandlechangeBg(e) {
	var state = e.data.state;
	var thisBg = $(this).css("background-image");
	thisBg = thisBg.substr(0, thisBg.length - 8);
	$(this).css("background-image", thisBg + '_' + state + '.png")')
}
var endFlag = false;
var toolTipFlag = false;
var eventFlag = false;

function handleIntervalAction() {
	if (typeof saveLabsPlaySec === "function") {
		saveLabsPlaySec(parseInt(Player.currentTime));
		console.log("영상시간 저장 완료");
	} else {
		console.log("⚠️ saveLabsPlaySec 함수 없음 - 저장 생략");
	}
}


/** 시간 표시 **/
function seekTimeUpdate() {
	//var mov_curTime = document.getElementsByClassName("mov_curTime");
	//var mov_tolTime = document.getElementsByClassName("mov_tolTime");
	if (Player.duration) {
		var nt = Player.currentTime * (100 / Player.duration);
		var curmins = Math.floor(Player.currentTime / 60);
		var cursecs = Math.floor(Player.currentTime - curmins * 60);
		var durmins = Math.floor(Player.duration / 60);
		var dursecs = Math.floor(Player.duration - durmins * 60);
		if (cursecs < 10) { cursecs = "0" + cursecs; }
		if (dursecs < 10) { dursecs = "0" + dursecs; }
		if (curmins < 10) { curmins = "0" + curmins; }
		if (durmins < 10) { durmins = "0" + durmins; }

		$(".time .time_cur").text(curmins + ":" + cursecs);
		$(".time .time_tol").text(durmins + ":" + dursecs);

		if (videoChk) {

			if (!isLocal) {
				const interval = 30; // 30초 간격
				const threshold = 0.3; // 오차 허용 범위 (±0.5초)
				const targetTime = Math.floor(Player.currentTime / interval) * interval;
				if (Math.abs(Player.currentTime - targetTime) < threshold && Player.currentTime !== lastHandledTime && targetTime !== 0) {
					handleIntervalAction();
					lastHandledTime = targetTime; // 마지막 실행 시간을 기록
				}
			}

			/** 슬라이드바 제어 **/
			var percent = (Player.currentTime / Player.duration) * 100;
			$(".slide_current").css("width", percent + "%");

			//일단 영상 끝났는지 체크
			if (Player.currentTime >= Player.duration) {
				if (pageArray[curPage][3] == 'attack' && pageArray[curPage][4] != 'oath') {
					endFlag = true;
					toolTipFlag = true;
					if (!isLocal) {
						checkFramePass[curPage] = "Y"
					}
				} else {
					endFlag = true;
					if (!isLocal) {
						checkFramePass[curPage] = "Y"
					}
					if (pageArray[curPage][1] == "V3") {
						audioArray.forEach(function (audio) {
							audio.volume = Player.volume;
						});
					}

				}

				if (curChasi == 1) {
					if (curPage == 1 || curPage == 3 || curPage == 5 || curPage == 6 || curPage == 7 || curPage == 9) {
						setBalloon();
					}
				} else if (curChasi == 2) {
					if (curPage == 1 || curPage == 3 || curPage == 4 || curPage == 5 || curPage == 7 || curPage == 12 || curPage == 14) {
						setBalloon();
					}
				}
			}

			function normalquiz() {
				if (pageArray[curPage][1] == "V3") {
					$("#htmlShow").fadeIn(100);
					// 단순 클릭 전용
					if (quiztype[quizNumber - 1] == 9 && curPage == 4 && curChasi == 3) {
						setTimeout(() => {
							page3_event.volume = volume
							page3_event.play()
						}, 300);
					} else {
						page3_event.pause()
					}
					quizConversion()
				}
			}
			//html show 


		}//end if(videoChk){
	}//end if(Player.duration){
}

function mSetPlaytest() {
	try {
		setPlay(); // 자동 재생 시도
		// play()가 성공적으로 실행되는지 확인하기 위해 eventListener로 확인
		Player.addEventListener('playing', function onPlay() {
			hidePlayButton();
			Player.removeEventListener('playing', onPlay); // 이벤트 리스너 제거
		});
	} catch (error) {
		movileAlertView();
		//M_chage();
		console.error("자동 재생에 실패했습니다:", error);
		setPause(); // play()에 문제가 발생할 경우 pause로 전환
	}
}

function portingtest() {
	Player.currentTime = Player.duration //영상 강제 종료
	endFlag = true;
	toolTipFlag = true;
	progressControll = "Y";
	toolTipFlag = true;
	setTimeout(() => {
		handleNextClick() //퀴즈 종료하고 다음페이지로
	}, 500);
}

/** 다음페이지 이동 툴팁 **/
function setBalloon() {
	if (curPage == curTol) {
		$('.next_tooltip').css({ "width": "141px" });
		$('.next_tooltip').css({ "height": "44px" });
		$('.next_tooltip').css({ "background": "url('../common/css/img/footer/footer_last_tooltip.png') no-repeat" });
	} else {
		$('.next_tooltip').css({ "background": "url('../common/css/img/footer/footer_next_tooltip.png') no-repeat" });
	}
	if (isMobilePlatform()) {
		// $(".next_tooltip").css("right", "125px");
	}
	if (pageArray[curPage][1] == "V1") {
		if (endFlag) {
			progressControll = "Y";
			$(".next_tooltip").fadeIn(1000, function () {
				playSound("chimes");
			});


		} else {
			$(".next_tooltip").hide();
		}
	} else if (pageArray[curPage][1] == "V3" || pageArray[curPage][1] == "A") {
		if (endFlag && toolTipFlag) {
			progressControll = "Y";
			$(".next_tooltip").fadeIn(1000, function () {
				playSound("chimes");
			});
		}
		if (pageArray[curPage][3] == "Practice") {
			if (endFlag) {
				progressControll = "Y";
				$(".next_tooltip").fadeIn(1000, function () {
					playSound("chimes");
				});

			} else {
				$(".next_tooltip").hide();
			}
		}
	}
}

function hideLoadingScreen() {
	document.getElementById('loadingUI').style.display = 'none';
}
