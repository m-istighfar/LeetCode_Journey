/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  let maxNum = Math.max(...nums);

  if (nums.length !== maxNum + 1) return false;

  let frequency = {};
  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let i = 1; i <= maxNum; i++) {
    if (i === maxNum && frequency[i] !== 2) return false;
    if (i < maxNum && frequency[i] !== 1) return false;
  }

  return true;
};
