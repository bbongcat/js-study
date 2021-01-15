
const pi = 3.14159;

// pi = 6.66; --- 상수를 변경하려고 했기 때문에 에러가 난다.

console.log(`원주율: ${pi}`);


// const y; --- let으로는 선언만 하는게 가능하지만 const는 선언과 동시에 초기화 필수(값을 넣어야 함)

console.log(`=================================`);

const TAX_RATE = 0.1; //상수로 쓰는 데이터는 관례상 모두 대문자로 쓰고 스네이프케이스를 사용(Java와 C언어도 마찬가지)

let preTaxPrice = 100; //세전가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE) // 세후 가격


// const와 객체(배열, 객체 등) --- const 값으로 배열, 객체를 할당한 경우 변경 가능
const person = {
    name: 'park'
};

/*
person = {
    name: 'lee'
} --- 이건 const person의 데이터 자체를 통으로 바꿨기 때문에 에러남. 내부의 프로퍼티만 변경하는 것은 가능
*/

person.name = 'kim';
person.age = 20;
person.isStudent = true;

console.log(person);


const arr = [1,2,3];
arr[1] = 200;
console.log(arr);

// arr = ['d', 'f']; --- 이건 불가