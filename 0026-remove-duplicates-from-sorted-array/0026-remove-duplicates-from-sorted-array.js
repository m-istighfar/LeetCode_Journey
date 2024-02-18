/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
     
      map[nums[i]] = true;
      nums[k] = nums[i];
       k++;
    }
  }

  return k;
};;