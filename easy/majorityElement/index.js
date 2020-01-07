/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @return {number}
 *
 */
const majorityElementX = function(nums) {
  if (nums.length === 1) return nums[0];

  let max = 0;
  let val = 0;
  for (let i = 0; i < nums.length; i++) {
    let c = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        c += 1;
      }
    }
    if (max < c) {
      max = c;
      val = nums[i];
    }
  }
  return val;
  // console.log(counter);
  // console.log(max);
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 */
const majorityElement = function(nums) {
  if (nums.length === 1) return nums[0];
  let countMap = {};

  for (let i = 0; i < nums.length; i++) {
    countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;

    if (countMap[nums[i]] > nums.length / 2) return nums[i];
  }

  // for (let [key, value] of Object.entries(countMap)) {
  //   // console.log('key', key, 'value', value);
  //   // max = Math.max(value);
  //   // console.log(key[value]);

  // }
};

// console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// Input: [3,2,3]
// Output: 3

// Input: [2,2,1,1,1,2,2]

// Output: 2
