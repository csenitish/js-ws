function add(x, y) {
    return x + y;
}
//undefined

add(100, 200);
// 300
add(100); // 100 + undefined = NaN
// NaN

add();
//NaN


//tretment
//default value    , ES6
function add(x = 0, y = 0) {
    return x + y;
}
//undefined
add(); //0+0=0
//0

add(10); //10+0=10
// 10




//old method
function add(x, y) {
    x = x || 0; // truthy and falsy testing
    y = y || 0;
    return x + y;
}
//undefined

add();
//0
add(10);
//10

//truthy and falsy

// truthy are - "any", 1-9, {key:value},1-9, true, must have defined type

// falsy are - " ", 0, null, NaN, false, undefined


myName = "";
if (myName) {
    console.log("Truthy Name is There");
} else {
    console.log("Falsy Name is Not There ");
}


//Falsy Name is Not There