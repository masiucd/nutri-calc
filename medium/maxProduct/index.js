/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = function(nums) {
  // let i = 0;
  // let j = nums.length - 1;
  // let res = 0;
  // if (nums.length === 1) return nums[i];
  // while (i < j) {
  //   if (nums[i - 1] <= nums[i]) {
  //     res = nums[i] * nums[i - 1];
  //   }
  //   i++;
  // }
  // if (res <= 0) return 0;
  // return res;

  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0];
  let res = 0;
  let currentMax = 0;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2]));

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
