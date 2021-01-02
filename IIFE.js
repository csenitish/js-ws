//Immediately invoked function expression
// also called self invoked function
//globle variable do privent

(function() {
    console.log("I am a Function Expression ");
})();



(function(x, y) {

    var add = function() {
        return x + y;
    }
    var sub = function() {
        return x - y;
    }

    var mul = function() {
        return x * y;
    }
    return [add, sub, mul];
})(100, 200);

// output: (3) [ƒ, ƒ, ƒ]



var result = (function(x, y) {

    var add = function() {
        return x + y;
    }
    var sub = function() {
        return x - y;
    }

    var mul = function() {
        return x * y;
    }
    return [add, sub, mul];
})(100, 200);
undefined
result;
//(3)[ƒ, ƒ, ƒ]
result[0];
//ƒ() {
//   return x + y;
//     }
result[0]();

// 300
result[1]();
//-100
result[2]();
// 20000


//function closer 
//when you return a function and it remmember the scope, so it return a function and its return the scope

//////////////////////////////////////////////////
var e = (function(x, y) {
    //console.log("IIFE ");
    var add = function() {
        var z = x + y;
        return z;
    }
    var sub = function() {
        var z = x - y;
        return z;

    }
    return [add, sub];
})(100, 200);
undefined
e;
//(2)[ƒ, ƒ]
e[0]();
//300
e[1]();
// -100