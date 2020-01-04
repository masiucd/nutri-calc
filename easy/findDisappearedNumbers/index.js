/* eslint-disable prefer-const */

const x = [4, 3, 2, 7, 8, 2, 3, 1]; // [5,6]
let c = [4, 3, 2, 7, 8, 2, 3, 1];
let b = [1, 1]; // [2]
let r = [2, 2]; // [1]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  let missingNums = [];
  let numsSet = new Set();
  for (let x of nums) {
    numsSet.add(x);
  }

  // numsSet.forEach(x => {
  //   console.log(x);
  // });

  for (let i = 1; i < nums.length; i++) {
    if (!numsSet.has(i)) {
      missingNums.push(i);
    }
    if (numsSet.size <= 1) {
      missingNums.push(i + 1);
    }
  }

  return missingNums;
};

// [
//   1, 2, 2, 3,
//   3, 4, 7, 8
// ]
// console.log(findDisappearedNumbers(x));
// console.log(findDisappearedNumbers(b));
console.log(findDisappearedNumbers(r));
