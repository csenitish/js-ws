// if a Function recieve a functionas an argumentn or it retur a funnctio it is alled Higher order function

function hof(fn) {
    return function() {
        return fn(10, 20);
    }
}







function show() {
    n // here show higher order function
    var x = "Hi";
    return function() {
        var y = "Ok";
        return function() {
            return "Hello" + x + y;
        }
    }
}














var arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//10
//20
//30


for (let i of arr) {
    console.log(i);
}
// 10
//20
//30

// best usess
arr.forEach(function(ele) { console.log('Element is ', ele); });
// Element is 10
// Element is 20
// Element is 30

typeof arr.forEach
    //"function"


function hof() {
    console.log("HOF ");
    return function() {
        console.log("I am Inner ");
    }
}

//
var e = hof();
//HOF
e();
//I am Inner