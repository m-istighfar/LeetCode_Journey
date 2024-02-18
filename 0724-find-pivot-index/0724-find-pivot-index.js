/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b);

  let left = 0;
  let right = sum;

  for (let i = 0; i < nums.length; i++) {

    let current = nums[i];

    right = right - current;

    if (left == right) {
      return i;
    }

    left = left + current;
  }

  return -1
};
