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