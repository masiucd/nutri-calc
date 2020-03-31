interface INode {
  left: INode | null | any;
  right: INode | null | any;
  data: number | null | any;
}

class Node {
  left: INode | null | any;

  right: INode | null | any;

  data: number | null | any;

  constructor(data: number) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class Bst {
  root: INode | null;

  constructor() {
    this.root = null;
  }

  insert(data: number) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (data < currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(data: number): boolean | INode {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else if (data === currentNode.data) return currentNode;
    }
    return false;
  }
}

const bst = new Bst();
bst.insert(6);
bst.insert(2);
bst.insert(1);
bst.insert(62);
console.log(bst.find(12));
console.log(bst.find(62));
