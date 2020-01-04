/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function(nums) {
  let res = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] >= nums[i]) j = i;
    res = Math.max(res, i - j + 1);
  }
  return res;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS2 = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  let res = 0;
  while (i < j) {
    if (nums[i - 1] < nums[i]) {
      res += 1;
    }
    i++;
  }
  return res + 1;
};

console.log(findLengthOfLCIS2([1, 3, 5, 4, 7])); // 3
console.log(findLengthOfLCIS2([1, 1, 1, 1, 1, 1])); // 1
console.log(findLengthOfLCIS2([1, 3, 5, 6, 7])); // 4
