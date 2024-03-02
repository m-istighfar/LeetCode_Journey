/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let count = 0;
  let maxLength = 0;
  const map = new Map();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count += 1;
    } else count += -1;

    if (map.has(count)) {
      maxLength = Math.max(maxLength, i - map.get(count));
    } else map.set(count, i);
  }

  return maxLength;
};
