/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;

  nums.sort((a, b) => a - b);

  let diff = nums[1] - nums[0];

  for (let i = 2; i < nums.length; i++) {
    diff = Math.max(diff, nums[i] - nums[i - 1]);
  }

  return diff;
};
