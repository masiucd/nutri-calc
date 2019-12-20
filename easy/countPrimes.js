/**
 * @param {number} n
 * @return {boolean}
 */
const isPrime = n => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = function(n) {
  if (n < 2) return 0;

  const numbers = [...Array(n).keys()];

  for (let i = 2; i * i < n; i += 1) {
    if (numbers[i]) {
      for (let j = i * i; j < n; j += i) {
        numbers[j] = 1;
      }
    }
  }
  return numbers.filter(num => num > 1).length;
};

console.log(countPrimes(10));
// console.log(isPrime(22));

// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
