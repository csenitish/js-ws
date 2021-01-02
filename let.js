//ES5
//  never bind with window
function show() {
    if (10 > 2) {
        let x = 100; // block level scope
        console.log('X is ', x);
    }
    console.log('After Block ', x);
}
//undefined
show();
// X is  100
// ReferenceError: x is not defined


// before let


function show() {
    console.log('Start X is ', x);
    // var x;
    if (10 > 2) {
        (function() {
            var x = 100;
            console.log('X is ', x);
        })();

    }
    console.log('After Block ', x);
}
// undefined
show();
//ReferenceError: x is not defined

//TDZ (temporal deadzone)
//the TDZ is a behaviour in js thatt occurs when declaring a variable with the let and const keywords, but not with var.
//a shorthand you will often hear to describe it is that "Let's don't host" but this isnot tecnically true.
//read on for a brief description of whats really occuring.
// in js, variable declarations(but not assignments) are hosted to the top of the scope.

// the js interpreter works in a two step process:
// 1. Compile time : run through all code looking for variable/function declaration
// 2. runtime : execute the code including assignments and functionn invocations

//

// therefore on the first line, greetig is defined but has no assignment. js autommatically provides the vale undefined to deffined variables without any variable.
//on line 2 the result will b undefined because the asssignment dpes ot accour until line three.
// but if you either the let or onst keywords to declare a variable , this same code will throw an error
function myFunc() {
    console.log(greeting);
    let greeting = 'hello world';

}

myFunc(); // reference error: greeting is notb defined




//let/const do host but do not initialized
// in case og var do host and do initilized (undefined)



//Final coculsion
/* Hostion:
let, const, var are all hosted process
(whats means they go upper and declare in thetopof the scope)

initialisation
- var go also through the initial process, and get initial value of undefined

- while let, const didnot go throw the initial process, so their value are still inaccessible, athoughthey so in shortly

hosting process - var , let, const
initialisation process - var
*/