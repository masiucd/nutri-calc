const handleAdd = x => {
  const add = z => {
    return x + z
  }

  return add
}

const res = handleAdd(10) // the 10 value will be set up to remember the initial call
console.log(res(20))
