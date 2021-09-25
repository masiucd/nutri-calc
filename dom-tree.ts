export class N {
  children: N[]
  constructor(public key: string) {
    this.children = []
    this.key = key
  }
  addChild(key: string): N {
    const newChild = new N(key)
    this.children.push(newChild)
    return newChild
  }
}

type Fn = (node: N, level: number) => void

class DomTree {
  root: null | N

  constructor() {
    this.root = new N("DOM")
  }

  print() {
    let result = ""
    const helperFn = (node: N, level: number) => {
      result += result.length === 0 ? node.key : `\n${" ".repeat(level * 3)}${node.key}`
    }
    this.traverse(this.root!, helperFn, 0)
    return result
  }

  traverse(node: N, fn: Fn, level: number) {
    fn(node, level)
    if (node.children.length > 0) {
      node.children.forEach(node => {
        this.traverse(node, fn, level + 1)
      })
    }
  }
}

const tree = new DomTree()
const nav = tree.root?.addChild("nav")
const list = nav?.addChild("ul ")
list?.addChild("li --- 1 ")
list?.addChild("li --- 2 ")
list?.addChild("li --- 3 ")
tree.root?.addChild("footer")
const main = tree.root?.addChild("main")
const h1 = main?.addChild("h1 -- hello")
const p1 = h1?.addChild("p1 -- welcome")
p1?.addChild("p2 -- how are you")

const x = tree.print()
console.log(x)
