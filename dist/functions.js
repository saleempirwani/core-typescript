"use strict";
// Functions (optional and default parameters)
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
// Unknown number of arguments
function sumEverything(...number) {
    return number.reduce((res, num) => res + num, 0);
}
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
