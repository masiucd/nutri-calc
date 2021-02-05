import { assertEquals } from "../../package.ts"
import { map } from "../funcs.ts"

Deno.test({
  name: "map",
  fn: () => {
    const double = (x: number) => x * 2
    const doubleList = map(double)([1, 2, 3])
    const res = doubleList.reduce((a, b) => a + b, 0)
    assertEquals(res, 12)
  },
})
