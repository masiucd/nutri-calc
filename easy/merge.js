// @ts-nocheck
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  // const arr1Size = nums1.slice(0, m);
  // const arr2Size = nums2.slice(0, n);

  // return [...arr1Size, ...arr2Size].sort((a, b) => a - b);

  nums1.splice(m, nums1.length);
  nums1.push(...nums2.splice(0, n));
  nums1.sort((a, b) => a - b);
  return nums1;
};
const merge2 = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  nums1.push(...nums2.splice(0, n));
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
// [ 1, 2, 2, 3, 5, 6 ]

// [1, 2, 2, 3, 5, 6];
