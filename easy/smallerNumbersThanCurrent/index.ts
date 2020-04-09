/* eslint-disable prefer-const */
const xs = [8, 1, 2, 2, 3];
// const xs = [8, 1, 2];
const smallerNumbersThanCurrent = function(nums: number[]) {
  let result = [];
  for (let [i, n] of nums.entries()) {
    let counter = 0;
    for (let val of nums) {
      if (n === val) continue;
      if (n > val) counter += 1;
    }
    result[i] = counter;
  }
  return result;
};

const smallerNumbersThanCurrent2 = (nums: number[]) => {
  let sorted = nums.slice().sort((a, b) => a - b);
  let res = nums.map(x => sorted.indexOf(x));
};

console.log(smallerNumbersThanCurrent2(xs)); // Output: [4,0,1,1,3]
