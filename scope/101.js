// Global scope = RED bucket
let name = "Marcell" // our marble , set to global scope

function greet() {
  // first function scope = BLUE bucket
  let name = "bob" // just a note! we are shadowing the global name variable
  return `Hello ${name}`
}

function shout(s) {
  // second function scope = GREEN bucket
  let name = s
  return `HELLO ${name}!`
}

console.log(greet())
console.log(shout(name))
