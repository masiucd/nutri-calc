/* eslint-disable prefer-const */
/**
 *
 * @param {string[]} arr
 * @param {number} idx1
 * @param {number} idx2
 */
const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function(S) {
  const isAlphabetic = str => /^[a-zA-z]+$/.test(str);

  let strArr = S.split('');
  let start = 0;
  let end = strArr.length - 1;

  while (start < end) {
    const first = strArr[start];
    const last = strArr[end];
    if (isAlphabetic(first) && isAlphabetic(last)) {
      // Then we swap
      strArr[start] = last;
      strArr[end] = first;
      start += 1;
      end -= 1;
    }
    if (!isAlphabetic(first)) {
      start += 1;
    }
    if (!isAlphabetic(last)) {
      end -= 1;
    }
  }
  return strArr.join('');
};

console.log(reverseOnlyLetters('abcd')); // dc-b
console.log(reverseOnlyLetters('ab-cd')); // dc-b
console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); // j-Ih-gfE-dCba
