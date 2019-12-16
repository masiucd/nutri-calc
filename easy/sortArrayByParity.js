/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  const even = A.filter(x => x % 2 === 0);
  const odd = A.filter(x => x % 2 !== 0);

  return [...even, ...odd];
};

console.log(sortArrayByParity([3, 1, 2, 4]));

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000
