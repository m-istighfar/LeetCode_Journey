/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let ans = [];

  let shorter = nums1.length > nums2.length ? nums2 : nums1;
  let longer = nums1.length > nums2.length ? nums1 : nums2;

  for (const num of longer) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let i = 0; i < shorter.length; i++) {
    if (map.has(shorter[i]) && map.get(shorter[i]) >= 1) {
      ans.push(shorter[i]);
      map.set(shorter[i], map.get(shorter[i]) - 1);
    }
  }

  return ans;
};

