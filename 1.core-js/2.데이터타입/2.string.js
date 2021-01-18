

var greeting;
greeting = 'hello';
greeting = "안녕하세요";
greeting = `니하오마`;

console.log(typeof greeting);

var exStr = '그는 나에게 "위험해!"라고 말했다.';
var exStr = "그는 나에게 \"위험해!\"라고 말했다.";

console.log(exStr);

exStr = `Let's go!`;

exStr = `Let's go! "together"`;

console.log(exStr);


//템플릿 리터럴(`` 백틱을 활용)
// console.log('===============================================');
// var template = '<ul?>\n\t<li>\n\t\t<a href="#">Home</a>\n\t</li>\n</ul?>'
// console.log(template);

var template = `<ul?>
    <li>
        <a href="#">Home</a>
    </li>
</ul?>`

console.log(template);

var month = 4;
var day = 5;
var anniversary = '식목일';

// console.log(month + '월 ' + day + '일은 ' + anniversary + "이에요~");
console.log(`${month}월 ${day}일은 ${anniversary}이에요~`);

var a = "120"; //쌍따옴표에 들어있기 때문에 120은 숫자가 아니라 문자가 됨
var b = "100";
console.log(a + b);