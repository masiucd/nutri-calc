export function moduleFn(name: string) {
  // PUBLIC
  const speak = (): string => {
    console.log(name)
    return name
  }

  // PRIVATE
  const toUpper = (str: string): string => {
    return str.toUpperCase()
  }

  // PUBLIC
  const shout = (): string => {
    console.log(toUpper(name))
    return toUpper(name)
  }

  // Private
  const firstLetterCapitalize = (str: string): string => {
    return str.split("")[0].toUpperCase() + str.slice(1)
  }

  const nameWithCapFirstLetter = (): string => {
    console.log(firstLetterCapitalize(name))
    return firstLetterCapitalize(name)
  }

  return {
    speak,
    shout,
    nameWithCapFirstLetter,
  }
}
