"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Null and undefined
let n = null;
let u = undefined;
let someNumber = null;
function toTitleCase(text) {
    if (text) {
        return text[0].toUpperCase() + text.substr(1);
    }
}
console.log(toTitleCase('hellow'));
toTitleCase(null);
const myObj = new Map();
// Void
function log(message) {
    console.log(message);
}
// Array
let arr1 = ['a1', 'a2'];
let arr2 = arr1;
// Tuple
let tuple = ['hello', 123];
// Enum
var Colors;
(function (Colors) {
    Colors["Red"] = "r";
    Colors["Green"] = "g";
    Colors["Blue"] = "b";
})(Colors || (Colors = {}));
const favColors = Colors.Red;
console.log(Colors.Red, Colors.Green, Colors.Blue);
// Any
let ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
// Type Assertions
const email = document.getElementById('email');
if (email) {
    email.addEventListener('change', (e) => {
        const input = e.currentTarget;
        console.log(input.value);
    });
}
