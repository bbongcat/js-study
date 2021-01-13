

// splice() : 배열의 특정 요소 제거

var foods = [`떡볶이`, `오뎅`, `김말이`, `닭꼬치`];

// splice(지우고 싶은 인덱스 번호, 해당 번호로부터 몇 개의 인덱스를 지울 것인지)
// splice는 삭제한 요소들을 다시 배열로 저장시킬 수 있다
var delFoods = foods.splice(1, 2);
console.log(foods);
console.log(delFoods);

// 삭제하고 그 위치에 요소 삽입 (갯수 제한 없음)
foods.splice(0,1, '치킨', '피자', 1, 2, 3);
console.log(foods);

// delete count를 0으로 설정하면
// 인덱스를 하나도 삭제하지 않고 중간에 요소 추가 가능
foods.splice(2, 0, '파스타');
console.log(foods);

// delete count를 설정하지 않으면 2번 인덱스부터 끝까지 전체삭제됨
foods.splice(2);
console.log(foods);

console.log('=============================');
// 특정 요소를 탐색하여 삭제
foods.push('보쌈');
foods.push('닭발');
console.log(foods);

console.log('=============================');

// 사용자의 삭제요구데이터
var input = '치킨';

if (foods.includes(input)) {
    foods.splice(foods.indexOf(input), 1);
    console.log(`${input} 삭제 완료!`);
} else {
    console.log('데이터가 존재하지 않습니다.');
}
console.log(foods);