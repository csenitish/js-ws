//wrapper type run time primitive convert in object
//String , Number, Boolean
var x = "hello"; //string
x.toString; //String , wrapper type only run time
//autoboxing

var x = "hello";
typeof x; //"string"      normal string          primitive
var y = new String("hello");
y; //String {"hello"}
typeof y; //"object"

var z = String("hello"); // without new          primirtive
typeof z; //"string"    normal string

var x = 100; // literal means value type