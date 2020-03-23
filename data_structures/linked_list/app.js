class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   *
   * @param {string} data
   */
  insertFirst(data) {
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

  /**
   *
   * @param {string} data
   */
  insertLast(data) {
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

  showList() {
    const xs = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      xs.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return { nodes: xs, size: this.size };
  }

  /**
   *
   * @param {number} index
   */
  get(index) {
    let node = this.head;
    let counter = 0;
    while (index !== counter) {
      counter += 1;
      node = node.next;
    }
    return node;
  }

  /**
   *
   * @param {number} index
   * @param {string} data
   */
  insert(index, data) {
    if (index === 0) return this.insertFirst(data);
    const prevNode = this.get(index - 1);
    const newNode = new Node(data);
    const nodePointer = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nodePointer;
    this.size += 1;
    return this;
  }

  dropHead() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.size -= 1;
    return this;
  }

  /**
   *
   * @param {number} index
   */
  delete(index) {
    if (index <= 0) return this.dropHead();
    const prevNode = this.get(index - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    this.size -= 1;
    return this;
  }

  reverse() {
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

const ll = new LinkedList();
ll.insertFirst('apple');
ll.insertFirst('orange');
ll.insertFirst('banana');
ll.insertLast('mango');
ll.insert(1, 'grapes');
ll.delete(1);
ll.delete(0);
ll.reverse();
console.log(ll.showList());
