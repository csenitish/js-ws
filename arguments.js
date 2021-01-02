function test() {
    console.log(arguments.length); //  old style
}
//

test(10, 20);
// 2


function disp(...arg) { //... create Array with function
    console.log(arg);
    conssole.log(arg instanceof Array);
}

//
disp(10, 20, 30);
//(3) [10, 20, 30]
// true

//for example

function disp(...arg) { // comes on ES6, rest parameter
    console.log(arg);
    console.log(arg instanceof Array);
    console.log(arguments instanceof Array);
}

//
//(3) [10, 20, 30]
// true
// false



function disp(...a) {
    console.log(a);
    console.log(a instanceof Array);
    console.log(arguments instanceof Array);

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
//undefined


disp(10, 20, 30);
//(3) [10, 20, 30]
//true
//false
//10
//20
//30



function disp(...a) {
    console.log(a);
    console.log(a instanceof Array);
    console.log(arguments instanceof Array);
    a.forEach(function(ele) {
        console.log(ele);
    });
    /*for(var i =0; i<arguments.length; i++){
     console.log(arguments[i]);
    }*/
}
//disp(10, 20, 30);
//(3) [10, 20, 30]
//true
//false
//10
//20
//30