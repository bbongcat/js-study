

/*
        # scores라는 이름을 가진 배열 변수가 있습니다.
        여기에는 학생들의 수학 점수가 8개 저장됩니다.
        점수는 임의로 설정하세요

        - 요구사항 :
        1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
        콘솔에 출력하세요.
        2. 학생들의 점수가 추가되어도 코드를 건드리지 않아도
        자동으로 총점, 평균이 갱신되어야 합니다.

*/

// 내가 한 것
// var scores = [80, 33, 94, 89, 5, 39, 58, 70];
// console.log(`{scores.length}`);

// var total = 0;

// for (var i = 0; i < scores.length; i++); {
//     total += scores[i];
// }


var scores = [80, 33, 94, 89, 5, 39, 58, 70, 100];

// 총점 저장 변수
var total = 0;

for (var i = 0; i < scores.length; i++) {
    total += scores[i];   
}

// 평균 저장 변수
var avg = total / scores.length;
// 평균을 소숫점 두자리까지만 표시하기
var prettierAvg = Math.floor(avg *100) / 100;
console.log(`학생들 수학 총점: ${total}점, 평균: ${prettierAvg}점`);