type MathFnType = (n: number) => number

export const double = (n: number) => n * 2
export const half = (n: number) => Math.floor(n / 2)

export const memoize = (fn: MathFnType = double) => {
  const cache = {}

  // closure!
  return (n: number) => {
    if (cache[n]) {
      console.log("reading from the cache ", n)
      return cache[n]
    } else {
      console.log("not in the cache so I will calculate the value")
      const res = fn(n)
      cache[n] = res
      return res
    }
  }
}

// const f = memoize(half)
// const f2 = memoize()
// console.log(f(10))
// console.log(f(10))
// console.log(f(20))
// console.log(f(10))
