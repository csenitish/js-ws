//undeined gives undefine value and undeclare variables
// undefined have no any type but null type of  object

var g1;
typeof g1; //undefined
typeof g2; //undefined still variable is not delare even in case of arithmetic conversion on undefined , no vale converrsion happens
g2; // reference error g2 is not defined
// treatment
try {
    g2;
} catch (e) { // here e is  any 
    console.log('No Var Found ', e); // here is any
}
// No Var Found Refrence error g2 is not defined





/////////////////////////////////////////////////

//undeclare variable gives u the reference error