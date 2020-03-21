/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  // if (nums.length === 1) return nums[0] + 1;
  // const sorted = nums.sort((a, b) => a - b);

  // for (let i = 0; i < sorted.length; i++) {
  //   // console.log(sorted.indexOf(i));
  //   if (sorted.indexOf(i) === -1) {
  //     return i;
  //   }
  //   // if (sorted.indexOf(i) !== -1) {
  //   //   return sorted[sorted.length - 1] + 1;
  //   // }
  // }
  let x = 0;
  // const res = nums.forEach((a, index, arr) => {
  //   // console.log(a, index, arr);

  //   x = x + index - a;
  // });

  // return x + nums.length;
  for (let i = 0; i < nums.length; i++) {
    x = x + i - nums[i];
  }

  return x + nums.length;
};

const x = [3, 0, 1]; // 2
const y = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // 8
const b = [1]; // 0
const c = [0, 1]; // 2

console.log(missingNumber(x));
// console.log(missingNumber(y));
// console.log(missingNumber(b));
// console.log(missingNumber(c));
