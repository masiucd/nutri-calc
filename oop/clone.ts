let o = { a: 1, b: 2 }

let b = { a: 99, c: 129 }

let cloned = Object.assign(o, b)

console.log(o)
console.log(b)
console.log(cloned)

o = { a: 1, b: 2 }
b = { a: 99, c: 129 }
cloned = { ...o, ...b }
console.log(o)
console.log(b)
console.log(cloned)

export const p = () => {}
