const car = {
  name: "BMW",
  color: "blue",
  year: 2021,
}

const prop = "name"
const {[prop]: removed, ...rest} = car
const {name, ...restOfTheObj} = car

console.log(rest)
console.log(removed)
console.log(restOfTheObj)
