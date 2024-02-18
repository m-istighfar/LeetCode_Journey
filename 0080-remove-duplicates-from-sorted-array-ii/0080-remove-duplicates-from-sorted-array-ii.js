/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {}
    let k = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        if (map[nums[i]]  < 2 || map[nums[i]] === undefined ) {
            map[nums[i]] = map[nums[i]] || 0
            map[nums[i]]++
            nums[k] = nums[i]
            k++
        }

    }
    
    return k
    
};