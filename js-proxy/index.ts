const person = {
  name: "bob",
  age: 45,
}

const handler: ProxyHandler<any> = {
  set: (obj: typeof person, prop: keyof typeof person, value: any) => {
    console.log("value", value, "")
    if (prop === "age") {
      if (typeof value !== "number") {
        throw new TypeError("Age must be a number")
      }
      person[prop] = value
    }
    return true
  },
}

const proxy = new Proxy(person, handler)
proxy.age = 22
console.log(proxy)
