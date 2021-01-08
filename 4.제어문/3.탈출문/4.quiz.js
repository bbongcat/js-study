
/*
아래 요구사항에 맞는 코드를 작성하고
브라우저에서 실행하여 테스트하세요.

-요구사항
1. 프로그램 실행 시 0~100 사이의 무작위 두 수의 합을
물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 "정답입니다"를
틀린 답을 입력할 시 "오답입니다"를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고
누적된 정답 횟수와 오답 횟수를 출력하세요. 
*/


var rnX = Math.floor(Math.random() * 101);
var rnY = Math.floor(Math.random() * 101);

var answer;
var collect = 0;
var wrong = 0;


while (true) {
    var answer = +prompt(`${rnX}+${rnY} = ??`);
    if (answer === `${rnX}+${rnY}`) {
        alert(`정답입니다`);
        collect++;
    } else {
        alert(`오답입니다`);
        wrong++;
    }
    if (number === 0) {
        alert(`누적 정답 수: ${collect}, 누적 오답 수: ${wrong}`);
        break;
    }
    total += +number;
}