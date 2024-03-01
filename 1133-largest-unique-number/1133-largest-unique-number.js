/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
  let map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let sortedMap = new Map([...map.entries()].sort((a, b) => b[0] - a[0]));

  for (const [keys, value] of sortedMap) {
    if (value == 1) return keys;
  }

  return -1;
};
