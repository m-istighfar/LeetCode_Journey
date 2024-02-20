/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let child = g.sort((a, b) => a - b);
  let cook = s.sort((a, b) => a - b);

  let left = child.length - 1,
    right = cook.length - 1,
    ans = 0;

  while (left >= 0 && right >= 0) {
    if (cook[right] >= child[left]) {
      ans++;
      left--;
      right--;
    } else {
      
      left--;
    }
  }

  return ans;
};
