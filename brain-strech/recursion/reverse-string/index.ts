const reverseString = (input: string): string =>
  input === "" ? input : reverseString(input.slice(1)) + input.slice(0, 1)
