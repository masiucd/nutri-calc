/* eslint-disable prefer-const */
/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  const map = {};
  for (let letter of s) {
    map[letter] ? (map[letter] += 1) : (map[letter] = 1);
  }
  // console.log(map);
  const test = s.split('').reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
    return obj;
  }, {});
  // console.log(test);
};

console.log(balancedStringSplit('RLRRLLRLRL'));

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
