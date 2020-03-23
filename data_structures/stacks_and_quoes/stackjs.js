class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length -= 1;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
// myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
// myStack.pop();
console.log(myStack.isEmpty());
// Discord
// Udemy
// google
