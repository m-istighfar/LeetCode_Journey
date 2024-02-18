/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {

    let prefix = 0
    let min = 0;

    for (let i = 0; i < nums.length; i++) {
        prefix = prefix + nums[i]
        min = Math.min(prefix, min)
    }

    return -min+1
    
};