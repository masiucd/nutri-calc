/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
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
