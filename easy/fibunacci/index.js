/**
 * @param {number} N
 * @return {number}
 */
const fib = function(N) {
  if (N < 2) return N;

  return fib(N - 1) + fib(N - 2);
};

console.log(fib(5));
console.log(fib(4));
console.log(fib(20));
