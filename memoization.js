/* memoization is an optimisation techniqe that seeds up applications by storing the results of expensive functions call
and returing the cached ewsult when the same input occur again. */

// need for speed

var cache = {};

function memo(num) {
    if (cache[num]) {
        console.log('Value come from the Cache ', cache[num]);
    } else {
        for (let i = 1; i <= 100000; i++) {
            for (let j = 1; j <= 10000; j++) {}
        }
        cache[num] = num ** 3;
        console.log('Not from Cache ', num ** 3);
    }
}
undefined
cache; {}
memo(9);
// Not from Cache 729

memo(9);
// 4 Value come from the Cache 729
undefined
memo(20);
// 11 Not from Cache 8000
undefined
memo(20);
// 4 Value come from the Cache 8000
undefined
//cache; { 9: 729, 20: 8000 }