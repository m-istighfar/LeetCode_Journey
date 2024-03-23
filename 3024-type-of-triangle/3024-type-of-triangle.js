/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    
    let set = new Set(nums)
    
    nums.sort((a,b) => b-a)
    
    let isTriangle = nums[0] < nums[1] + nums[2]
    
    if (!isTriangle)  return "none"
    
    if (set.size == 3) {
        return "scalene"
    } else if (set.size == 2) {
        return "isosceles"
    } else return "equilateral"
    
};