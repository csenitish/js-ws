//currying is a transformation of functions that translates a function from callable as f (a, b, c) into callable as f(a) (b) (c)
//currying does not call a function. it just transforms it
function makeSuperHero(name) {
    return function(powers) {
        return function(limattions) {
            return name + "" + powers + "" + limattions;
        }
    }
}

makeSuperHero('iro man')('eng')(man);
// "iron man eng man"



function show() {
    var x = "Hi";
    return function() {
        var y = "Ok";
        return function() {
            return "Hello" + x + y;
        }
    }
}
// undefined
show()()();
//"HelloHiOk"