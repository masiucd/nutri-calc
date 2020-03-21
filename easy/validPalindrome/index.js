/* eslint-disable prefer-const */
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    str
      .split('')
      .reverse()
      .join('') === str
  );
  // console.log(s);

  // if (s.length === 0) return false;
  // const xs = s.toLowerCase().match(/[a-z]/gi);
  // let w = '';
  // for (let char of xs) {
  //   w = char + w;
  // }

  // return w === xs.join('');
  // console.log(xs.join(''));
  // return s.split('').join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome('race a car')); // false
