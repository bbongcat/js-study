/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    var user = {
        kim1234:'kkk1234',
        lee4567:'lll4567',
        park9876:'ppp9876'
    }
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 아니라면 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/

var user = {
    kim1234: 'kkk1234',
    lee4567: 'lll4567',
    park9876: 'ppp9876'
}

var inputId = prompt(`아이디를 입력하세요.`);

while (true) {
    if (inputId in user) {
        var inputPw = prompt(`비밀번호를 입력하세요.`);
        var realPw = user[inputId];
        if (inputPw === realPw) {
            alert(`로그인 성공!`);
            break;
        } else {
            alert(`비밀번호가 틀렸습니다.`);
        }
    } else {
        alert(`존재하지 않는 회원입니다.`);
        var inputId = prompt(`아이디를 입력하세요.`);
    }
}

/* 내가 한 것
var user = {
    kim1234: 'kkk1234',
    lee4567: 'lll4567',
    park9876: 'ppp9876'
}

var id = prompt(`아이디:`)

while (true) {
    
    var check = `${id}` in user;

    if (!(id in user)) {
        alert('존재하지 않는 회원입니다.');
        var id = prompt(`아이디:`)
    } else if (id in user) {
        var pw = prompt(`비밀번호:`)
    } else if (!(pw in user)) {
        alert('비밀번호가 틀렸습니다.');
        var pw = prompt(`비밀번호:`)
    } else if (pw in user[id]) {
        alert('로그인 성공!');
        break;
    }
}
*/