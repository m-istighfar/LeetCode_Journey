/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let set = new Set(nums)

    let sum= nums[0]
    let idx = 1
    
    while (idx < nums.length && nums[idx] == nums[idx-1] +1) {
           sum += nums[idx]
        idx++
           }
    
    while (set.has(sum)) {
        sum++
    }
    
    return sum
};
