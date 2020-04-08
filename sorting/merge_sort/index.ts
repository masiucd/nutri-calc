const merge = (left: number[], right: number) => {
  //
};

const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length <= 1) return numbers;
  const middle = Math.floor(numbers.length / 2);
  const first = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  console.log(first, right);
  return merge(mergeSort(first), mergeSort(right));
  // return [2];
};

console.log(mergeSort([6, 8, 100, 2, -11, 200, 5, 600, -2, 0, 1]));
