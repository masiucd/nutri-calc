const target = {
  name: "Bob",
  isCool: true,
}

const handler = {
  get: function (target: any, prop: any, receiver: any) {
    console.log({ target, prop, receiver })
    return "Tina"
  },
}

const proxy1 = new Proxy(target, handler)

console.log(proxy1.name)
