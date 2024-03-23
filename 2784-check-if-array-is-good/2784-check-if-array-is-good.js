/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {

    let max = Math.max(...nums)

    if (nums.length !== max+1) return false 
    
    nums.sort((a,b) => a-b)

    for (i = 0; i < nums.length-1; i++) {
        if (nums[i+1] - nums[i] !== 1 && i !== nums.length-2 ) {
            return false
        }
    }

    return nums[nums.length-1] = nums[nums.length-2]


};