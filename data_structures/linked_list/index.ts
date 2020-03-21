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

class LL {
  head: INode | null;

  tail: INode | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  printNodes(): number[] {
    const xs: number[] = [];

    let currentNode = this.head;
    while (currentNode !== null) {
      xs.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return xs;
  }

  insertFirst(data: number): this {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }

  insertLast(data: number): this {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
    return this;
  }

  get(index: number) {
    let counter = 0;
    let currentNode = this.head;
    while (index !== counter) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index: number, data: number): this {
    if (index < 0 || index > this.size) return undefined;
    if (index === 0) return this.insertFirst(data);
    const newNode = new Node(data);
    const prev = this.get(index - 1);
    const pointer = prev.next;
    prev.next = newNode;
    newNode.next = pointer;
    this.size += 1;
    return this;
  }

  dropHead(): this {
    if (!this.head.next) {
      return undefined;
    }
    this.head = this.head.next;
    return this;
  }

  delete(index: number): this {
    if (index === 0) return this.dropHead();
    const prev = this.get(index - 1);
    const nodeToRemove = prev.next;
    prev.next = nodeToRemove.next;
    this.size -= 1;
    return this;
  }

  reverse(): this {
    if (!this.head.next) return this;
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLL = new LL();

myLL.insertLast(5);
myLL.insertLast(2);
myLL.insertFirst(88);
myLL.insert(2, 880);
myLL.insert(1, 122);
myLL.delete(1);
myLL.reverse();
console.log(myLL.printNodes());
