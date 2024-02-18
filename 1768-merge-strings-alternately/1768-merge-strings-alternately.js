/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let left = 0;
  let right = 0
  let ans = ""

  while ( left < word1.length || right < word2.length) {

      if (left < word1.length) {
          ans = ans + word1[left]
          left++
      }

        if (right < word2.length) {
          ans = ans + word2[right]
          right++
      }
  }

  return ans;
};