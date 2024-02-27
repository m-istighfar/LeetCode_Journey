/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {

    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 1) + 1)
    }

   
     nums.sort((a, b) => {
        if (map.get(a) !== map.get(b)) {
            return map.get(a) - map.get(b);
        } else {
            return b - a;
        }
    });

    return nums
    
};