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

> Scope is the rules in any programing language for any given line of code, what data will you have access to.

You can see scope as gates/guards for your code, that what logic goes inside the gate will just stay in the scope.
With that it does not mean that you can get access to the outer scope and use some values ore mutate it from the inner scope, remember that!

<!-- - [This](#this)
- [Functional Programing](#fp)
  - [Curried]("#curried")
  - [Compose]("#compose") -->
