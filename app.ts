export const anagram = (s1: string, s2: string) => {
  const map: Map<string, number> = new Map()

  for (const char of s1) {
    if (!map.has(char)) {
      map.set(char, 1)
    } else {
      let current = map.get(char)!
      map.set(char, current + 1)
    }
  }

  for (const c of s2) {
    if (!map.has(c)) return false
    let current = map.get(c)!
    map.set(c, current - 1)
  }

  return true
}

const a: any = { name: "bob" }
const c: any = { age: 99 }
function foo(b: any) {
  b.age = c.age
}

foo(a)
console.log(a)
console.log(c)
