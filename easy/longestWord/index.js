/* eslint-disable prefer-const */
/**
 * @param {string[]} words
 * @return {string}
 */
const longestWordx = function(words) {
  let mySet = new Set();
  let sortedWords = words.sort();
  let longest = '';
  for (let w of sortedWords) {
    if (w.length === 1 || mySet.has(w.slice(0, -1))) {
      mySet.add(w);
      if (longest.length < w.length) {
        longest = w;
      }
    }
  }
  return longest;
};

/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function(words) {
  let longest = '';

  let newArr = words
    .filter((x, i) => {
      let a = x[i] === x[i + 1];

      return a;
    })
    .sort();

  for (let w of newArr) {
    if (longest.length < w.length) {
      longest = w;
    }
  }
  console.log(newArr);
  return longest;
};

const x1 = ['w', 'wo', 'wor', 'worl', 'world']; // world
const x2 = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']; // apple
console.log(longestWord(x1));
console.log(longestWord(x2));

// The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

// Input:
// words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// Output: "apple"
// Explanation:
// Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
