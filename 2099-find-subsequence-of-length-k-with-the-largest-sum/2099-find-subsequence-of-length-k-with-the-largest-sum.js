/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    
    let ans = []
    let map = new Map()
    
    for (let i = 0 ; i < nums.length; i++) {
        map.set(i, nums[i] )
    }
    
    let sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
   
    let before = sortedMap.slice(0, k)
    
    before.sort((a,b) => a[0] - b[0])
    
    for (let [index,num] of before) {
        ans.push(num)
    }
    
    return ans
};