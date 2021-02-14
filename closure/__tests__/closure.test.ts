import { createFn, makeCount } from "../closure.ts"
import { assertEquals } from "../../package.ts"

// makeCount will increment count for every function call
Deno.test({
  name: "makeCount",
  fn: () => {
    const c = makeCount()

    assertEquals(c(), 1)
    assertEquals(c(), 2)
    assertEquals(c(), 3)
  },
})

// generate count store first function call, preloaded
// calling generate func with given parameter will double the value
Deno.test({
  name: "createFn",
  fn: () => {
    const generateFn = createFn()
    const doubleFive = generateFn(5)
    const doubleThree = generateFn(3)

    assertEquals(doubleFive, 10)
    assertEquals(doubleThree, 6)
  },
})
