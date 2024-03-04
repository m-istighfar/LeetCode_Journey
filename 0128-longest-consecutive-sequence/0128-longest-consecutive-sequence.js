/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let ans = 0;
  let curr = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      curr = num;
      longest = 1;

      while (set.has(num + 1)) {
        num++;
        longest++;
      }

       ans = Math.max(longest, ans);
    }


  }

  return ans;
};
