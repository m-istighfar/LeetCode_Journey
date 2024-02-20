/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    let n = nums.length
    let map = new Map()
    let ans = []

    for (const num of nums) {
        map.set(num, true)
    }

    for (let i = 1; i < n+1; i++) {
        if (map.get(i) !== true) {
            ans.push(i)
        }
    } 

    return ans
    
};