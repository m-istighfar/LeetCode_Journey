/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let prefix = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefix.push((prefix[prefix.length-1] + nums[i]))
    }

    return prefix
    
};