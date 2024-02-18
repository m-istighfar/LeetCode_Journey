/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  console.log(nums);

  let ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1,
      base = i;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      if (nums[left] + nums[right] + nums[base] == 0) {
        ans.push([nums[base], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (nums[left] + nums[right] + nums[base] > 0) {
        right--;
      } else left++;
    }
  }

  return ans;
};
