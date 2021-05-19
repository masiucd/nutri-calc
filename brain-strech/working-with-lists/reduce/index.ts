const capitize = (s: string) => s.slice(0, 1).toUpperCase() + s.slice(1)
const shout = (s: string) => s + "!!!"
const addSheBang = (s: string) => "!#" + s

const compose = (...fns: any[]) =>
  fns.reduce(
    (f, g) =>
      (...args: any[]) =>
        f(g(...args))
  )

interface Developer {
  name: string
  age: number
}
const ints = [1, 122, 99, 12, 334, 45, 62]

const isGreater = (n: number, comapreWith: number) => n > comapreWith
// filter with reduce
const filterInts = ints.reduce((box, int: number): number[] => {
  if (isGreater(int, 100)) {
    box.push(int)
  }
  return box
}, [] as number[])

const developers: Developer[] = [
  { name: "Greg", age: 23 },
  { name: "Linda", age: 41 },
  { name: "Mia", age: 29 },
]

// reduce to a single object
const reduceToObject = developers.reduce((obj, developer) => {
  return { ...obj, [developer.name]: developer.age }
}, {})

// map wiith reduce
const transformedDevs = developers.reduce((list: string[], developer: Developer) => {
  list.push(compose(capitize, shout, addSheBang)(developer.name))
  return list
}, [])

type Rating = "good" | "ok" | "nice"
const fruit: Record<string, Rating> = {
  banana: "good",
  strawberry: "good",
  kiwi: "ok",
  orange: "nice",
  grape: "ok",
  berries: "nice",
}

const onlyNiceFruits = Object.entries(fruit).reduce((fruiBasket, [fruit, rate]) => {
  if (rate === "nice") {
    return { ...fruiBasket, [fruit]: rate }
  }
  return fruiBasket
}, {})

const okayFruits = Object.keys(fruit).reduce((list: string[], fruitItem) => {
  if (fruit[fruitItem] === "good") {
    list.push(fruitItem)
  }
  return list
}, [])
