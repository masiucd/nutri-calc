/* eslint-disable prefer-const */
/**
 *
 * @param {number} i
 * @param {string} S
 * @param {string} C
 */
let getDistance = function(i, S, C) {
  let index = 0;
  while (i + index < S.length || i - index > -1) {
    if (S[i + index] === C || S[i - index] === C) {
      return index;
    }

    index += 1;
  }

  return index;
};
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
  const strArr = S.split('');
  const res = [];
  for (let i = 0; i < strArr.length; i++) {
    let x = getDistance(i, S, C);

    res.push(x);
  }

  console.log(res);
};

console.log(shortestToChar('loveleetcode', 'e'));
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
