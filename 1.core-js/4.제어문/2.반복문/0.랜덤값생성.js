
// 실수 랜덤값(난수) 생성 함수
// 자바스크립트와 자바와 동일
// Math.random(); -> 0.0 이상 1.0 미만의 랜덤값 생성.

var  randomNumber = Math.random();

console.log(`랜덤값: ${randomNumber}`);

if (randomNumber > 0.66) {
    console.log('오늘의 추천 음식: 짜장면');
} else if (randomNumber > 0.33) {
    console.log('오늘의 추천 음식: 감자탕');
} else {
    console.log('오늘의 추천 음식: 김밥');
}
console.log('==================================================');


// Math.floor() : 내림값, Math.ceil() : 올림값, Math.round() : 반올림값

console.log(Math.floor(3.3)); //내림값 3
console.log(Math.ceil(3.3)); // 올림값 4
console.log(Math.round(3.3)); // 반올림 3
console.log('==================================================');


//0 이상 10 미만의 랜덤 정수를 만들기
var randomInt = Math.floor(Math.random() * 10);

console.log(`랜덤 정수: ${randomInt}`);
console.log('==================================================');

//11 ~ 38 미만의 랜덤 정수 만들기
var randomInt2 = Math.floor(Math.random() * 27) + 11;

/*
    x ~ y (이상 미만 개념)의 랜덤 정수 생성 공식

    - Math.floor(Math.random() * (y - x) + x)
*/
console.log('==================================================');

// 1 ~ 45
var lottoNum = Math.floor(Math.random() * 45) + 1;

console.log(`로또 숫자: ${lottoNum}`);