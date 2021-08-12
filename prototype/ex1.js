const lie = {
  tate: "Bitter",
}
const cake = {
  __proto__: lie,
}

console.log(cake === lie)
console.log(cake.tate === lie.tate)
console.log(cake.hasOwnProperty("tate") === lie.hasOwnProperty("tate"))
