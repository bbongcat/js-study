

var money = 4000;

// 아래와 같은 경우 삼항연산자로 한줄로 처리하는 것이 편함.
// var food = money >= 5000 ? '김치찌개' : '라면';
/*
var food;
if (money >= 5000) {
    food = '김치찌개';
} else {
    food = '라면';
}
*/


// 아래와 같은 경우엔 삼항연산자를 쓰지 말 것. 식별 어려움
var food = money >= 5000 ? '김치찌개' : money >= 3000 ? '라면' : '굶어!';

var food;
if (money >= 5000) {
    food = '김치찌개';
} else if (money >= 3000) {
    food = '라면';
} else {
    food = '굶어!';
}


console.log(`선택된 음식: ${food}`);
