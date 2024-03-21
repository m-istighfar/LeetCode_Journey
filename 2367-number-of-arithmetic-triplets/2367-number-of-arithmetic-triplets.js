/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    
    let map = new Map()
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    
     for (let i = 0; i < nums.length-2; i++) {   
            if (map.has(nums[i]+diff) && map.has(nums[i]+2*diff)) {
                result++
            }
    }
    
    return result
    
};