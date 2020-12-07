// Closures!
const foo = () => {
  console.log("I am foo")
  let a = 10
  const bar = () => {
    let b = 20
    console.log("I am bar")

    const baz = () => {
      console.log("I am Baz")
      console.log(a + b)
    }
    baz()
  }
  bar()
}

foo()
