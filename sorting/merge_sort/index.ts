const merge = (left: number[], right: number[]) => {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (numbers: number[]): number[] => {
  if (numbers.length <= 1) return numbers;
  const middle = Math.floor(numbers.length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);
  // console.log(left, right);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([6, 8, 100, 2, -11, 200, 5, 600, -2, 0, 1]));
