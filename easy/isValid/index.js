/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const brackets = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
  };
  for (const val of s) {
    if (stack[stack.length - 1] === brackets[val]) {
      stack.length -= 1;
    } else {
      stack.push(val);
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
