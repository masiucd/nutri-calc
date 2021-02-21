## Asynchronous JS <a name="asynchronous-js">

- `JS` is single threaded (one command at a time)
- Synchronously executed (each line is run in order the code appears)

Javascript is a single threaded synchronies programing language, but still a so powerful and one of the most popular languages in the world. NBut how can we write asynchronous code in Javascript like it would be an multi threaded language.

just a basic example, which one comes first?

```ts
export function sayHi(s: string) {
  console.log(`Hi ${s}`)
}

setTimeout(sayHi, 1200)
console.log("Yoo")
```

result would be:

```bash
  Yoo
  Hi undefined
```
