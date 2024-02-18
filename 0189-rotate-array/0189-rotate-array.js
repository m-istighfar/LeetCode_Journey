/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    let cut = []
    if ( k > nums.length) {
        k = k % nums.length
    }
    
   cut = nums.splice(nums.length - k, k)
   
   
        nums.splice(
            0,0,...cut) 
    
    
    return nums
    
    
    
};