# Proxy

A proxy in JS is not as a regular server proxy that you would think about.
With a `proxy` in Javascript we can change different behaver for an object.
It will return a new object and will not modify the original object.

## When can this be handy?

It is not so often us will use a `proxy` but when working with libraries and framework you want to set some kind of behaviors for a specific object, then it could be a handy tool.

_The handler is empty in this case so nothing special will happened._

```ts
const target = {
  name: "Bob",
  isCool: true,
}

const handler = {}

const proxy1 = new Proxy(target, handler)

console.log(proxy1)-- > { name: "Bob", isCool: true }
```

Let's add `get` method to our handler.
_The handler.get() method is a trap for getting a property value._

```js
const target = {
  name: "Bob",
  isCool: true,
}

const handler = {
  get: function (target prop,  receiver) {
    return "Tina"
  },
}

const proxy1 = new Proxy(target, handler)

console.log(proxy1.name) ---> Tina
```

```ts
const obj = {
  name: "Bob",
  isCool: true,
}

const handler = {
  get: function (target: typeof obj, prop: string, receiver: typeof obj) {
    return "I will decide what to return, Mohaha!"
  },
}

const proxy1 = new Proxy(obj, handler)

console.log(proxy1.isCool)
```

Let's make some rules for hour `proxy`. This is a good example when we want the developer to follow some kind of rule.

```ts
const obj = {
  name: "Bob",
  isCool: true,
  age: 21,
}

const handler = {
  get: function (target: typeof obj, prop: string, receiver: typeof obj) {
    if (prop === "name") return target.name
    if (prop === "isCool") return `${target.name} isCool`
    return "I will decide what to return, Mohaha!"
  },
}

const proxy1 = new Proxy(obj, handler)
```

```ts
const obj = {
  name: "Bob",
  isCool: true,
  age: 21,
}

type ObjType = typeof obj
type ObjKeys = keyof typeof obj

const handler = {
  get: function (target: ObjType, prop: ObjKeys, receiver: ObjType) {
    return prop in target ? target[prop] : "foo"
  },
}

const proxy1 = new Proxy(obj, handler)

console.log(proxy1.age)
```

```ts
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
```
