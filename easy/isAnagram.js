/* eslint-disable no-unused-expressions */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const map = {};

  for (const val of s) {
    map[val] ? (map[val] += 1) : (map[val] = 1);
  }
  for (const val of t) {
    if (!map[val]) return false;
    map[val] -= 1;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'a'));
