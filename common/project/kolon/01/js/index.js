/** 탑메뉴 배열 **/
var menuTopArr = new Array(100);

var indexIsPlay = false;

/** 서브메뉴 배열 **/
var subArry = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100);

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
	indexStr += '			<li class="sub02"><img src="../common/img/indexUI/dot_spot1.png"; style="margin: -8px 8px 0px -11px";><span>스팟1. 개인정보 자가진단!</span></li> ';
	indexStr += '			<li class="sub03"><img src="../common/img/indexUI/dot_spot2.png"; style="margin: -8px 8px 0px -11px";><span>스팟2. 개인정보 기본 개념 및 중요성</span></li> ';
	indexStr += '			<li class="sub03 basic"><span>· 개인정보의 최근 위협과 개인정보보호의 중요성</span></li> ';
	indexStr += '			<li class="sub04 basic"><span>· 개인정보의 정의와 사례</span></li> ';
	indexStr += '			<li class="sub05 basic"><span>· 개인정보 안전성 확보조치의 중요성</span></li> ';
	indexStr += '			<li class="sub06"><img src="../common/img/indexUI/dot_spot3.png"; style="margin: -8px 8px 0px -11px";><span>스팟3. 개인정보 유출 사고 예방법 및 대응절차</span></li> ';
	indexStr += '			<li class="sub06 basic"><span>· 개인정보 유출 사고 사례</span></li> ';
	indexStr += '			<li class="sub07 basic"><span>· 개인정보 유출 사고 원인과 대응조치 방안</span></li> ';
	indexStr += '			<li class="sub08 basic"><span>· 개인정보 유출 예방과 유출 사고 시 기본절차</span></li> ';
	indexStr += '			<li class="sub09"><img src="../common/img/indexUI/dot_default_main.png"; style="padding: 2px 16px 0px 0px";><span>Outro</span></li> ';
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
	window.parent.postMessage({ 'func': 'jump', 'message': { frameOrderNo: Number(subIdx) } }, "*");

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