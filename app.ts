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

console.log(anagram("anagram", "anagrma"))
