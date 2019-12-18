/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumX = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (map.has(current)) {
      return [map.get(current), i];
    }
    let difference = target - current;
    map.set(difference, i);
  }
};
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumXX = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const x = map[target - num];
    if (x !== undefined) {
      return [i, x];
    }
    map[num] = i;
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const x = map[target - num];
    if (x !== undefined) {
      return [i, x];
    }
    map[num] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
