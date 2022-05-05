interface A {
    someVariable: number
}

interface B {
    someVariable: number
}


interface C {
    someVariable: number
    someVariable2: number
}


let a: A = { someVariable: 1 }
let b: B = a

let c: C = a

// Interfaces
interface Profile {
    readonly name: string
    age?: number
}

let profile: Profile = {
    name: 'Saleem'
}

// Index Signature
interface AA {
    someProps: string
    [key: string]: number | string
}

const aa: AA = { someProps: 'abc' }
aa.x = 1
aa.y = 2

// Call Signature
interface Sum {
    (a: number, b: number): number
    someProps: string
}

const sum: Sum = (a, b) => a + b
sum.someProps = 'xyz'

// Extending Interfaces
interface ParentA {
    x: string
}

interface ParentB {
    y: string
}

interface ParentC {
    z: string
}

interface Child extends ParentA, ParentB, ParentC {

}

let child: Child = { x: 'x', y: 'y', z: 'z' }