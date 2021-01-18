

// 2차원 배열
// 우리반 학생들(4명)의 수학 점수를 관리
var mathScores = [67, 89, 92, 32];

// 우리반 학생들(4명)의 영어 점수를 관리
var engScores = [100, 87, 55, 77];

// 우리반 학생들(4명)의 4과목(국영수탐) 점수들을 관리
var scores = [
    [88, 45, 82, 100],
    [100, 87, 55, 77],
    [67, 89, 92, 32],
    [100, 100, 92, 44]
];

// 총 네 개의 배열이 들어가 있으므로 length는 4가 된다
console.log(scores.length);

// 세번째 줄에 있는 수학 점수 배열을 모두 나타냄
console.log(scores[2]);

// 3번째 학생의 영어 점수
console.log(scores[1][2]);


console.log('=========================');

/*
    우리반 전체과목 평균
    우리반 전체국어 평균
    우리반 전체영어 평균
    우리반 첫번째 학생 평균 점수
    우리반 두번째 학생 평균 점수... 등등을 구할 수 있다.
*/

// 반 전체 총점을 저장할 변수
var ourClassScoresAvgTotal = 0;

// 학생들의 출석번호 시퀀스
var stuNum = 1;

    // 국어 점수 총점
    var subjectKorTotal = 0;

        // 한명의 학생의 점수배열(scoreArray)에서 0번 인덱스만 추출해서 누적
        subjectKorTotal += scoreArray[0];



for (var scoreArray of scores) {

    var eachTotal = 0; //학생 1명의 총점
    for (var score of scoreArray) {
        eachTotal += score;
    }

    var eachAvg = eachTotal / scoreArray.length;

    // 한명의 평균을 구한 후 합산
    ourClassScoresAvgTotal += eachAvg;

    console.log(`${stuNum}번 학생: 총점 - ${eachTotal}, 평균 - ${eachAvg}`);
    stuNum++;
}

var ourClassAvg = ourClassScoresAvgTotal / scores.length;
console.log(`우리반 평균: ${ourClassAvg}`);

// 국어점수 평균
var subKorAvg = subjectKorTotal / scores.length;
console.log(`국어 평균: ${subKorAvg}점`);


// 3차원 배열
var arr3d = [
    [
        [1,2,3],[4,5,6],[7,8,9]
    ],
    [
        [10,11,12],[13,14,15],[16,17,18]
    ],
    [
        [19,20,21],[22,23,24],[25,26,27]
    ]
]

console.log(arr3d[1]);
console.log(arr3d[1][2][0]);