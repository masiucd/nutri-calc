/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  if (!num) return false;
  let currentNumber = 1;
  let squaredRes = currentNumber * currentNumber;

  while (squaredRes <= num) {
    if (squaredRes === num) return true;
    currentNumber += 1;
    squaredRes = currentNumber * currentNumber;
  }
  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));

/**
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
 */
