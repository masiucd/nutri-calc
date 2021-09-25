const fruits = {
  apple: {color: "red", mass: 100},
  grape: {color: "red", mass: 5},
  banana: {color: "yellow", mass: 183},
  lemon: {color: "yellow", mass: 80},
  pear: {color: "green", mass: 178},
  orange: {color: "orange", mass: 262},
  raspberry: {color: "red", mass: 4},
  cherry: {color: "red", mass: 5},
}

interface Dict<T> {
  [k: string]: T
}

type FNMap = <T>(original: Dict<T>, key: string) => T
const mapDict = <T, U>(dict: Dict<T>, fn: any) => {
  const newDict: Dict<T> = {}
  for (const k in dict) {
    const value = dict[k]
    const transformedColor = fn(value)

    newDict[k] = transformedColor
  }
  return newDict
}

const transformFruit = (hash: Dict<string | number>) => {
  const newHash: Dict<string | number> = {}
  if (typeof hash["color"] === "string") {
    newHash["color"] = hash["color"].toUpperCase()
  }

  if (typeof hash["mass"] === "number") {
    newHash["mass"] = hash["mass"] * 2
  }
  return {
    ...hash,
    color: newHash["color"],
    mass: newHash["mass"],
  }
}

const toUpper = <T>(fruits: Dict<T>, a: string) => a

// console.log(mapDict(fruits,))
const res = mapDict(fruits, transformFruit)

console.log(res)
console.log(fruits)
