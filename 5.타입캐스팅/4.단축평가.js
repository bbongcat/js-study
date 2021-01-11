

// OR연산자
console.log('hello' || 'world');
console.log('' || '안녕');
console.log('잘가' || '');

// AND 연산자
console.log('Hello' && 'World');
console.log('' && '안녕');
console.log('잘가' && '');

// 응용법
console.log('==========================');

var x = 10;

// 선생님은 첫번째 방법을 추천. 눈에 잘 알아보기 쉽기 때문
if (x > 0) {
    console.log('x는 0보다 큽니다.');
}

x > 0 && console.log('x는 0보다 큽니다.');