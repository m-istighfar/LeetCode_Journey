/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let map = new Map();
  let left = 0;
  let ans = 0;

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left])  - 1);

      if (map.get(s[left]) == 0) {
        map.delete(s[left]);
      }
       left++;
    }
   

    ans = Math.max(ans, right - left + 1);
  }

  return ans
};
