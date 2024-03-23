/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => {
    if (a < 0 && b < 0) {
      return a - b;
    } else {
      return b - a;
    }
  });


  let minCount = 0;
  let getBase = false;
  let base = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      minCount++;
      if (!getBase) {
        base = i;
        getBase = true;
      }
    }
  }

  let index = base - 1;

  while (k > 0) {
    if (minCount > 0) {
      nums[base] *= -1;
      minCount--;
      k--;
      base++;
    } else {
      nums[index] < nums[nums.length - 1]
        ? ((nums[index] *= -1), k--)
        : ((nums[nums.length - 1] *= -1), k--);
    }
  }


  return nums.reduce((a, b) => a + b, 0);
};
