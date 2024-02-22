/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

  let map = new Map();

  for (let i = 1; i < 100002; i++) {
     map.set(i, false);
  }

  for (const num of nums) {
    map.set(num, true);
  }

  for (let i = 1; i < 100002; i++) {
    if (map.get(i) == false) {
      return i;
    }
  }
};
