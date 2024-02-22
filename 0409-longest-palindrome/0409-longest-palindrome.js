/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let ans = 0;
  let ganjil = false
  

  for (const [key] of map) {
    if (map.get(key) % 2 == 0) {
      ans = ans + map.get(key);
    } else {
      if (map.get(key) % 2 == 1) {
          ans = ans + map.get(key) - 1
          ganjil = true
      }
    }
  }

  return ganjil ? ans + 1 : ans
};
