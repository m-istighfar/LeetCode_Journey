/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let count = 0;
  let odd = false;
  let maxOdd = 0;

  for (let value of map.values()) {
    if (value % 2 == 0) {
      count += value;
    } else {
      odd = true;
      count += value - 1;
    }
  }

  return odd ? count + 1 : count;
};
