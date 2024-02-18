/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let maga = {};
  let ans = true;

  for (let i = 0; i < magazine.length; i++) {
    maga[magazine[i]] = maga[magazine[i]] + 1 || 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (maga[ransomNote[i]] > 0) {
      maga[ransomNote[i]]--;
    } else return false;
  }

  return true;
};
