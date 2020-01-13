/**
 * @param {number} num
 * @return {boolean}
 */
const isUglyx = function(num) {
  if (num < 1) return false;
  while (parseInt(num / 2) === num / 2) {
    num /= 2;
  }
  while (parseInt(num / 3) === num / 3) {
    num /= 3;
  }
  while (parseInt(num / 5) === num / 5) {
    num /= 5;
  }
  return num === 1;
};

/**
 *
 * @param {number} n
 * @returns {boolean}
 */
const isUgly = n => {
  if (n < 1) return false;
  if (n === 1) return true;
  const uglyPrimes = [2, 3, 5];
  let i = 0;
  let bool = false;
  while (i < uglyPrimes.length) {
    while (!(n % uglyPrimes[i])) {
      n /= uglyPrimes[i];
      bool = true;
    }
    i++;
  }
  return bool && n === 1;
};

// 2 3 5 ugly primes
console.log(isUgly(6)); // true
console.log(isUgly(8)); // true
console.log(isUgly(14)); // false
