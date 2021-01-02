//to represet integers larger than 2 to the 53rd power minus 1 in javascript we can use the BiggInt object torepresent the value

var h1 = BigInt(1000000000000000);
h1; // 10000000000n
typeof h1; // "bigit"

//h1 + 1000n; // 100000001000n


var i = 10000;
h1; // 10000000000n
h1 + i; // typeerror , cannot mix bigint and otherr type

h1 + BigInt(i); // 100000000010000n
//ES2020

//in js, a BigInt is not the same as a normal number.
//its distinguished from a normal number by having an n at the end of the number.
//we can define a bigint with the bigint factory function
const bigint = BigInt(1);
console.log(bigint);