const arrayPairSum = (nums: number[]): number =>
  nums
    .sort((a, b) => a - b)
    .filter((x, i) => i % 2 === 0)
    .reduce((a, b) => a + b, 0);

console.log(arrayPairSum([1, 4, 3, 2]));
