/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
  if (s.length > 10000) return false;

  let pattern = '';
  for (let i = 0; i < s.length / 2; i++) {
    pattern += s[i];
    if (!s.split(pattern).join('').length) return true;
  }
  return false;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
// console.log(repeatedSubstringPattern('abcabcabcabc')); // false
