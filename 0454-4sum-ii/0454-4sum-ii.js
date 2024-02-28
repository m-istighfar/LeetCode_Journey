/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map()
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      sum = nums1[i]+nums2[j]
      map.set(sum, (map.get(sum) || 0) + 1 )
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      target = -(nums3[i]+nums4[j])
      if (map.has(target)) {
          count += map.get(target)
      }
    }
  }

  return count
};