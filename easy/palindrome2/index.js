/* eslint-disable prefer-const */
/**
 * @param {string} s
 * @return {boolean}
 */
const valid = s => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(valid('hello'));

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return valid(s.slice(start, end)) || valid(s.slice(start + 1, end + 1));
    }
    start += 1;
    end -= 1;
  }
  return true;
};

const res = 'aba';
const res2 = 'abca';

const x = validPalindrome(res2);

console.log(x);

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const validPalindrome = function(s) {
//   let i = 0;
//   let j = s.length - 1;
//   let wrongLetter = 1;
//   while (i < j) {
//     if (s[i] === s[j]) {
//       i += 1;
//       j -= 1;
//     } else if (s[i + 1] !== s[j] || (s[i + 2] !== s[j - 1] && wrongLetter)) {
//       i++;
//       wrongLetter -= 1;
//     } else if (s[j - 1] === s[i]) {
//       j--;
//       wrongLetter--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// const res = 'aba';
// const res2 = 'abca';

// // a b

// const x = validPalindrome(res2);

// console.log(x);
