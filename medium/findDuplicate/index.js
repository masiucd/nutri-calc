/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  let dublicatedNum = 0;
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      dublicatedNum = nums[i];
    }
  }

  return dublicatedNum;
};

// Input: [1,3,4,2,2] // 2
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
