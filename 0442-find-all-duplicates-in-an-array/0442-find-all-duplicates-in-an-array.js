/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    let ans = []

    let map = new Map()

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (const [key,values] of map) {
        if (values == 2) {
            ans.push(key)
        }
    } 
    
    return ans
};