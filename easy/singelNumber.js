/* eslint-disable no-restricted-syntax */
// @ts-nocheck
/* eslint-disable no-unused-expressions */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const map = {};
  const numStr = nums.map(n => n.toString());

  for (const key of numStr) {
    map[key] ? (map[key] += 1) : (map[key] = 1);
  }

  for (const val in map) {
    if (map[val] === 1) return Number(val);
  }
  return false;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
// Input: [2,2,1]
// Output: 1

// Input: [4,1,2,1,2]
// Output: 4
