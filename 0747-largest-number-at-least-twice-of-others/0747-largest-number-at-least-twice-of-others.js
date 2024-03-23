/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
    let max = Math.max(...nums)
    let index = nums.indexOf(max)
    nums.splice(index,1)
    
    return nums.every( num => max >= num * 2 )  ? index : -1;
    
};