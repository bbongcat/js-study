

// prompt함수와 alert이라는 함수는 브라우저에서만 작동됩니다.
// prompt함수는 기본적으로 입력값을 문자열로 처리합니다.
// 숫자로 처리하기 위해서는 함수 앞에 +기호를 붙이세요.
var num1 = +prompt('첫번째 숫자를 입력하세요.');
var num2 = +prompt('두번째 숫자를 입력하세요.');


alert(`입력한 숫자는 ${num1}, ${num2}입니다. 두 수의 합은 ${num1 + num2}입니다.`)


