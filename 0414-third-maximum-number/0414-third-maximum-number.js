/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums)

    set =  [...set].sort((a,b) => a - b)

    console.log(set)

    if (set[set.length-3] !== undefined) {
        return set[set.length-3]
    } else return set[set.length-1]
};