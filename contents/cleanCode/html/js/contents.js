// 차시명 배열
let chapterNames = [
    "클린 코드의 의의와 중요성",
    "클린 코드 기본(작명, 함수, 코드 레이아웃)",
    "클린 코드 문서화(주석, 문서화, 커밋 메시지 작성법)",
    "클린 코드와 리팩토링, 단위 테스트의 관계중",
    "클린 코드에서 자주 언급되는 중요 원칙",
    "파이썬 표준인 PEP-8 친숙해지기",
    "파이썬 코드 악취 해소하기",
    "파이썬 린트와 포매터 활용하기",
    "파이썬 타입 힌트 활용법",
    "파이썬스럽게 프로그래밍하기",
];

function setContents() {
    console.log("setContents 호출");

    let contentHTML = `
        <div id="content">
            <div id="pageContents">
                <table>
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>차시명</th>
                            <th>재생</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    // 반복문을 사용하여 차시별 생성
    for (let i = 1; i <= 10; i++) {
        // i가 10보다 작을 때는 앞에 "0"을 추가
        let paddedIndex = String(i).padStart(2, '0');
        let chapterName = chapterNames[i - 1]; // 배열에서 차시명 가져오기

        contentHTML += `
            <tr>
                <td>${paddedIndex}</td>
                <td>${chapterName}</td>
                <td><a href="#" onclick="openWindow('../player/${paddedIndex}/${paddedIndex}_01.html')"><img class="play_btn" src="../../../img/play.png" width="36"></a></td>
            </tr>
        `;
    }

    contentHTML += `
                    </tbody>
                </table>
            </div>
        </div>
    `;

    $("#fs-content").append(contentHTML);
}

function openWindow(url) {
    window.open(url, '_blank', 'width=1280,height=720');
}