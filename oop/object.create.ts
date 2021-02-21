interface Foo {
  name: string
  isCool: boolean
}
export const foo: Foo = {
  name: "bob",
  isCool: true,
}

const bar = Object.create(foo)

console.log(bar) // {}
console.log(foo) // {name:"bob", isCool: true}
console.log(bar.__proto__) // {name:"bob", isCool: true}

interface User {
  name: string
  age: number
  birthDay?: () => void
  greet?: () => string
}

export const createUser = (user: User): User => {
  const userObject = Object.create({
    birthDay(this: User): void {
      this.age++
    },
    greet(this: User): string {
      return `hello my name is ${this.name} and I am ${this.age}years old`
    },
  })
  userObject.name = user.name
  userObject.age = user.age
  return userObject
}

const mike = createUser({ name: "mike", age: 22 })
const tina = createUser({ name: "tina", age: 31 })
mike.birthDay && mike.birthDay()
console.log(tina)
console.log(mike.greet && mike.greet())

interface Player {
  name: string
  score: number
  increment?: () => void
  login?: () => string
}

const playerCreator = (name: string, score: number): Player => {
  const newUser = Object.create({
    increment(this: Player) {
      this.score++
    },
    login(this: Player) {
      return `welcome master ${this.name}`
    },
  })

  newUser.name = name
  newUser.score = score
  return newUser
}

const marcell = playerCreator("marcell", 0)
const filip = playerCreator("filip", 0)

marcell.increment && marcell.increment()
console.log(marcell.score)
