

// 객체 생성
var dog = {
    name: '뽀삐',
    kind: '시츄',
    age: 3,
    favorite: ['산책', '간식']
};

var cat = {
    name: '이뽕',
    kind: '터키시 앙고라',
    age: 4,
    favorite: ['밥', '캣타워', '낮잠', '츄르'],
    hair: 'white'
};

console.log(typeof dog);
console.log(typeof cat);

// 객체 프로퍼티 참조
console.log(dog.name);
console.log(cat.kind);
console.log(cat.favorite);
console.log(cat.favorite[2]);

dog.favorite.push('꼬리흔들기');
console.log(dog);


// 프로퍼티 참조 2번째 방법
console.log(dog.age);
console.log(dog['age']); //대괄호로 참조할 때는 문자열로 키를 만들어줘야 함


// 프로퍼티 값 수정
dog.age = 5;
console.log(dog);

cat.favorite[1] = '스크래쳐';
console.log(cat.favorite);

console.log('==========================');


// 프로퍼티 동적 추가
dog.owner = '김철수';
console.log(dog);


// 프로퍼티 삭제
delete dog.owner;
console.log(dog);

console.log('=================================');

// for ~ in (ES6)
for (var key in cat) {
    console.log(key);
    console.log(cat[key]);
}


var arr = [];
var obj = {};

obj.x = 10;
obj.y = 20;
console.log(obj);

console.log('==================================');

// 객체의 프로퍼티 키 존재 여부 확인
var flag = 'owner' in cat;
console.log(`존재 여부: ${flag}`);

console.log('==================================');

var key = 'hobby';

if (!(key in cat)) {
    console.log('해당 키는 없는 키입니다.');
} else {
    console.log('해당 키는 존재합니다.');
}
