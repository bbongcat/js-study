

/*
- money변수에 돈의 액수를 정수 형태로 저장하고
 money의 값이 5000 이상이면 '김치찌개'를
 5000 미만이면 '라면'을 food 변수에 저장시키는
 로직을 작성하세요
*/

// 브라우저에서 '가지고 있는 돈을 입력하세요.'를 띄우고 선택된 음식 결과를 브라우저에 출력하세요.

var money = 3000;
var food = money >= 5000 ? '김치찌개' : '라면';

console.log(`food: ${food}`);

var money = 8000;
var food = money >= 5000 ? '김치찌개' : '라면';

console.log(`food: ${food}`);

var money = +prompt('가지고 있는 돈을 입력하세요.')
var food = money >= 5000 ? '김치찌개' : '라면';

alert(`선택된 food: ${food}`);