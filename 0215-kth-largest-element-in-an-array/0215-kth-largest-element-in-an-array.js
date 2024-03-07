/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let sortedMap = new Map([...map.entries()].sort((a, b) => b[0] - a[0]));

  for (const [keys, value] of sortedMap) {
    if (k - value <= 0) {
      return keys;
    } else {
      k = k - value;
    }
  }
};
