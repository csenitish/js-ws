// function definition stype
// only function definition host

var name;

function disp() {

    console.log("Name is ", window.name);

}
/////////////////////////////////////////////
var add = function adder() { // declaration style, here adder is name 
        console.log("I am Adder ");
    }
    //undefined
add;
//ƒ adder(){
//   console.log("I am Adder ");
//}



add();
//I am Adder 
//undefined


typeof add;
//"function"



function myname() {
    console.log('i am this', this) // 'this' have current calling reference

} // undefined
window.myname; //current calling object
//output:  f myname(){
// console.log('i am this',this);
//       }


/////////////////////////////////////
var add = function() { // anonymous function
    console.log("I am Adder ");
}

var add = function adder() { // named function expression
    console.log("I am Adder ");
}




var name; // globle scope
function disp() { // globle scope
    var name = "Test";
    console.log('Name is ', window.name);
}




//////////////////////////////// function expression
myFunction(); //
var myFunction = function() { // here var is hosted on top
        console.log("I am Anonymous Function ");
    }
    // type error because var myFunction is host on top and they are undefined 


//Using function expression or anonymous function
// 1. Attach with event
//2. use with IIFE


// using example
//var buttonOne = document.getElementById('b1') //b1 is anything

//buttonOne.addEventListener('click', function) 
//{

//   alert("hello");
//}

// or

//var buttonOne = document.getElementById('b1') //b1 is anything
//bottonOne.onclick=function(){

//{

//   alert("hello");
//}