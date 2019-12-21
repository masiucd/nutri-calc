/* eslint-disable prefer-const */
// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLastWord = function(s) {
//   const strArr = s.split(' ');

//   if (strArr.length < 1 || strArr[strArr.length - 1] === '') return 0;
//   const last = strArr[strArr.length - 1];
//   // if (last === '') return 1;
//   return last.length;
// };

// // console.log(lengthOfLastWord('Hello World'));
// console.log(lengthOfLastWord('a ')); // 1
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let count = 0;
  let hasWord = false;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (hasWord) {
      if (element === ' ') count++;
      else break;
    } else if (element !== ' ') {
      hasWord = true;
      count++;
    }
  }
  return count;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('a ')); // 1

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLastWord = function(s) {
//   let count = '';
//   let words = s.split(' ').filter(str => str);
//   return words.length ? words[words.length - 1].length : 0;
// };

// console.log(lengthOfLastWord('Hello World'));
// console.log(lengthOfLastWord('a ')); // 1
// console.log(lengthOfLastWord('     ')); // 1
// console.log(lengthOfLastWord('')); // 0
