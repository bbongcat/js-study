
/*
콘솔실행 테스트
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 각각 구현하세요.
힌트) 먼저 2단을 구현해 본 뒤, 성공하면 랜덤 구구단으로 바꿔 보기
*/


//단수를 저장할 변수 : 2 ~ 9
var table = Math.floor(Math.random() * 8) + 2;

console.log(`=======================`);
console.log(`랜덤 구구단 ${table}단`);
console.log(`=======================`);


for (var line = 1; line < 10; line++) {
    console.log(`${table} x ${line} = ${table * line}`);
}



/* 내가 한 것
var rn = Math.floor(Math.random() * 8) + 2;


for (var n = 1; n <= 9; n++) {
    console.log(
        `=================
        랜덤 구구단 ${rn}단
        rn x 
        `);
}

for (var m = 1; m <= 9; m++) {
    console.log(
        `==================
        랜덤 구구단 2단
        ==================
        2 x ${m} = ${2*m}
        2 x ${m} = ${2*m}`
    );
}
*/
