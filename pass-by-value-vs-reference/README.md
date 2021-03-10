# Pass by value vs pass by reference

All arguments you pass to a function in javascript that is a primitive [`numbers` `strings` `boolean` `undefined` `symbol` `null` ] , type will be passes as a value. There is no pass by reference in `JavaScript`.
What this mean is that if you pass a `primetive` type as a argument to a function and change it inside the function body. The value will be the same after returning it.

```js
const foo = a => {
  a = 10
}
let x = 1
foo(x)
// x is still number 1
```

So what about non primitive types like `Objects` for example?

What when I pass a object tto a function does not I also pass a reference to that object?
That is correct, in one way at least. But let me explain.

Whats you actually doing here is that you pass a reference by value, yeah that's right, remember that farce.
`Pass a reference by value`, you will hear it a lot when working with javascript.

The parameter you pass in not the object itself it is reference to that object and that reference get passed in by value.
