/*
# UP & DOWN 게임
1. 1~100사이의 정수 난수를 발생시켜 해당 값을 사용자가 맞추게 
   하는 게임입니다.
2. 사용자가 입력한 값이 정답값보다 큰지 작은지 사용자에게 
알려주어 사용자가 지속해서 범위를 좁혀가며 답을 찾을 수 있도록 합니다.
3. 정답을 맞췄을 때 프로그램이 종료되도록 프로그램을 구성해보세요.
4. 사용자가 정답을 맞췄을 때 몇번만에 정답을 맞췄는지 
   출력하는 로직을 추가하세요.
*/


// 게임에 필요한 데이터객체
const gameDatas = {
    secretNumber: Math.floor(Math.random() * 100) + 1,
    count: 0,
    countDown: 6,
    min: 1,
    max: 100
};

// 게임 종료 조건을 판단하는 함수
function isGameFinish() {
    return inputAnswer();
}

// 사용자의 입력 데이터를 처리하는 함수
function inputAnswer() {
    gameDatas.answer = +prompt(`숫자를 입력하세요! [${gameDatas.min} - ${gameDatas.max}]`);
    gameDatas.count++;
    gameDatas.countDown--;

    return checkInputNumber();
}

// 사용자의 입력 데이터를 검증하는 함수
function checkInputNumber () {
    // 객체 디스트럭쳐링(객체 분해)
    const {secretNumber, answer, count, countDown} = gameDatas;

    if (secretNumber === answer) {
        alert(`정답입니다! ${count}번만에 맞추셨군요!`);
        checkCountDown(countDown);
        return true;
    } else if (secretNumber > answer) {
        alert(`UP!`);
        gameDatas.min = answer;
    } else {
        alert(`DOWN!`);
        gameDatas.max = answer;
    }
    alertCountDown(countDown);
    return false;
}

// 사용자의 남은 카운트다운을 알려주는 함수
function alertCountDown(countDown) {
    if (countDown > 0) {
        alert(`정답 기회 ${countDown}번 남음~`);
    } else {
        alert(`정답 기회 모두 소진! 계속 문제를 풀어주세요!`)
    }
}

// 사용자가 정해진 카운트다운 안에 맞췄는지 판별해주는 함수
function checkCountDown(countDown) {
    if (countDown >= 0) {
        alert(`You Win!!`);
    } else {
        alert(`You Lose!`);
    }
}

// 핵심 실행 로직 (프로그램 출발점)
(function () {
    alert(`[UP & DOWN 게임 - 1~100 사이의 숫자를 맞춰보세요!]`);
    /*
    while (true) {
        if (isGameFinish()) break;
    }
    위 코드를 아래 한줄로 바꿀 수 있음 */
    while(!isGameFinish()) {}
}());




/* 내가 한 것
const correctNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
let input = +prompt(`1~100까지의 숫자 중 하나를 입력해보세요`);
while (true) {
   if (input > correctNumber) {
      count++;
      let down = input - correctNumber;
      input = +prompt(`Down! (정답까지 ${down})\n정답 도전 횟수: ${count}`);
   } else if (input < correctNumber) {
      count++;
      let up = correctNumber - input;
      input = +prompt(`UP! (정답까지 ${up})\n정답 도전 횟수: ${count}`);
   } else if (input === correctNumber) {
      count++;
      alert(`정답입니다!\n${count}번만에 정답을 맞추셨습니다.`)
      break;
   } 
   
   if (count === 7) {
      alert(`7번 안에 맞추지 못하셨습니다. 그래도 계속 도전해보세요!`);
   }
}
*/