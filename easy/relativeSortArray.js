/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const finalResult = [];
  const countMap = {};
  const restValues = [];

  for (const val of arr2) {
    countMap[val] = 0;
  }

  for (const val of arr1) {
    if (countMap[val] >= 0) {
      countMap[val] += 1;
    } else {
      restValues.push(val);
    }
  }
  for (const val of arr2) {
    for (let i = 0; i < countMap[val]; i += 1) {
      finalResult.push(val);
    }
  }
  return [...finalResult, ...restValues.sort((x, y) => (x > y ? -1 : 1))];
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
