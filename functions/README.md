## Functions <a name = "functions"></a>

- [Functions](#functions)
  - [Call Stack](#call-stack)
  - [Higher Order Functions](#higher-order-functions)

Functions in `Javascript` is so called `first class objects`.

They are treated as any object in `JS` and can be passed around like any value in `JS`.

- Pass function as a argument
- Assigned to variables and properties of other objects
- Return as values from functions

Code we save `(define)` functions and can use `(call)/invoke/run` later with a function name.

**Execution context**
Created to run the code of a function - has 2 parts:

- Thread of execution
- Memory

As soon we create a function we call like a separate program inside the function body that will have it's own local memory. Thar local memory will not be created until we `call/invoke` our function.
Local memory also cold `aka` `state`.

Closure example using `Javascript` `Rust` and `Go`

```go
package main

import "fmt"


func makeCount() func() int {
	count := 0

	return func() int {
		count++
		fmt.Printf("%d\n",count)
		return count
	}
}

func main() {

	var count = makeCount()
	count() // 1
	count() // 2
	count() // 3
	count() // 4
}
```

```rust
  fn main() {
    let mut c = 0;

    // Closure ||
    let mut inc = || {
        c += 1;
        println!("{}", c);
    };

    inc(); // 1
    inc(); // 2
    inc(); // 3
    inc(); // 4
}
```

```ts
export const makeCount = () => {
  let count = 0
  return () => {
    // Closure
    count += 1
    console.log(count)
    return count
  }
}

const c = makeCount()
c() // 1
c() // 2
c() // 3
c() // 4
```

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
