/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    
    let count = 0
    let map = new Map()


   for (let i = 0; i < nums.length; i++) {
       if (!map.has(nums[i])) {
           map.set(nums[i], true)
           nums[count] = nums[i]
           count++
       }
   }
    
    return count
 
};;