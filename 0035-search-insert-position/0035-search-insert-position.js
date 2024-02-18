/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let insTarget = 0;

    for (let i = 0; i < nums.length ; i++) {

        if (nums[i] == target) {
            return i
        } else {
            if (nums[i] < target)
            insTarget = i + 1
        }

    }

    return insTarget

    
};