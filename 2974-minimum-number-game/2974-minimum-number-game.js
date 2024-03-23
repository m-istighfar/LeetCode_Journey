/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    
    nums.sort((a,b) => a-b)
    
    let ans = []
    
    for (let i = 0; i < nums.length; i += 2) {
        ans.push(nums[i+1])
        ans.push(nums[i])
    }
    
    return ans
    
};