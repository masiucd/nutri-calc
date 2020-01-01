/* eslint-disable prefer-const */
/**
 * @param {string[]} words
 * @return {string[]}
 */

const findWords = function(words) {
  return words.filter(x => checkWord(x));
};

const checkWord = function(word) {
  const firstRow = 'qwertyuiop';
  const secondRow = 'asdfghjkl';
  const thirdRow = 'zxcvbnm';

  let inputWord = word.toLowerCase();

  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;

  for (let char of inputWord) {
    if (firstRow.includes(char)) {
      firstCount += 1;
    }
    if (secondRow.includes(char)) {
      secondCount += 1;
    }
    if (thirdRow.includes(char)) {
      thirdCount += 1;
    }
  }

  return (
    firstCount === inputWord.length ||
    secondCount === inputWord.length ||
    thirdRow === inputWord.length
  );
};

//  Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

const a = ['Hello', 'Alaska', 'Dad', 'Peace'];

console.log(findWords(a));
// console.log(checkWord('Hello'));
