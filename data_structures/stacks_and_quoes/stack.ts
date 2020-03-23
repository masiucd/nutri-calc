interface INode {
  data: number | null;
  next: INode | null;
}

class Node {
  data: number | null;

  next: INode | null;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  top: INode | null;

  bottom: INode | null;

  size: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  peek() {
    return this.top;
  }

  push(data: number) {
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.size += 1;
    return this;
  }

  pop() {
    if (!this.top.next) return undefined;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.size -= 1;
    return this;
  }

  isEmpty() {}
}

const s = new Stack();
s.push(5);
s.push(2);
s.push(3);
s.pop();
s.pop();
s.pop();

console.log(s);
