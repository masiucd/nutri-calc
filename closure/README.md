## Closures <a name = "closures"></a>

Closures! Probably the most powerful think that happened to any programing language that have closures.
You probably used closures without even knowing it. If you have used higher order functions like `Array.prototype.map` or `Array.prototype.filter` you are using a closure.
I like to visualize a closure like a memory for out functions.

**Note!**

- When our function get called we create a live store data, local memory for our function execution context. - When the function is done, it's local memory gets garbage collected except the return value.
- But what if our functions could hold on data between executions?
- Aha! `Closures`

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

#### Call back function <a name = "cb"></a>

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

## functional programing <a name = "fp"></a>

Benefits/Downsides with Javascript is that you can write in different kind of programing paradigms, we have the object oriented approach with `prototypes` that linking to each other, this how classes in javascript works under the hood, remember that classes does not work how they do in languages like `java` or `c++`.
We have a straight imperative approach where the code like almost like pure `c` code hehe, of course without the pointers and types but the logic look similar.
Then we have my favorite the `functional` approach, where we try to write and use pure functions, re use them, compose them to build our application. Like in a traditional `OOP`
approach we are relaying on inheritance while in `FP` we compose our functions.

#### Curried <a name = "curried" ></a>

**Where curried functions can be useful in your front application**
You could pre-load a function with values that you then can control via the last function, depending what you want to do. In react his could be for example sending a loaded function with values as a prop and and receiving it in the child component to control what you want to do with those values.
This was a real light bulb moment for me, when I realized how powerful curried functions are and how can use them in a useful way.
This is also so called `partial applications` just that we are using 2 parameters in the first function.

**a simple example with vanilla js**:

```ts
let count = 0
const addListenerFn = (selector: string, eventType: string) => (listener: () => void) => {
  const element = document.querySelector(selector) as HTMLElement
  element.addEventListener(eventType, listener)
}

const incrementBtn = addListenerFn("#increment", "click")
const decrementBtn = addListenerFn("#decrement", "click")
const countEl = document.querySelector("#count") as HTMLHeadingElement

const renderCount = () => {
  countEl.innerHTML = `<span>${count}</span>`
}

incrementBtn(() => {
  count++
  renderCount()
})

decrementBtn(() => {
  count--
  renderCount()
})
```
