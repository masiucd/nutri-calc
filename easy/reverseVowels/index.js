<<<<<<< HEAD
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
=======
>>>>>>> 23b5ae869205a7801941b0488f208789f418b758
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
<<<<<<< HEAD
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
=======
  const vowels = [];
  const indexes = [];
  const v = ['a', 'e', 'i', 'o', 'u'];
  const reg = /[aeiou]/gi;
  const strArr = s.split('');
  s.split('').forEach((val, i) => {
    if (reg.exec(val)) {
      vowels.push(val);
      indexes.push(i);
    }
  });
  for (let i = 0; i < s.length; i++) {
    // if(s[i].includes())
    console.log(s[i].includes(v[i]));
  }
  // console.log(vowels, indexes);
};

console.log(reverseVowels('hello'));
>>>>>>> 23b5ae869205a7801941b0488f208789f418b758
