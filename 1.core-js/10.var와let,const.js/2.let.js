

// 1. 중복 선언 불가능
let x = 3;
// let x = 5; --- 에러남
x = 5;


// 2. 블록 레벨 스코프 지원
let y = 10;
if (true) {
    let y = 20;
    console.log(`if의 y: ${y}`); //20
}
console.log(`전역레벨의 y: ${y}`); //10

for (let i = 0; i < 10; i++) {}
// console.log(i); --- i를 찾을 수 없음. for문이 끝나면 i는 메모리에서 제거되기 때문


// 3. 변수 호이스팅이 일어나지 않음
z = 10;
console.log(z);

// let z; --- 초기화가 일어나기 전까지는 z에 접근할 수 없다는 에러 메시지가 뜸