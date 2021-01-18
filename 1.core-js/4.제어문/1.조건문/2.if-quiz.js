/*
내가 한 것

var height = +prompt('당신의 키를 입력하세요.');
var age = +prompt('당신의 나이를 입력하세요.');


if (height >= 140 && age >= 8) {
    alert('놀이기구에 탑승할 수 있습니다.');
} else {
    alert('놀이기구에 탑승할 수 없습니다.');
}

alert('오늘 하루 즐거운 시간 되세요!');
*/

// 같이 한 것
var height = +prompt('당신의 키는?');
var age = +prompt('당신의 나이는?');

// 디버깅
// console.log(`h: ${height}, a: ${age}`);
// console.log(typeof height);

if (height >= 140 && age >= 8) {
    alert('놀이기구에 탑승할 수 있습니다.');
}
else {
    alert('놀이기구에 탑승할 수 없습니다.');
}
alert('오늘 하루 즐거운 시간 되세요!')