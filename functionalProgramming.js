/*
function programming is more declarative style
there are so many progamming paradigms, wee talk 2 of them
1. imperative- how to do
2. declarative - what to do
*/

// imperative
var arr = [10, 20, 30, 40, 50];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
//150


//dclarative
arr.reduce((acc, ele) => acc + ele); // reduce pre-define function
//150


// functionall progamming follow thepure function, it is self sufficient takes input and produce output.
//pure function
function adder(x, y) {
    return x + y;
}

//impure functionn
var a = 1000;

function adder(x, y) {
    return x + y + a;
}



// array method



// array define
var arr = [10, 20, 30];
// undefined
typeof arr;
//"object"
arr instanceof Array;
// true

// array creation
var a = new Array(10); // size wise empty array create when sigle element
// undefined
a;
//(10)[empty× 10]

var a = new Array(10, 20, 30); // new array created when multi elements
//undefined
a;
//(3)[10, 20, 30]

//i Array.of single aur multipal element then create new array
Array.of(1, 2, 3); // create new array
//(3)[1, 2, 3]
Array.of(2); // 
//[2]


// copy array create means clone create
//simple cloning
Array.from(arr);
//(3)[10, 20, 30] 0: 101: 202: 30 length: 3 __proto__: Array(0)
var c2 = Array.from(arr);
//undefined
c2;
//(3)[10, 20, 30]
c2[0] = 1111;
//1111
arr;
//(3)[10, 20, 30] // no change in arr
c2;
//(3)[1111, 20, 30]   


// check array ?
Array.isArray(arr);
//true
Array.isArray(100); // here 100 is value ,not array 
//false


// instanceof is a operater
var f = { x: 100, y: 200 };
//undefined
f instanceof Object;
//true


arr;
//(3)[10, 20, 30]
var v = [10, 20, 30, arr, { x: 100, h: [1000, 2000] }]; //deep array
//undefined
v;
//(5)[10, 20, 30, Array(3), {…}] 



Array.from(v);
//(5)[10, 20, 30, Array(3), {…}] // shallow cloning


var g1 = [...[10, 20, 30], ...arr]; //spread
//undefined
g1;
//(6)[10, 20, 30, 10, 20, 30]



var g1 = {... { x: 100 }, ... { x: 200, y: 300 } };
// key never dublicate so over write x:100
//undefined
g1; // { x: 200, y: 300 }



// cloning with function means any operations
Array.from([10, 20, 30], function(y) {
        console.log('Y is ', y);
    }) //  
    //  Y is 10
    //  Y is 20
    //  Y is 30(3)[undefined, undefined, undefined]
Array.from([10, 20, 30], function(y) {
        console.log('Y is ', y);
        return 100 + Math.random();
    })
    // Y is 10
    //  Y is 20
    // Y is 30(3)[100.92635271866115, 100.44631590712686, 100.10279888157307]

Array.from([10, 20, 30], function(y) {
        console.log('Y is ', y);
        return y + Math.random();
    })
    // Y is 10
    // Y is 20
    // Y is 30(3)[10.882427279819584, 20.849828020774904, 30.519955246453264]

arr;
//(3)[10, 20, 30]

var v1 = [100, 200, 300];
//undefined

// before spread
arr.concat(v1);
//(6)[10, 20, 30, 100, 200, 300]
arr + v1;
//"10,20,30100,200,300"// coercion,  in string

arr;
//(3)[10, 20, 30]


//copyWithin
//internal copy same array
arr = [100, 200, 300, 400, 500, 600];
//(6)[100, 200, 300, 400, 500, 600]

arr.copyWithin(0, 3); // (0,3) target ,start index and end index (end index - 1)
//(6)[400, 500, 600, 400, 500, 600]

arr = [100, 200, 300, 400, 500, 600];
//(6)[100, 200, 300, 400, 500, 600]

arr.copyWithin(2, 3, 5); // target ,start index and end index (end index - 1)
//(6)[100, 200, 400, 500, 500, 600]


// array read

arr.values; // ararry itreate
//ƒ values() {
//    [native code]
//}

arr.values();
//Array Iterator {}


//
for (let i of arr.values()) {
    console.log(i);
}
//100
//200
//400
//500
//500
//600
//undefined


var itr = arr.values();
undefined
itr.next(); //{ value: 100, done: false }
itr.next(); //{ value: 200, done: false }
itr.next(); //{ value: 400, done: false }
itr.next(); //{ value: 500, done: false }
itr.next(); //{ value: 500, done: false }
itr.next(); //{ value: 600, done: false }

arr;
//(6)[100, 200, 400, 500, 500, 600]
itr.next(); //{ value: undefined, done: true } // iterater




// generator function 

//return function ko khatm karta hai yield function ko memory me bithaye rakhta hai

function* myItr() {
        yield 1000; // yield is keyword , yield give value
        yield 2000;
        yield 3000;
    }
    //undefined

var y = myItr();
//undefined
arr.values
    //ƒ values() {
    //   [native code]
    //}
y;
//myItr { < suspended > }

y.next(); //{ value: 1000, done: false }
y.next(); //{ value: 2000, done: false }
y.next(); //{ value: 3000, done: false }
y.next(); // { value: undefined, done: true }



//
function networkCall() {
    return ['A', 'B', 'C', 'D']
}
//undefied


// streaming means iterator
function* nowStreaming() {
        yield { results: [100, 200, 300] };
        yield networkCall();
        yield 3000;
    }
    //undefined
var ff = nowStreaming();
//undefined
ff.next(); //{ value: {…}, done: false }

ff.next().value;
//(4)["A", "B", "C", "D"]
ff.next().value;
//3000
ff.next().value;
//undefined
ff.next(); //{ value: undefined, done: true }


function* otp() {
        while (true) {
            yield Math.random();
        }
    }
    //undefined

var g = otp();
//undefined
g.next().value;
//0.033099214045279046
g.next().value;

//0.8194848730554287
g.next().value;

//0.03465507246387278
g.next().value;

//0.4637077672578356
g.next().value;

//0.1527011811230734
g.next().value;

//0.46302153503777865
g.next().value;

//0.8154590732269551

// index with value
arr.entries
    // ƒ entries() {
    //     [native code]
    // }
arr.entries().next(); // { value: Array(2), done: false }

arr;
//(6)[100, 200, 400, 500, 500, 600]
var itr = arr.entries();
//undefined
itr.next().value;
//(2)[0, 100]
itr.next().value;
//(2)[1, 200]
itr.next().value;
//(2)[2, 400]