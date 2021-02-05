import * as module from "../module-ts"

jest.spyOn(module, "moduleFn")

describe("module", () => {
  test("should works correctly", () => {
    const name = "marcell"
    const mod = module.moduleFn(name)

    expect(mod.speak()).toBe(name)
    expect(mod.shout()).toBe(name.toUpperCase())

    expect(typeof mod.shout).toBe("function")
    expect(typeof mod.speak).toBe("function")

    expect(module.moduleFn).toHaveBeenCalled()
  })
})
