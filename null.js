// Null means object is absent (no object reference),

var obj = null; //

typeof object; //object (no address)

typeof null; //object

100 + undefined; // NaN
//undefined + any mathematics opration is always give NaN

100 + null; // 100 in case of arithmetic conversion on null, the value consider as 0
// null + any mathemmatics opration then null is always zero. 


// undefined have no any type but null type of  object
undefined == null // true
null == undefined //ture  , 
    // == do type coercion then compare ( in c++/c/java (strict progrmming) tell type conversion and in dynamic programing type coercian )
    // null type coercion in undefined


undefined === null // false
null === undefined // false
    // === do type checking