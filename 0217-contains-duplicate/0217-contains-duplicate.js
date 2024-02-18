/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let ans = false;
  let save = [];

  for (const num of nums) {
    if (save[num] == undefined) {
      save[num] = num;
    } else {
      return true;
    }
  }

  return ans;
};