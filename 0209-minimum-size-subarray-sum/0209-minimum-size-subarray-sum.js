/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

 

  let curr = 0;
  let ans = Infinity
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    curr = curr + nums[right]

    while (curr >= target) {
        ans = Math.min(ans, right - left + 1);
      curr -= nums[left];
      left++;
    
    }

     
  }

  return (ans == Infinity) ? 0 : ans
};
