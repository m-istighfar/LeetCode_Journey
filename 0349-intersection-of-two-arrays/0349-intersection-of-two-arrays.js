/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();

  let max;

  if (nums1.length > nums2.length) {
    max = nums1.length;
    for (let i = 0; i < max; i++) {
      if (nums2.includes(nums1[i])) {
        set.add(nums1[i]);
      }
    }
  } else {
      max = nums2.length;
      for (let i = 0; i < max; i++) {
      if (nums1.includes(nums2[i])) {
        set.add(nums2[i]);
      }
    }
      }

  return [...set];
};
