/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    let tChar = t[i];
    let sChar = s[i];

    if (sMap[tChar] !== undefined) {
      if (sMap[tChar] !== sChar) {
        return false;
      }
    } else {
      sMap[tChar] = sChar;
    }

    if (tMap[sChar] !== undefined) {
      if (tMap[sChar] !== tChar) {
        return false;
      }
    } else {
      tMap[sChar] = tChar;
    }
  }

  console.log(sMap);

  return true;
};

console.log(isIsomorphic("foo", "bar"));
