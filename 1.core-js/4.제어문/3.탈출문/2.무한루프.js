

/*
while (true) {

    var rn = Math.floor(Math.random() * 6);
    console.log(`랜덤 값: ${rn}`);

    if (rn === 3) {
        console.log(`반복문 종료!`);
        break;
    }
}
*/

// 브라우저에서 번호를 계속 입력하고 '그만'을 입력할 경우 입력한 수의 총합을 알려주는 코드.
// + -> 문자를 숫자로 변경

var total = 0;

while (true) {
    var number = prompt(`숫자를 입력하세요.`);      //그만은 숫자가 아니기 때문에 prompt 앞에 +를 뗌
    if (number === '그만') {
        break;
    }
    total += +number;       //위에서 그만이라는 글자가 안들어왔을 경우 여기서 + 붙임
}

alert(`입력한 숫자의 총합: ${total}`);