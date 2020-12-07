function moduleFn(name: string) {
  // PUBLIC
  const speak = (): void => {
    console.log(name)
  }

  // PRIVATE
  const toUpper = (str: string) => {
    return str.toUpperCase()
  }

  // PUBLIC
  const shout = (): void => {
    console.log(toUpper(name))
  }

  // Private
  const firstLetterCapitalize = (str: string) => {
    return str.split("")[0].toUpperCase() + str.slice(1)
  }

  const nameWithCapFirstLetter = () => {
    console.log(firstLetterCapitalize(name))
  }

  return {
    speak,
    shout,
    nameWithCapFirstLetter,
  }
}

const mod = moduleFn("marcell")

mod.speak()
mod.shout()
mod.nameWithCapFirstLetter()
