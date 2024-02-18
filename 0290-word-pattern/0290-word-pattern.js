/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let t = s.split(" ");

  if (t.length !== pattern.length) {
    return false;
  }

  let patternMap = {};
  let tMap = {};

  for (let i = 0; i < pattern.length; i++) {
    let tChar = t[i];
    let patternChar = pattern[i];

    let tCharKey = `_${tChar}`;
    let patternCharKey = `_${patternChar}`;

    if (patternMap[tCharKey] !== undefined) {
      if (patternMap[tCharKey] !== patternChar) {
        return false;
      }
    } else {
      patternMap[tCharKey] = patternChar;
    }

    if (tMap[patternCharKey] !== undefined) {
      if (tMap[patternCharKey] !== tChar) {
        return false;
      }
    } else {
      tMap[patternCharKey] = tChar;
    }
  }

  return true;
};
