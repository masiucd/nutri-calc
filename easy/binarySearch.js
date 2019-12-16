/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (nums[middle] !== target && start <= end) {
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (nums[middle] === target) {
    return middle;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
