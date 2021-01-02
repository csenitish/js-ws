//memory devides in two segment 
//First is Heap And second is stack

function add(x, y) { // function is keyword, add is name, (x,y) is arguments or parameter
    return x + y;
}

//Heap , works on object (object, array, non primitives)
//(function add(x,y){return x+y;})

add(10, 20);

//stack (call stack) , when function run it will go inside the stack, 
//means function call goes in stack (add(10,20) ) + local variable(x,y)
//stack contains method calls and the local variables (local variables have may be value if they are primitives and they have may be  reference when they are non primitives )
//stack store local variables, primitives and function calls.
//