export const makeCount = () => {
  let count = 0
  return () => {
    count += 1
    console.log(count)
    return count
  }
}

// let c = makeCount()
// c()
// c()
// c()
// c()

export const createFn = () => (num: number) => num * 2

// const generateFn = createFn()
// const doubleTree = generateFn(3) // 6
// const doubleFive = generateFn(5) // 10
