function format(char, count) {
  let str = '';
  for (let i = 0; i < count; i++) {
    str += char;
  }
  return str;
}

/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n) {
  let str = '';
  if (n % 2 === 0) {
    str += format('m', n - 1);
    str += 'c';
  } else {
    str += format('m', n);
  }
  return str;
};

console.log(generateTheString(4));

// Logic is,
// Check if the input num is odd then return any character num number of times.
// Else, if the input is even, then return any character num - 1 times and another character 1 time.
