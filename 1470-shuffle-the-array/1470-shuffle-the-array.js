/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    let arr1 = nums.slice(0, n)
    let arr2 = nums.slice(n, 2*n)
    
    let ans = []
    
    for (let i = 0; i < n; i++) {
        ans.push(arr1[i])
         ans.push(arr2[i])
        
    }
    
    return ans
    
    
};