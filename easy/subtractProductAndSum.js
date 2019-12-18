/* eslint-disable prefer-const */
/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  const multiRes = n
    .toString()
    .split('')
    .map(Number)
    .reduce((x, y) => x * y);

  const addRes = n
    .toString()
    .split('')
    .map(Number)
    .reduce((x, y) => x + y);

  return multiRes - addRes;
};

console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21
