/* eslint-disable prefer-const */
/**
 *
 * @param {string[] | number[]} arr
 * @param {string | number} idx1
 * @param {string | number} idx2
 * @returns {string[] | number[]}
 */
const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  let strArr = s.toLowerCase().split('');
  let i = 0;
  let j = strArr.length - 1;
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  while (i < j) {
    let left = '';
    if (vowels.includes(strArr[i]) && vowels.includes(strArr[j])) {
      left = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = left;
      i += 1;
      j -= 1;
    } else if (!vowels.includes(strArr[i])) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return strArr.join('');
};

console.log(reverseVowels('hello'));

// Input: "hello"
// Output: "holle"

// Input: "leetcode"
// Output: "leotcede"
