/** 탑메뉴 배열 **/
var menuTopArr = new Array(100);

var indexIsPlay = false;

/** 서브메뉴 배열 **/
var subArry = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 100);

var subIdx;

/** 메뉴 세팅 **/
function setIndex() {
	/**	index 전체 box 	**/
	var indexStr = '';

	indexStr += '<div class="index_inner"> ';

	indexStr += ' </div> ';

	indexStr += ' <div class="index_1"> ';
	indexStr += '		<ul> ';
	indexStr += '			<li class="sub01"><img src="../common/img/indexUI/dot_default_main.png"; style="padding: 2px 16px 0px 0px";><span>Intro</span></li> ';
	indexStr += '			<li class="sub02"><img src="../common/img/indexUI/dot_spot1.png"; style="margin: -8px 8px 0px -11px";><span>스팟1. 개인정보 키워드 Check!</span></li> ';
	indexStr += '			<li class="sub03"><img src="../common/img/indexUI/dot_spot2.png"; style="margin: -8px 8px 0px -11px";><span>스팟2. 주요 법적 의무사항</span></li> ';
	indexStr += '			<li class="sub03 basic"><span>· 주기적 또는 특정 상황에 정보주체에게 알려야 할 주요 법적 의무사항</span></li> ';
	indexStr += '			<li class="sub04 basic"><span>· 개인정보 수집 출처 등 통지 의무</span></li> ';
	indexStr += '			<li class="sub05 basic"><span>· 개인정보 이용·제공 내역 통지</span></li> ';
	indexStr += '			<li class="sub06 basic"><span>· 광고성 정보 전송 수신동의 여부 확인 안내</span></li> ';
	indexStr += '			<li class="sub07 basic"><span>· 이동형 영상정보처리기기 촬영사실 표시</span></li> ';
	indexStr += '			<li class="sub08"><img src="../common/img/indexUI/dot_spot3.png"; style="margin: -8px 8px 0px -11px";><span>스팟3. 최종 미션! 당신의 선택은?</span></li> ';
	indexStr += '			<li class="sub08 basic"><span>· 개인정보 수집 출처 등 통지 의무</span></li> ';
	indexStr += '			<li class="sub09 basic"><span>· 개인정보 이용·제공 내역 통지 의무</span></li> ';
	indexStr += '			<li class="sub10 basic"><span>· 광고성 정보 전송 수신동의 여부 확인 안내</span></li> ';
	indexStr += '			<li class="sub11 basic"><span>· 이동형 영상정보처리기기 촬영사실 표시 및 고지</span></li> ';
	indexStr += '			<li class="sub12 basic"><span>· 에필로그</span></li> ';
	indexStr += '			<li class="sub13"><img src="../common/img/indexUI/dot_default_main.png"; style="padding: 2px 16px 0px 0px";><span>보안서약서</span></li> ';
	indexStr += '			<li class="sub14"><img src="../common/img/indexUI/dot_default_main.png"; style="padding: 2px 16px 0px 0px";><span>Outro</span></li> ';
	indexStr += '		</ul> ';
	indexStr += ' </div> ';

	indexStr += '</div> ';



	$("#fs-index").append(indexStr)

	// $("#fs-index").mouseover(function(){
	// 	$(this).css("opacity", "1");
	// })
	// $("#fs-index").mouseout(function(){
	// 	$(this).css("opacity", "0");
	// })
	setMenuPage();
}

/** 메뉴 세팅(활성화) **/
function setMenuPage() {

	var page = curPage;
	subIdx = curPage;
	//서브메뉴
	for (var i = 0; i < pageArray.length; i++) {

		$(".sub" + itostr(i)).css({ "color": "#666", "cursor": "pointer" });
		$(".sub" + itostr(i)).on("mouseover", handleSubMenuOver);
		$(".sub" + itostr(i)).on("mouseout", handleSubMenuOut);
		$(".sub" + itostr(i)).on("click", handleSubMenuClick);
	}

	$(".sub" + itostr(subIdx)).css({ "color": "#000", "cursor": "default" });
	$(".sub" + itostr(subIdx)).off("mouseover");
	$(".sub" + itostr(subIdx)).off("mouseout");
	$(".sub" + itostr(subIdx)).off("click");

	if (progressControll == "Y") {
		$("#indexbtn").css("display", "block");
	}
}
//서브 메뉴 오버
function handleSubMenuOver() {
	$(this).css({ "color": "#000" });
}
//서브 메뉴 아웃
function handleSubMenuOut() {
	$(this).css({ "color": "#666" });
}
//서브 메뉴 클릭
function handleSubMenuClick() {
	var classList = $(this).attr("class").split(" "); // 공백 기준 분리
	var subClass = classList.find(c => c.startsWith("sub")); // "sub03" 찾기
	var subIdx = Number(subClass.replace("sub", "")); // 숫자만 추출

	console.log("subIdx:", subIdx);
	if (curChasi == "2" && curPage == "13") {
		if (progressControll == "N") {
			alert("학습 완료 후 이동 가능합니다.");
			return;
		}else {
			window.parent.postMessage({ 'func': 'jump', 'message': { frameOrderNo: Number(subIdx) } }, "*");
		}
	}else {
		window.parent.postMessage({ 'func': 'jump', 'message': { frameOrderNo: Number(subIdx) } }, "*");
	}


}
/** 메뉴 오버 **/
function handleMenuOver(evt) {
	//msg("over : " + evt.data.goPage);
	$(this).css({ "color": "#000" });

}

/** 메뉴 아웃 **/
function handleMenuOut(evt) {
	$(this).css({ "color": "#666" });
}

/** 메뉴 클릭 **/
function handleMenuClick(evt) {
	_targetUrl = itostr(curChasi) + '_' + itostr(evt.data.goPage) + '.html';
	//	location= _targetUrl;
	NextMove(_targetUrl)
}

/**	index 버튼 열려라 클릭	**/
function handleOpenIndex() {
	$("#fs-index").stop().animate({ "left": 0 });


}

/**	index 버튼 닫아라 클릭	**/
function handleHideIndex() {
	$("#fs-index").stop().animate({ "left": "-400px" });
}