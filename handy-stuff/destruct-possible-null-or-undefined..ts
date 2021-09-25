const theThing = {
  nested: undefined,
}

const {a, b} = theThing?.nested ?? {a: 1, b: 2}

console.log("a", a)
console.log("b", b)
