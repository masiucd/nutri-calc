function module(name) {
  // PUBLIC
  const speak = () => {
    console.log(name)
  }

  // PRIVATE
  const toUpper = str => {
    return str.toUpperCase()
  }

  // PUBLIC
  const shout = () => {
    console.log(toUpper(name))
  }

  return {
    speak,
    shout,
  }
}

// const x = module("marcell")

// x.speak()
// x.shout()
// x.toUpper // will not work because we don't have access to it
