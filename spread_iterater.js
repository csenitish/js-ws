// marge opration

var dd = [10, 20, 30];
//undefined
var ee = [90, 100, 120];
//undefined
var mm = [dd, ee];
//undefined
var k = [];
for (var i of dd) { //has next check
    // here iterator uses , starting and ending point not avilable 
    // otherwise i am using for loop(when known starting and ending)
    k.push(i);
}
for (var j of ee) {
    k.push(j);
}
//6
k;
//(6)[10, 20, 30, 90, 100, 120]
mm;
//(2)[Array(3), Array(3)]
mm[0];
//(3)[10, 20, 30]
mm[0][0];
//10
k[0];
//10


var f1 = [...dd, ...ee]; //spread opration (ES6) variable length arguments
//undefined
f1;
//(6)[10, 20, 30, 90, 100, 120]



var f1 = [...dd, ...ee, ...[90, 1000, 2000]];
//undefined
f1;
//(9)[10, 20, 30, 90, 100, 120, 90, 1000, 2000]




// best use -  forEach function
dd.forEach(function() {
    k.push(j);
})