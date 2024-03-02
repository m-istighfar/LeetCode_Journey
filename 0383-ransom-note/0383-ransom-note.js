/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (const str of magazine) {
    map.set(str, (map.get(str) || 0) + 1);
  }

  for (const str of ransomNote) {
    if (!map.has(str) || map.get(str) == 0) {
      return false;
    } else {
      map.set(str, map.get(str) - 1);
    }
  }

  return true;
};
