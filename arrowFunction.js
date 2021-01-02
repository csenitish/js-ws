// normal
var add = function(x, y) {
    return x + y;
}

// arrow (pure) light weight
//shortcut
var add = (x, y) => x + y; //ES6
//single line return stetment optional and {} also optinal



///for multi line

var add = (x, y) => {
    x = x + 10;
    y = y + 20;
    return x + y;
}

//
var y = () => "hello"; //  not required {} for single line

var z = (x) => x + 10;
// or
var z = x => x + 10;

/* 
ShortHand function
 
Arrow function do not have their own this value.
the value of this inside an arrow function is always inherited from the enclosing scope.

pure function

cannot be used as constructor
 
not suitable for call ,apply,bind method


*/



function myname() {
    console.log('i am this', this) // 'this' have current calling reference

} // undefined
window.myname; //current calling object
//output:  f myname(){
// console.log('i am this',this);
//       }







var obj = {
        show() {
            console.log('This is ', this);
        }
    }
    // undefined
window.obj.show();
// This is  {show: ƒ}




var obj = {
    show() {
        console.log('This is ', this);
        var d = () => console.log('I am this ', this);
        //arrow function do not have 'this' ,but here, on the top show() have this then arrow function carry this but do not have
        d();
    }
}
undefined
obj.show();
// This is  {show: ƒ}
// I am this  {show: ƒ}




var person = () => console.log('This is ', this); //arrow function is pure function

undefined
var n = new person(); // no any constructor property
// TypeError: person is not a constructor






// for n number of arguments
var ff = (...arg) => console.log(arg);
//undefined
ff(100, 200);
// (2) [100, 200]