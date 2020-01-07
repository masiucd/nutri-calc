/* eslint-disable prefer-const */
/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.join('');
};

console.log(removeDuplicates('abbaca'));

// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb"
//  since the letters are adjacent and equal, and this is the only possible move.
// The result of this move is that the string is "aaca", of which only "aa"
// is possible, so the final string is "ca".
