export const map = (fn: Function) => <T>(list: T[]): T[] => {
  const res = []
  for (let v of list) {
    res.push(fn(v))
  }

  return res
}

const xs = [1, 2, 3]

const double = (x: number) => x * 2
const add = (x: number) => x + 1

// now we can double whatever list we provide `(Partial application)`
const doubleList = map(double)
const incrementList = map(add)
incrementList(xs)
incrementList([10, 20, 30])
