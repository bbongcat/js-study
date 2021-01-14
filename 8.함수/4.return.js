
function add(n1, n2) {
    return n1 + n2;
}

function addFor3(n1, n2, n3) {
    return add(n1, n2) + n3;
}

var result = add(10, 20);
console.log(result);
console.log(add(30,50));

var x = add(add(add(5,5),100),200);
console.log(`x: ${x}`);

var y = addFor3(3,4,5);
console.log(y);


// void함수(return이 없는 함수)
// return이 없는 void함수는 변수에 저장 X, undefined가 저장됨.
function greeting(nickname) {
    if (nickname === '바보') {
        console.log(`그런 나쁜 말은 쓰지 마세요.`);
        return;
    }
    console.log(`${nickname}님 안녕하세요!`);
}

function showMultiply(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

showMultiply(30, 40);
greeting('김개똥');
greeting('박쥐똥');
greeting('바보');


function infLooping() {
    var n = 1;
    while (true) {
        console.log(n);
        if (n === 10) {
            return;
        }
        n++;
    }
}
// infLooping();


// 함수가 리턴할 수 있는 데이터는 '단 하나'입니다.
// 2개의 정수를 전달 받아서 덧셈, 뺄셈, 곱셈, 나눗셈 결과를 다 리턴하고 싶다.
// 객체라는 데이터 하나에 덧셈, 뺄셈, 곱셈, 나눗셈을 넣으면 가능
function operateAll(n1, n2) {
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2,
    };
}

var results = operateAll(10, 5);
console.log(`덧셈 결과: ${results.plus}`);
console.log(`곱셈 결과: ${results.multiply}`);
console.log(operateAll(20,3).minus);