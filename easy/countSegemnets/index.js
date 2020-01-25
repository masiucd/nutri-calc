/* eslint-disable prefer-const */
/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function(s) {
  return s.split(' ').filter(Boolean).length;
};

console.log(countSegments('Hello, my name is John'));
console.log(
  countSegments('Of all the gin joints in all the towns in all the world,   ')
);
