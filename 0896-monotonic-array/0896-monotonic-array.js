/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let monoA = false;
  let monoD = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1] && !monoD && !monoA) {
      monoD = true;
    } else if (nums[i] < nums[i + 1] && !monoD && !monoA) {
      monoA = true;
    }

    if (monoD) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    } else if (monoA) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  }

  if (monoA) {
    return monoA;
  } else if (monoD) {
    return monoD;
  } else return true;
};
