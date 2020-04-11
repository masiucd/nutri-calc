/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let maxSum = 0;
  let temp = 0;

  for (let [i, n] of nums.entries()) {
    temp += n;
    if (maxSum < temp) maxSum = temp;
    if (temp < 0) temp = 0;
  }

  return maxSum === 0 ? Math.max(...nums) : maxSum;
};

const xs = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(xs));
