/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
  let dublicated = 0;
  let missing = 0;
  for (let i = 0; i < nums.sort().length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      dublicated = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < nums[i + 1]) {
      missing = nums[i];
    } else if (nums[i] === nums[i + 1]) {
      missing = nums[i];
    }
  }

  return [dublicated, missing + 1];
};

// console.log(findErrorNums([1, 2, 2, 4])); // [2,3]
console.log(findErrorNums([1, 3, 3, 5])); // [3,4]
console.log(findErrorNums([1, 1])); // [1,2]
console.log(findErrorNums([1, 2]));
// console.log(findErrorNums([1, 1, 3]));
// console.log(findErrorNums([3, 0, 1]));
