/**
 * @param {number[]} nums
 * @return {number[]}
 */
https: var findLonely = function (nums) {
  let map = new Map();

  let ans = [];

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (!map.has(key - 1) && !map.has(key + 1) && value == 1) {
      ans.push(key);
    }
  }

  return ans;
};