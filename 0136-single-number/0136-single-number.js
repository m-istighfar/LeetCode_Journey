/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let map = {}

    for (let num of nums) {
        map[num] = map[num] + 1 || 1 
    }

    for  (let num in map) {
        if (map[num] == 1) return num
    }
    
};