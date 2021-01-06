

//동등 비교
console.log(5 == 5);


//타입은 다르지만 암묵적으로 문자열 5를 정수 5로 변환시킴. 너무 인간친화적;;
console.log(5 == '5');


// 일치 비교 (타입까지 체크해서 비교함) 이걸 사용할 것.
console.log(5 === 5);
console.log(5 === '5');


console.log('======================================');
//동등 비교는 결과 예측이 힘드므로 사용하지 않는 것을 추천.
console.log('0' == ''); //f
console.log(0 == ''); //t
console.log('0' == 0); //t
console.log(false == 'false'); //f
console.log(false == '0'); //t


//일치비교에서는 NaN을 주의, NaN은 자신과 일치하지 않는 유일한 값이다.
console.log('=======================================');
console.log(NaN === NaN);
console.log(isNaN(NaN, NaN));


//대소 비교
console.log('========================================');
var x = 10;
console.log(x > 5);
console.log(x <= 10);

// 문자열 비교
console.log('=====================================');
console.log('apple' === 'APPLE'); //False

console.log('ace' < 'ade'); //True
// a97 c99 e101 < a97 d100 e101 이므로 ade가 이김
console.log('복숭아' < '감자'); //False
// 사전순으로 생각하면 됨
console.log('ZEBRA' > 'apple'); //False
// 왜냐면 Z:90 a:97 이므로 대문자열보다 소문자열의 숫자가 우세
/*
문자열의 대소비교는 같은 형태(대문자, 소문자, 한글, 일본어)에서는 사전에서 뒤에 나오는 단어일수록 크다.
단 유니코드 숫자 크기로 비교하므로 영문 대문자 < 영문 소문자 < 한글
*/

// ASCII Code 체계에서 A:65 B:66 C:67등등으로 각 대소문자 숫자 마다 숫자가 부여되어 있음
// UNICODE에서 3byte까지 올리면서 전세계 글자를 다 담음. 가:44032, 나중에 한국어 체크할때 가-힣 으로 체크
