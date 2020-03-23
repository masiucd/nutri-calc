class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Q {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    return this.first;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this;
  }

  pop() {
    if (!this.first) return undefined;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return this;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const myQ = new Q();
myQ.push('apple');
myQ.push('mango');
myQ.push('orange');
myQ.pop();
myQ.pop();
// myQ.pop();
console.log(myQ.isEmpty());
