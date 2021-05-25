const countDown = (n: number): number => {
  if (n === 0) return n
  console.log(n)
  return countDown(n - 1)
}

countDown(10)
