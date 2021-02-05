# JS the hard parts

## Table of Contents

- [About](#about)
- [Functions](#functions)
  - [Call Stack](#call-stack)
  - [Higher Order Functions](#higher-order-functions)
- [Scope](#scope)
- [Closures](#closures)
  - [Callback](#cb)
  - [Function wrappers](#fn-wrappers)

## Functions <a name = "functions"></a>

Code we save `(define)` functions and can use `(call)/invoke/run` later with a function name.

**Execution context**
Created to run the code of a function - has 2 parts:

- Thread of execution
- Memory

As soon we create a function we call like a separate program inside the function body that will have it's own local memory. Thar local memory will not be created until we `call/invoke` our function.

```ts
// n = parameter
export const double = (n: number) => n * 2
// our own execution context
// local memory will be created
// our own mini program inside the global program
const res = double(10) // 10 = argument
```

**Why do we even use or have functions?**
We don't want to rewrite our code/logic we want a way to write as efficient code and optimal programs as possible. With functions we can compose them and make them more powerful, this topic is wide and we generally will come into `FP`Functional Programming, at least the basics.
But with one word `DRY` `Don't repeat yourself` functions help us to solve this problem.

Let's show an example.

This function will not be as useful as it could be. Why?
What it does is only return 100 no matter what.

```ts
export const tenSquared = () => {
  return 10 ** 2
}

console.log(tenSquared())
```

Let's make it more flexible.
We can generalize the function to be more useful with giving it a `parameter`.
Now we could square any number and perhaps also rename the function.

```ts
const square = (n: number): number => n * n
```

This also make it to a pure function. What ever we add as a argument we will always get back the expected result.

This is a example to show how powerful functions are when the can be passed by value like any other data type in javascript. A functional way of preloaded our function and can pass in whatever array to double all individual number in the list.

```ts
export const map = (fn: Function) => <T>(list: T[]): T[] => {
  const res = []
  for (let v of list) {
    res.push(fn(v))
  }

  return res
}

const xs = [1, 2, 3]

const double = (x: number) => x * 2

// now we can double whatever list we provide `(Partial application)`
const doubleList = map(double)
doubleList(xs) // [1,4,6]
doubleList([10, 20, 30]) // [20,40,60]

const incrementList = map(add)
incrementList(xs)
incrementList([10, 20, 30])
```

<hr/>

#### Call Stack <a name = "call-stack"></a>

As soon we run our function i `Javascript` we add it to the call stack.
As soon the function gets returned we pop out the function from the call stack `FILO`.

As soon we run our `JS` code the global execution will be placed at the bottom of the call-stack.

- `Javascript` keeps track of what function currently running `(where our thread of execution currently are)`.

- Run a function, and we add it to the call stack.

- Finish running the function - `Javascript` removes it from the call-stack `(pop())`

- By following `FILO` _First in last out_ we remove the function that is on the top and go downwards.

<hr/>

### Higher Order Functions <a name = "higher-order-functions">

Any function that takes in a function or returns one out, automatically is a higher order function.

For example:

Difference from `HOF` and a `callback` function is that, higher order function is a function that takes
in a function is our higher order function.

Callback function in this case is the function we insert.

```js
const pureDoubleList = (arr, fn) => {
  // fn = HOF
  const xs = []
  for (let i = 0; i < arr.length; i++) {
    xs.push(fn(arr[i]))
  }
  return xs
}

const double = input => input * 2
const result = pureDoubleList([1, 2, 3], double) // double here is the callback
```

<hr/>

## Scope <a name = "scope"></a>

To really understand how `Javascript` works and to become a really good `Javascript` developer we need to know what is scope and how it works, specially in `Js`.
Like [_Kyle Simpson_](https://github.com/getify) says `scope is where we look for things`.
So what are we looking for actually and

all the variables in `Js` is either receiving the assignment of some value (`string`, `integer`, `boolean`) ore we are retrieving the value from the variable.
so for example.

```js
const foo = "hello master Marcell!"
console.log(foo)
```

It is important to get the correct mental model as how `Js` works. `Js` is not a regular scripting language that you would probably think that reads the code from top all the way down. Actually some people says that `Js` is no longer a scripting language and that it fill the credentials to be a so called a `compiled` language or at leas **parsed**.
How come you would say?

How come that Javascript well through a error(`syntax error`) on line 10 before going further to line 16 for example. Javascript has to go trough some process before it gets executed.
The reason why it is important to change the mental model of `Js` is so we can easy understand how the scope actually works. We want to think like a compiler rather then a human, `marble` sorting, yes think as different buckets with different colors where we put different marbles in the buckets, that's how the `Js` complier works and how we could think like that to get a better grasp of the compile life-cycle for Javascript.
So the buckets are simply our function scope and bracket scope like a `if` statement for example, so called blocks.

## Closures <a name = "closures"></a>

Closures! Probably the most powerful tool you can use if you ask me.
You probably used closures without even knowing it. If you have used higher order functions like `Array.prototype.map` or `Array.prototype.filter` you are using a closure.

```js
// the x is the inner function, we creating/using a closure
// the outer function will not have access to the inner

const xs = [1, 2, 3, 4, 5]

xs.map(x => x * 2) // [1,4,6,8,10]

xs.map(function (x) {
  return x * 2 // [1,4,6,8,10]
})

xs.filter(x => x % 2 == 0)

xs.filter(function (x) {
  return x % 2 === 0
})
```

Closure is combination of different function together, with references to its surrounding state (the lexical environment)
Closure give you access to a outer function score from a inner scope. The outer scope can not access the inner scope.

Think from the middle out, almost like `function composition` works.

The example below, when we call res, it wall always remember the first value that gets passed in, `x`. So no matter how many times we call the res with the second value `y` it will always remember what it `x` the first value.

```js
const handleAdd = x => {
  const add = z => {
    return x + z
  }

  return add
}

const res = handleAdd(10) // the 10 value will be set up to remember the initial call
res(20) // 30
res(10) // 20
```

Closures is very useful when we want to design/use the module pattern in javascript. If you coming from a more `oop` background using `java` ore perhaps `c++` you will be used with using classes. With the module pattern you could get a similar functionality with private and public values, just like you would in traditional `oop` languages

```js
function module(name) {
  // PUBLIC
  const speak = () => {
    console.log(name)
  }

  // PRIVATE
  const toUpper = str => {
    return str.toUpperCase()
  }

  // PUBLIC
  const shout = () => {
    console.log(toUpper(name))
  }

  return {
    speak,
    shout,
  }
}

const x = module("marcell")

x.speak()
x.shout()
x.toUpper // will not work because we don't have access to it
```

What gets return in the object is what we will be able to access sing the `x` constant.

Closures will bend your brain trust me, but they are so powerful, and probably the first thing you should focus on after you are comfortable with variables, loops, functions etc.
A good way to start is to read [Kyle Simpsons](https://github.com/getify) books [You don't know JS](https://github.com/getify/You-Dont-Know-JS)

## Call back function <a name = "cb"></a>

A callback is simply when you pass a function as a argument into another function, a good example of this when you use the `DOM` api and listen for some kind of event.

The second argument is our callback

```js
document.addEventListener("click", () => {
  console.log("click")
})
```

We could also write it like this to make it more clear:

```js
const checkClick = () => {
  console.log("click")
}
document.addEventListener("click", checkClick)
```

Here is a example of how we can combine closures and callback together:

```js
const callbackFn = () => {
  let i = 0
  return () => {
    console.log("click", ++i)
  }
}

const anotherFn = fn => {
  fn()
  fn()
  fn()
  fn()
}

anotherFn(callbackFn())
```

## Function wrappers <a name = "fn-wrappers"></a>

To really handle closures in a masterly way and to see the power of closures it is helpful to think in a `functional programing` way.
To wrap other functions in other functions and composing them is a true power of functional programing and closures.

Take this code snippet for example.

all function expects the same type of arguments (pattern, curried function)
that let you combine different functions because you will know what is expected, it's like small puzzle pisces that you want to fit anywhere.
See your functions as lego blocks where you know that each function takes in one argument and returning a new function using [curring](https://en.wikipedia.org/wiki/Currying).
You could easily compose ore pipe different functions with different behaviors.
And with closures we can access the lexical scope above us.

```js
;(() => {
  const configTime = (time = 500) => fn => {
    const id = setTimeout(fn, time)

    return () => {
      clearTimeout(id)
    }
  }

  const a = configTime(2000)

  const first = a(() => {
    console.log("I am A, and are so slow")
  })

  first() // a will never run!

  const b = configTime(500)(() => {
    console.log("I am B and will come before A")
  })

  const c = configTime(200)(() => {
    console.log("I am C and will come before both A and B")
  })

  const crateInterval = time => fn => {
    const id = setInterval(fn, time)

    return () => {
      clearInterval(id)
    }
  }

  const oneSecond = crateInterval(1000)(() => {
    console.log("hello there")
  })

  const clearOneSecond = oneSecond

  const addListener = selector => event => listener => {
    const element = document.querySelector(selector)
    element.addEventListener(event, listener)

    // Our clean up function
    return () => {
      element.removeEventListener(event, listener)
    }
  }

  const buttonElement = addListener("#btn-click")
  const clickButton = buttonElement("click")(() => {
    console.log("I got clicked and stopped")
    clearOneSecond()
  })

  const merge = (broadcaster1, broadcaster2) => listener => {
    const cancel1 = broadcaster1(listener)
    const cancel2 = broadcaster2(listener)

    // clean up!
    return () => {
      cancel1()
      cancel2()
    }
  }

  const btn2 = addListener("#btn-click2")
  const addClickListener = btn2("click")

  const twoSecond = crateInterval(2000)
  const clickOrTick = merge(addClickListener, twoSecond)

  const run = clickOrTick(() => {
    console.log("click or tick")
  })

  const cancelClickOreTick = addListener("#cancel-btn")("click")(() => {
    const cancelRun = run
    cancelRun()
  })
})()
```
