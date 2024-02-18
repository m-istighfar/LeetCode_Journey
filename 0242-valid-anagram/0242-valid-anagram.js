/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = {};
  let map2 = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] + 1 || 1;
    map2[t[i]] = map2[t[i]] + 1 || 1;
  }

  for (const [key] of Object.entries(map)) {
    console.log(map, map2);
    if (map[key] != map2[key]) {
      return false;
    }
  }

  return true;
};