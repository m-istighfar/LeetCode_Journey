/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    let ans = 0
    let cur = 0
    let maxCount = 0
    let left = 0    
    for (let right = 0; right < nums.length ; right++) {
        if (nums[right] == 1) {
            maxCount++
        }
        
        
        if (right - left + 1 - maxCount > 1) {
           if (nums[left] == 1) {
               maxCount--
           }
            left++
        }
        
        ans = Math.max(ans, right - left)
    }
    
    return ans
};