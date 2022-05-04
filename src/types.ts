import { isTupleTypeNode } from "typescript";

// Null and undefined
let n: null = null;
let u: undefined = undefined

let someNumber: number = null;

function toTitleCase(text: string | null) {
    if (text) {
        return text[0].toUpperCase() + text.substr(1)
    }
}

console.log(toTitleCase('hellow'))
toTitleCase(null)

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map()

// Void
function log(message: string): void {
    console.log(message)
}

// Array
let arr1: string[] = ['a1', 'a2']
let arr2: Array<string> = arr1

// Tuple
let tuple: [string, number] = ['hello', 123]

// Enum
enum Colors {
    Red = 'r',
    Green = 'g',
    Blue = 'b'
}

const favColors: Colors = Colors.Red
console.log(Colors.Red, Colors.Green, Colors.Blue)

// Any
let ANY: any;
ANY = 'a string'
ANY = 1
ANY = true

// Type Assertions
const email = document.getElementById('email')
if (email) {
    email.addEventListener('change', (e) => {
        const input = e.currentTarget as HTMLInputElement
        console.log(input.value)
    })
}