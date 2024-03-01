/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let map = new Map();
  let ans = [];

  for (const num of nums) {
    for (const int of num) {
      map.set(int, (map.get(int) || 0) + 1);
    }
  }

  for (const [keys, value] of map) {
    if (value === nums.length ) ans.push(keys);
  }

  return ans.sort((a,b) => a-b);
};
