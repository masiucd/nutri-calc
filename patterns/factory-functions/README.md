# Factory functions

Factory functions is another way of how we can create functions with using function s in `Javascript`.

Working with keywords like `new` and `this` can be confusing since it does not have the same behavior like traditional `OOP` languages like `Java`.
I more functional approach is to use a `factory function` instead.

It works similar to the `module-pattern`, here is an example.

```ts
class Dog {
  private barf: string;
  constructor() {
    this.barf = "Woof";
  }

  barfing(): string {
    return this.barf;
  }
}

const snickers = new Dog();
// console.log(snickers.barfing());

// Factory function
const makeDog = () => {
  // This will be private
  const barf = "Woof";
  return {
    barfing: () => barf,
  };
};
```
