/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();
  let ans = "";

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  for (const [keys, value] of sortedMap) {
    for (let i = 0; i < value; i++) {
      ans += keys;
    }
  }

  return ans;
};
