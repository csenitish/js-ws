//Primitive, it actually store value insted of collection of value
//undefine, number, string, boolean, bigint, null, symmbol(use very rare from ES6)
//store value
//immutable Properties can’t be changed, added, or removed: like primitive



// in javscript , variale do not have types, based on value the type is assigned.



var ename; //no any output so show undefined
typeof ename; // undefined (internally undefined , no any default value)
ename = 100; // typeof ename > number
ename = "Nitish"; //typeof ename >string
ename = true; // tupeof ename >"boolean"





//primitives are not object, they have pure values, it does not attach any method, 
//it means no possible way to mutate the values, so thats why they are immutable.
//so if primitives not having any property or method attach any when we do .(dot) operator in front f numberr or string values,


//wrapper type run time primitive convert in object
//String , Number, Boolean
var x = "hello"; //string
x.toString; //String , wrapper type only run time
//autoboxing


//due to wrapper object, when you do 
//stringVar.toUpperCase(), it do autoboxing behind the scene
//now after conversion it is become
// mutable and it has acess to property ans methods, and once method call done it is becomme normal