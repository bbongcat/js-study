

var week = ['월', '화', '수', '목', '금', '토', '일']


// for of는 배열을 다 꺼내서 쓸 때는 매우 편리하지만,
// 인덱스 지원을 안해서 일부만 빼내서 쓸 경우엔 사용 불가


for (var day of week) {
    console.log(`${day}요일`);
}


/*
for (var i = 0; i < week.length; i++) {
    if(i % 2 === 1) {
        continue;
    }
    console.log(`${week[i]}요일`);
}
*/