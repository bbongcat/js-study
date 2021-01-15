
var x = 'global x';

function outer(x) {
    var y = 'outer local y';
    console.log(x);
    console.log(y);
    // console.log(z); 자식의 데이터 참조 불가

    function inner() {
        var x = 'inner local x'
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}
outer('outer local x');