/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let ans = []
    
    for (let i = 0; i <  nums.length; i++ ) {
        if (target == nums[i]) {
            ans.push(i)
        }
    }
    
    if (ans.length >= 2) {
        return [ans[0], ans[ans.length-1]]
    } else if (ans.length ==1) {
        return [ans[0], ans[0]] }
    else return [-1,-1]
    
};