/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    
    let map = new Map()
    let target = nums.length/2
    
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
        if (map.get(num) > target) {
            return num
            break;
        }
    }
};