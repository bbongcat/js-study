

for (var i = 1; i < 11; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log('반복문 종료');


console.log('=========================');

// break는 바로 위의 블록만 탈출함. 고로 제일 바깥의 for문으로 돌아가서 다시 작동
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        if (i === j) {
            break;
        }
        console.log(`${i}, ${j}`);
    }
}