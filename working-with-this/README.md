# This in Javascript

The `this` keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used:

- In a method, `this` refers to the owner object.
- Alone, `this` refers to the global object.
- In a function, `this` refers to the global object.
- In a function, in strict mode, `this` is `undefined`.

The `this` keyword can be hard to grasp about and to really understand what it refers to. It is a special keyword that is defined within functions and methods and its value is determined by the context in which a function is called.

There are 5 rules that you can follow to determine what the `this` keyword refers to:

1. **Global Context**: When `this` is not inside of a declared object, it will refer to the global object. In a browser, it will refer to the `window` object.
2. **Function Context**: When `this` is inside of a declared function, it will refer to the global object.
3. **Method Context**: When `this` is inside of a declared method, it will refer to the object that the method is a property of.
4. **Call/Apply/Bind (Explicit Binding)**: You can use the `call`, `apply`, and `bind` methods to explicitly set the value of `this`.
5. **Arrow Functions**: Arrow functions do not have their own `this` value. The value of `this` inside of an arrow function is the same as the value of `this` outside of the arrow function.

```javascript
// Global Context
console.log(this); // Window

function myFunction() {
  console.log(this);
}

myFunction(); // Window

// Method Context
const myObject = {
  myMethod() {
    console.log(this);
  },
};

myObject.myMethod(); // myObject

// Call/Apply/Bind (Explicit Binding)

function myFunction() {
  console.log(this);
}

const myObject = {name: "John"};

myFunction.call(myObject); // myObject

// Arrow Functions

const myObject = {
  myMethod() {
    const myArrowFunction = () => {
      console.log(this);
    };

    myArrowFunction();
  },
};

myObject.myMethod(); // myObject
```

The `this` keyword can be tricky to understand, but by following these rules, you can determine what the `this` keyword refers to in different contexts.
