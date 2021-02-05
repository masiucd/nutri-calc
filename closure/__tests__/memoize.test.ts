import * as memo from "../memoize"

describe("memoize", () => {
  test("should work as expected", () => {
    const half = memo.half
    const double = memo.double

    const memoFn = memo.memoize

    expect(memoFn(half)(10)).toBe(5)
    expect(memoFn()(10)).toBe(20)
    expect(memoFn(double)(10)).toBe(20)
  })
})
