const firstDuplicate = (s: string) => {
  const store = new Map<string, boolean>()

  const list = s.split("")
  for (const char of list) {
    if (store.has(char)) return char
    if (!store.has(char)) {
      store.set(char, true)
    }
  }
  console.log(store)
}

const s = "abcdefghijklvf"

console.log(firstDuplicate(s))
