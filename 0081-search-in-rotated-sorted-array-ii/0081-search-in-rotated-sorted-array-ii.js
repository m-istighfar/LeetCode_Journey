/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
      for (let i = 0; i < nums.length; i++) {
       if (target == nums[i]) {
           return true
       }
    }
    
    return false
    
};