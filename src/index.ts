import * as multipleModule from "./multiply";

const a = 2
const b = 3

console.log(`${a} * ${b} = ${multipleModule.default(a, b)}`)
multipleModule.multipleByTwo(2)