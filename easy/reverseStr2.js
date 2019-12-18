/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
  const strArr = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    const element = strArr.splice(i, k).reverse();
    strArr.splice(i, 0, ...element);
  }
  return strArr.join('');
};

console.log(reverseStr('abcdefg', 2));

// c ,d ,e ,f ,g

/**
 * Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
 */
