// Functions (optional and default parameters)
function sum(a: number, b: number): number {
    return a + b
}

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b

// Unknown number of arguments
function sumEverything(...number: number[]) {
    return number.reduce((res, num) => res + num, 0)
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
    if (args.length === 2) {
        return args[0] * args[1];
    }

    return Math.pow(args[0], 2)
}