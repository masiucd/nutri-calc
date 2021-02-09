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

const fib = (n: number): number => {
  if (n <= 2) return n
  return fib(n - 1) + fib(n - 2)
}

const fnWrapper = (fn: Function) => {
  const cache = new Map<number, number>()

  return (n: number) => {
    if (cache.get(n)) {
      return cache.get(n)
    } else {
      cache.set(n, fn(n))
      return fn(n)
    }
  }
}

const identity = <T>(n: T): T => n
const lower = (s: string): string => s.toLowerCase()

const makeCharCount = (s: string) => {
  const obj: Record<string, number> = {}
  for (let char of s) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1)
  }

  return obj
}

function containsDuplicate(nums: number[]): boolean {
  const numCount: Record<string, number> = {}

  for (const n of nums) {
    if (!numCount[n]) {
      numCount[n] = 1
    } else {
      numCount[n]++
    }
  }

  return Object.values(numCount).some(x => x > 1)
}

function plusOne(digits: number[]): number[] {
  // get the last num in the list
  // increment the num with one
  // replace the last num with the new num
  const xs = [...digits]
  const last = xs.pop()!
  xs.push(last + 1)
  return xs.map(x => (x > 9 ? x.toString().split("").map(Number) : [x])).flat()
}

console.log(plusOne([1, 2, 3])) // [1,2,4]
console.log(plusOne([0])) // [1]
console.log(plusOne([9])) // [1,0]
