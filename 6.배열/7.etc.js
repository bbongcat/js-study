

// indexOf() : 배열 요소의 인덱스를 알려줌

var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

var idx = foods.indexOf('김말이');
console.log(`찾은 인덱스: ${idx}`)

// 탐색에 실패하면 -1을 가져옴
var idx = foods.indexOf('순대');
console.log(`찾은 인덱스: ${idx}`)


// includes() : 배열 요소의 존재 여부 확인
var result = foods.includes('닭꼬치');
console.log(`탐색 결과: ${result}`);

var result = foods.includes('파스타');
console.log(`탐색 결과: ${result}`);


// slice() : 배열을 잘라서 복사함 (원본엔 변화X)
console.log('==========================');

var arr = [0,1,2,3,4,5,6,7,8,9];

var slicedArr = arr.slice(3, 7);
console.log(slicedArr);

var slicedFoods = foods.slice(1, 3);
console.log(slicedFoods);

// 6번부터 끝까지 잘라서 복사
slicedArr = arr.slice(6);
console.log(slicedArr);

// 원본배열은 변화 없음
console.log(arr);

console.log('==============================');

// reverse() : 배열을 역순으로 배치함
// 원본을 변화시키고 싶지 않으면 복사본을 만들어서 사용
var copyArr = arr.slice(0)
copyArr.reverse();
console.log(copyArr);
console.log(arr);



// join() : 배열의 요소들을 연결한 문자열로 변환

// join메서드에 구분자 문자열을 넣으면 요소 사이에 삽입. 안 넣으면 기본값은 콤마
var foodStr = foods.join('! ');
console.log(foodStr);