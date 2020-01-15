/* eslint-disable prefer-const */
/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  if (n === 1) return true;
  let set = new Set();
  const x = n
    .toString()
    .split('')
    .map(num => parseInt(num ** 2))
    .reduce((a, b) => a + b, 0);

  set.add(x);
  console.log(set);
  // if (set.has(x)) return false;
  return isHappy(x);
};

console.log(isHappy(19)); // true
console.log(isHappy(21)); // true
