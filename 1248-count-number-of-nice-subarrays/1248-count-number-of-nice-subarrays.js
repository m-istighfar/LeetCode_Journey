/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {

    let map = new Map();

  let ans = 0,
    curr = 0;

  map.set(0, 1);

  for (const num of nums) {
    curr += num % 2

    if (map.has(curr - k)) {
      ans += map.get(curr - k) || 0;
    }
    map.set(curr, (map.get(curr) || 0) + 1);
  }

  return ans;
    
};