## Object create

`Object create` wil always give us a empty object back, what is does is that it will have some hidden properties. Those properties will be the object that you pass in as a argument.

```ts
interface Foo {
  name: string
  isCool: boolean
}
export const foo: Foo = {
  name: "bob",
  isCool: true,
}

const bar = Object.create(foo)

console.log(bar) // {}
console.log(foo) // {name:"bob", isCool: true}
console.log(bar.__proto__) // {name:"bob", isCool: true}
```

<img src="oop-ts.svg">
