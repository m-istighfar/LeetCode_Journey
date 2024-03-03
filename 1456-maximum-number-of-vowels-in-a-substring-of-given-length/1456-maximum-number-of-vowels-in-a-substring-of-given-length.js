/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  let max = 0;

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (vowel.includes(s[right])) count++;

    if (right - left == k-1) {
      max = Math.max(max, count);
      if (vowel.includes(s[left])) {
          count--
      }
      left++;
    }
  }
  return max
};
