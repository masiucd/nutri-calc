/* eslint-disable prefer-const */
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  let first = 1;
  let second = 2;
  let third;

  for (let i = 3; i <= n; i += 1) {
    third = first + second;
    first = second;
    second = third;
  }
  return n === 1 ? first : second;
};

console.log(climbStairs(2));
