const listener = val => {
  console.log(val)
}

const broadcaster = fn => {
  fn(1)
  fn(2)
  fn(3)
}

const operator = broadCaster => listener => {
  let initialCount = 0
  broadCaster(value => {
    console.log(value)
    initialCount += value
    setTimeout(() => {
      listener(initialCount)
    }, initialCount * 1000)
  })
}

const timeByValue = broadCaster => listener => {
  const fn = val => {
    setTimeout(() => {
      listener(val)
    }, val * 1000)
  }

  broadCaster(fn)
}

console.log(timeByValue(broadcaster)(listener))
