/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = nums1.concat(nums2);

  mid = merged.length/2

  merged.sort((a, b) => a - b);


  if (merged.length % 2 !== 0) {
    return merged[Math.floor(mid)];
  } else {
       return (merged[mid] + merged[mid-1])/2;
  }
};
