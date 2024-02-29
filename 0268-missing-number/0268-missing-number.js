/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let map = new Map()

    for (const num of nums) {
        map.set(num, true)
    }



    for (let i = 0; i <= nums.length; i++) {

        if (!map.has(i)) return i
    }


    
};