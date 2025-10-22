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

pageArray[1] = ["01_01.html", "V1", 1, "Intro"];
pageArray[2] = ["01_02.html", "V1", 1, "스팟1. 개인정보 자가진단!"];
pageArray[3] = ["01_03.html", "V1", 1, "스팟2. 개인정보 기본 개념 및 중요성 (개인정보의 최근 위협과 개인정보보호의 중요성)"];
pageArray[4] = ["01_04.html", "V1", 1, "개인정보의 정의와 사례"];
pageArray[5] = ["01_05.html", "V1", 1, "개인정보 안전성 확보조치의 중요성"];
pageArray[6] = ["01_06.html", "V1", 1, "스팟3. 개인정보 유출 사고 예방법 및 대응절차 (개인정보 유출 사고 사례)"];
pageArray[7] = ["01_07.html", "V1", 1, "개인정보 유출 사고 원인과 대응조치 방안"];
pageArray[8] = ["01_08.html", "V1", 1, "개인정보 유출 예방과 유출 사고 시 기본절차"];
pageArray[9] = ["01_09.html", "V1", 1, "Outro"];


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