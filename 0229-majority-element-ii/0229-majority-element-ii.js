/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    let set = new Set()
    let map = new Map()
    let target = nums.length/3  
    
    for (const num of nums) {
        
        map.set(num, (map.get(num) || 0) + 1)
        
        if (map.get(num) > target && !set.has(num)) {
            set.add(num)
        } 
    }
    
 return [...set]
    
};