/**
 * @param {number[]} A
 * @return {string}
 */
const largestTimeFromDigits = function(A) {
    const sortedTimes = A.sort((a, b) => a - b);
    const [a, b, c, d] = sortedTimes;
    // if (a > 9 || b > 9 || c > 9 || d > 9) return '';
    if (A[0] >= 3 || A[1] >= 6) return '';
    for (let i = 0; i < sortedTimes.length; i++) {
        console.log(sortedTimes[i]);
    }
};

const res = [1, 2, 3, 4];
console.log(largestTimeFromDigits(res));