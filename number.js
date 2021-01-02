// number 0-9 , NaN , Infinity
//NaN,
//NaN + NaN = ? , answer is NaN

y = y / "amit"; //NaN , NaN represent an invalid math opration happen an number
isNaN(y); // true , isNaN means y is NaN? then answer true

x = 10 + "amit"; //"10amit"  , concat
//const array1 = ['a', 'b', 'c'];
//const array2 = ['d', 'e', 'f'];
//const array3 = array1.concat(array2);
// expected output: Array ["a", "b", "c", "d", "e", "f"] 

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
isNaN(x); //true
isFinite(x); // false  , x is not finite

//infinity

e = 100 / 0; // infinity
isFinite(e); // false
'Amount is ' + e; // "Amount is Infinity"
'Amount is ' + (isFinity(e) ? y : 0); // "Amount is 0"


//parseint() , use of typecast  
//insert value in text box (x.value), and they became a string, 

var d = "1000"; // string
parseInt(d); // 1000