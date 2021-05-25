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
