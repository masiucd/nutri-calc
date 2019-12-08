/* eslint-disable prefer-const */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindromeNumX = function(x) {
  const numStr = x.toString();

  const reversed = numStr
    .split('')
    .reverse()
    .join('');

  return x.toString() === reversed;
};

const isPalindromeNumXX = function(x) {
  const numStr = x.toString();
  let reversed = '';

  for (let char of numStr) {
    reversed = char + reversed;
  }
  return reversed === x.toString();
};

const isPalindromeNum = function(x) {
  const numStr = x.toString();
  let reversed = '';
  for (let i = numStr.length - 1; i >= 0; i -= 1) {
    reversed += numStr[i];
  }
  return reversed === x.toString();
};

console.log(isPalindromeNum(121));
console.log(isPalindromeNum(10));
console.log(isPalindromeNum(-121));

// Input: 121
// Output: true

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
