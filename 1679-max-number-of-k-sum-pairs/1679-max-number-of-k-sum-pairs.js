/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let ans = 0;

  while (left < right) {
    if (nums[right] + nums[left] == k) {
      ans++;
      right--;
      left++;
    }

    if (nums[right] + nums[left] < k) {
      left++;
    }

    if (nums[right] + nums[left] > k) {
      right--;
    }
  }
    
    return ans
};
