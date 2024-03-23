/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let i = 0; i < nums.length && k > 0; i++) {
    if (nums[i] < 0) {
      nums[i] *= -1;
      k--;
    } 
  }
    
  if (k % 2 == 1) {
      nums[nums.length-1] *= -1
  }
    
  return nums.reduce((a,b) => a+b,0)
};
