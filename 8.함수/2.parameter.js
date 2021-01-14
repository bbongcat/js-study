
// begin부터 end까지의 총합을 구해주는 함수
// 함수 정의 (begin과 end은 매개변수이기 때문에 따로 선언을 하지 않고 함수명 뒤 소괄호에 나열해줌)
function calcRangeTotal(begin=1, end=10) {

    console.log(`begin: ${begin}, end: ${end}`);
    var total = 0;
    for (var number = begin; number <= end; number++) {
        total += number;
    }
    return total;
}

var result = calcRangeTotal(5, 11);
console.log(`함수 실행결과: ${result}`);


// 매개변수가 없는 함수
function sayHello(language='한국어') {

    //ES5
    //language = language || '한국어';

    if (language === '한국어') {
        console.log(`안녕하세요!`);
    } else if (language === '영어') {
        console.log('Hello!');
    } else if (language === '중국어') {
        console.log('ni hao!');
    }
}
sayHello('중국어');

function selectRandomFood() {
    var randomNum = Math.random();
    if (randomNum > 0.66) {
        return '짜장면';
    } else if (randomNum > 0.33) {
        return '볶음밥';
    } else {
        return '돈카츠';
    }
}

console.log(`오늘 점심 메뉴: ${selectRandomFood()}`);


function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log((`인수를 숫자로 전달해주세요!`));
        return;
    }
    return num1 * num2;
}

var result = multiply(4, 3);
console.log(result);