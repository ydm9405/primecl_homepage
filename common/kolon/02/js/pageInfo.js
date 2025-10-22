/**
	2017. 03. 10
	stroy21
	FunnsySky 
	funnysky@story21.co.kr
**/


var pageArray = new Array();
/**

	파일명, 타입(V1:동영상만 , V2:html 화면 이벤트 X, V3:html 화면 이벤트 X), html 나오는 시간, A mp3 페이지 

**/
// 퀴즈종류

// 'linearQuiz': 1,   // 일방 퀴즈 (기회 무한)
// 'quiz': 2,         // 일반 퀴즈 (기회 1번)
// 'quizMulti': 3,    // 답이 여러개인 퀴즈 (기회 1번)
// 'run': 4, 					// 드래곤잡기 이전 장애물 피하기
// 'clickAndLine': 5, // 클릭형 선긋기
// 'flip': 6,         // 카드 띄우기
// 'slide': 7,        // 슬라이드 넘기기
// 'receive': 8,      // 상자에 받기
// 'simpleclick': 9,  // 단순 클릭
// 'attack': 10,      // 드래곤 공격
// 'oath': 11         // 서약서 오픈

// 퀴즈종류

pageArray[1] = ["02_01.html", "V1", 1, "Intro"];
pageArray[2] = ["02_02.html", "V1", 1, "스팟1. 개인정보 키워드 Check!"];
pageArray[3] = ["02_03.html", "V1", 1, "스팟2. 주요 법적 의무사항 (주기적 또는 특정 상황에 정보주체에게 알려야 할 주요 법적 의무사항)"];
pageArray[4] = ["02_04.html", "V1", 1, "개인정보 수집 출처 등 통지 의무"];
pageArray[5] = ["02_05.html", "V1", 1, "개인정보 이용·제공 내역 통지"];
pageArray[6] = ["02_06.html", "V1", 1, "광고성 정보 전송 수신동의 여부 확인 안내"];
pageArray[7] = ["02_07.html", "V1", 1, "이동형 영상정보처리기기 촬영사실 표시"];
pageArray[8] = ["02_08.html", "V1", 1, "스팟3. 최종 미션! 당신의 선택은? (개인정보 수집 출처 등 통지 의무)"];
pageArray[9] = ["02_09.html", "V1", 1, "개인정보 이용·제공 내역 통지 의무"];
pageArray[10] = ["02_10.html", "V1", 1, "광고성 정보 전송 수신동의 여부 확인 안내"];
pageArray[11] = ["02_11.html", "V1", 1, "이동형 영상정보처리기기 촬영사실 표시 및 고지"];
pageArray[12] = ["02_12.html", "V1", 1, "에필로그"];
pageArray[13] = ["02_13.html", "V1", 1, "보안서약서"];
pageArray[14] = ["02_14.html", "V1", 1, "Outro"];


var _cw = 1280;
var _ch = 720;

var cssPath = "../common/css/img/";
var imgType = ".png";

var thisurl=location.href;
var fileurl = thisurl.lastIndexOf("/");
var fileName = thisurl.substring(fileurl+1);
var curChasi = parseInt(fileName.substr(0,2), 10);
var curPage = parseInt(fileName.substr(3,2), 10);
var curTol = pageArray.length-1;
var balloonFlag = true;

// 과정명
var topTitle = "2025 코오롱 개인정보취급자 온라인교육"; //브라우저 타이틀
var leftChapterTitle = "2025 코오롱 개인정보취급자 온라인교육";//왼쪽 챕터명
var rightChasiTitle = "";//오른쪽 차시명
var summaryPrintPage = 3//정리하기 인쇄 페이지 수
document.title = topTitle;

///////////////////////////////////////////////////////////////////////////////////////////////////
//msg("차시 : " + curChasi + " 페이지 : " + curPage + " 총 페이지 : " + curTol);
///////////////////////////////////////////////////////////////////////////////////////////////////


document.write('<script language="javascript" src="../common/js/common.js"></script>');


function itostr(inum) {
	return inum<10 ? "0"+inum : inum;
}

function msg(str){
	console.log(str);
}

function protoAlt(){
	alert("프로토에서는 지원하지 않습니다.");
}

function handleOver(){//오버시 이미지 o
	//playSound("over");
	var imgAttr = $(this).children().attr("src");
	imgAttr = imgAttr.substr(0,imgAttr.length-5);
	$(this).children().attr("src",imgAttr+"o.png");
	$(this).children().css("cursor","pointer");
}
function handleOut(){//아웃시 이미지 b
	var imgAttr = $(this).children().attr("src");
	imgAttr = imgAttr.substr(0,imgAttr.length-5);
	$(this).children().attr("src",imgAttr+"b.png");
}

function handleDown(){//크클릭 이미지 u
	var imgAttr = $(this).children().attr("src");
	imgAttr = imgAttr.substr(0,imgAttr.length-5);
	$(this).children().attr("src",imgAttr+"u.png");
}
function handleUp(){//크클릭 후 기본 b
	playSound("click");
	var imgAttr = $(this).children().attr("src");
	imgAttr = imgAttr.substr(0,imgAttr.length-5);
	$(this).children().attr("src",imgAttr+"b.png");
	
}