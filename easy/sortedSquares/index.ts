const sortedSquares = (A: number[]): number[] =>
  A.map(x => Math.abs(x))
    .sort((a, b) => a - b)
    .map(x => x ** 2);

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
