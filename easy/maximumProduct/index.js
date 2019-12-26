/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
  // const numsArr = nums.sort((a, b) => a - b);

  // let min = numsArr[0];
  // console.log(min);
  // const maxArr = [];
  // while (min <= 3 || min <= -100) {
  //   if (min < nums[min]) {
  //     maxArr.push(nums[min]);
  //   }
  //   min += 1;
  //   console.log(maxArr);
  // }

  // const [a, b, c] = maxArr;
  // if (a && b && c) {
  //   return a * b * c;
  // }
  // return a * b;

  const sorted = nums.sort((a, b) => a - b);
  return Math.max(
    sorted[0] * sorted[1] * sorted[sorted.length - 1],
    sorted[sorted.length - 1] *
      sorted[sorted.length - 2] *
      sorted[sorted.length - 3]
  );
};

const nums = [1, 2, 3];
const nums2 = [1, 2, 3, 4];

const nums3 = [-1, -2, -3];

console.log(maximumProduct(nums)); // 24
console.log(maximumProduct(nums2)); // 24
console.log(maximumProduct(nums3)); // 24
