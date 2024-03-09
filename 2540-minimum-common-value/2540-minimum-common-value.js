/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {

    let max = 0;
    let min = 0;
    
    nums1.length >= nums2.length? max = nums1 : max = nums2;
    nums1.length < nums2.length? min = nums1 : min = nums2;

    let set = new Set(max)

    for (let i = 0; i < min.length;i++) {
      if (set.has(min[i])) {
          return min[i]
      }
    }
    
    return -1
};