/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0;
  let curr = "";
  let map1 = new Map();
  let map2 = new Map();
  let size = s1.length;

  const checkCurr = (curr) => {
    map2.clear();
    for (let char of curr) {
      map2.set(char, (map2.get(char) || 0) + 1);
    }
  };

  const checkAns = (map1, map2) => {
    for (let [key, value] of map2.entries()) {
      if (!map1.has(key)) {
        return false;
      }
      if (map1.get(key) !== value) {
        return false;
      }
    }
    return true;
  };

  for (let char of s1) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }

  for (let right = 0; right < s2.length; right++) {
    curr += s2[right];

    if (curr.length === size) {
      checkCurr(curr);
      if (map1.size == map2.size) {
        if (checkAns(map1, map2)) {
          return true;
        } else {
          map2.set(s2[left], map2.get(s2[left]) - 1);
          if (map2.get(s2[left]) == 0) {
            map2.delete(s2[left]);
          }
        }
      }
      left++;
      curr = curr.substring(1);
    }
  }
  return false;
};
