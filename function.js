//  in simmple words, the collection of things we want to do , wrap those statements in function.
//   As a function it contains set of code statements and should receive some input(arguments) and returnn output(some value.)
//function is no 1 citizen, its loosely typed and dynamic typed language 

//Generally , a function is a "subprogram", thaat can be called by code externl or internal(reursion)
//in JS , function are 1st class obbjects(Funcction), because they can have properties ans methods just like any other objects.

function add() {
    console.log("i am add");
} // 

add(); // undefined

typeof add; // function

console.dir(add); // directory stracture

add(50, 34, 7); // arguments recieve but no output
// so 
function add() {
    console.log("i am add", arguments); // typeof console - object, and typeof conssole.log - function
    //every function comes out in Function, Fuction have aguments
}

function add() {
    console.log("i am add", arguments.length);
}
//add(5,5,6,9) then output is i am add 4 


function add() {
    console.log("i am add", arguments.length);
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} // n arguments handels , only for number not for string



//instanceof Array; // which type of arguments 
// basically  documentation 

function show() {
    //console.log("I am Show ",arguments.length);
    var sum = 0;
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    for (var i = 0; i < arguments.length; i++) {
        sum += parseInt(arguments[i]);
    }
    return sum;
} // show(1,"2",3,"4","five",6,"7",8,9,10);object false NaN


function show() {
    //console.log("I am Show ",arguments.length);
    var sum = 0;
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    for (var i = 0; i < arguments.length; i++) {
        sum += isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]);
    }
    return sum;
} // show(1,"2",3,"4","five",6,"7",8,9,10);object false 50
function firstNumber() {
    return 1000;
}



function secondNumber() {
    return 2000;
}

show(firstNumber, secondNumber, 10, "Hello", "20", 30); //NaN


function show() {
    //console.log("I am Show ",arguments.length);
    var sum = 0;
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "function") {
            arguments[i] = arguments[i]();
        }
        sum += isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]);
    }
    return sum;
}

function firstNumber() {
    return 1000;
}



function secondNumber() {
    return 2000;
}

show(firstNumber, secondNumber, 10, "Hello", "20", 30); //3060




/////////////////////////////////////////////////

// define and collig a function
function add(x, y) {
    return x + y;
}

//callig a function
add(10, 20); //30






//function parammeter
let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
// returns 'I love chocolate frogs'
let madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'



//replace
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');