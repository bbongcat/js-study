// 함수 정의
function calculateTotal(x) {
    console.log(`함수 실행!`);
    var total = 0;
    for (var n = 1; n <= x; n++) {
        total += n;
    }
    return total;
}
console.log(`안녕하세요!`);


// 함수 호출
var result = calculateTotal(100);
console.log(result);
calculateTotal(50);
calculateTotal(100);


// 함수 리터럴 (리터럴은 표현식이라서 ;을 찍음)
var add = function (x, y) {
    return x + y;
};
/* 위와 같은 식
function add(x, y) {
    return x + y;
} */

console.log(add(10, 20));
console.log(add(100, 200));
console.log(add(-10, -20));

console.log('==================================');

// 함수식 이름이 너무 길 경우 이렇게 변수에 할당하여 호출 가능
var ct = calculateTotal;
console.log(ct(10));
console.log(ct(100));