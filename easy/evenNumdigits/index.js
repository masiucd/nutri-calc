/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @return {number}
 */

const findNumbers = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i].toString().length % 2 === 0) {
      count += 1;
    }
  }

  return count;
};

const nums = [12, 345, 2, 6, 7896];

console.log(findNumbers(nums)); // 2
