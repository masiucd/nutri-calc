// Global scope = RED bucket
const name = "Marcell" // our marble , set to global scope

function greet() {
  // first function scope = BLUE bucket
  let name = "bob" // just a note! we are shadowing the global name variable
  return `Hello ${name}`
}

export function shout(s: string) {
  // second function scope = GREEN bucket
  let name = s.slice()
  return `HELLO ${name}!`
}

// console.log(greet())
// console.log(shout(name))
