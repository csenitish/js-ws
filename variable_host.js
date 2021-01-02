// when js compile all of your code, all variables using var are lifed to the top of ther scope, either on Functional scope or globale scope
// this is called hosting







// wrong method , only for testing
show();

function show() { // variable var z is hosted on top but not inisialze
    console.log("i am show", z);
    if (10 > 2) { // wrong method , only for testing
        var z = 1000; // var host
    }
    console.log("z is ", z);

}
//output : i am show undefined
//         z is 1000


//functions are also hosted at the top
show();

function show() {
    console.log("i am hosted");

}
//i am hosted
//<- undefined