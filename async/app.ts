export function sayHi(s: string) {
  console.log(`Hi ${s}`)
}

setTimeout(sayHi, 1200)
console.log("Yoo")
