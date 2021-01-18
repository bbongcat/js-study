
// 1~10까지의 누적 총합

var total = 0; //누적 총합을 저장해 둘 변수

var n = 1; //1~10까지의 숫자를 지속적으로 변경하면서 담아둘 변수

while (n <= 10) {
    total += n; //0 + 1 = 1
    n+=2; //2씩 더하기
}

console.log(`1-10까지의 총합: ${total}`);


// 7~100 사이의 7의 배수를 모두 출력하기

var num = 7;

while(num <= 100) {
    console.log(num);
    num += 7;
}
console.log(`while 종료 후 num: ${num}`);

console.log('=========================');



// 1~10 사이의 13의 배수 모두 출력하기

num = 1;
while (num <= 100) {
    if (num % 13 === 0) {
    console.log(num);
    }
    num++;
}

console.log('=========================');


// 1~100 사이의 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력하기

num = 1;
while (num <= 100) {
    if (num % 6 === 0 && num % 12 !== 0) {
        console.log(num);
    }
    num++;
}

console.log('=========================');

// 1~4000 사이의 정수 중 9의 배수의 개수를 출력하기

num = 1;
var count = 0;

while (num <= 4000) {
    if (num % 9 === 0) {
        count++;
    }
    num++;
}
console.log(`범위 내의 9의 배수의 개수: ${count}개`);
