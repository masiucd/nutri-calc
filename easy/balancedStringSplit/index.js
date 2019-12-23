/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let left = 0;
  let right = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    current === 'R' ? (right += 1) : (left += 1);
    right === left ? (count += 1) : null;
  }

  return count;
};

console.log(balancedStringSplit('LLLLRRRR'));
console.log(balancedStringSplit('RLRRRLLRLL'));
