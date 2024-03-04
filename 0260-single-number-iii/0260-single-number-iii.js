/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let map = new Map()
    let ans = []

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (const [key,values] of map) {
        if (values == 1) ans.push(key)
    }

    return ans
    
};