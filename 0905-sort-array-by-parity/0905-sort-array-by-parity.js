/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let temp;

  nums.sort((a, b) => a - b);


  while (left < right) {
    if ((nums[left] % 2 !== 0) & (nums[right] % 2 == 0)) {
      temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    } else if ((nums[left] % 2 !== 0) & (nums[right] % 2 !== 0)) {
      right--;
    } else if ((nums[left] % 2 == 0) & (nums[right] % 2 == 0)) {
      left++;
    } else if ((nums[left] % 2 == 0) & (nums[right] % 2 !== 0)) {
      left++;
      right--;
    }
  }

  return nums;
};
