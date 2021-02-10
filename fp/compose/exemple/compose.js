const pipe = (...fns) => initialValue => fns.reduceRight((value, fn) => fn(value), initialValue)

const double = x => {
  console.log(x * 2)
  return x * 2
}
const add = x => {
  console.log(x + 1)
  return x + 1
}

;(() => {
  let i = 0
  document.querySelector("#btn-click").addEventListener("click", () => {
    i++
    pipe(double, add)(i)
  })
})()
