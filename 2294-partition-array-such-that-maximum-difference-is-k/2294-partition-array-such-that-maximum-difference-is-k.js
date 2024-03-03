/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b);

  let ans = 1;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    min = nums[left];

    if (nums[i] - min > k ) {
      ans++;
      left = i;
      
    }
  }
  return ans;
};


