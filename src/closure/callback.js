// Callback with closures
const callbackFn = () => {
  let i = 0
  return () => {
    console.log("click", ++i)
  }
}

const anotherFn = fn => {
  fn()
  fn()
  fn()
  fn()
}

anotherFn(callbackFn())

const listener = val => {
  console.log(val)
}

const broadcaster = fn => {
  fn(1) // 1
  fn(2) // 2
  fn(3) // 3
}

console.log(broadcaster(listener))
