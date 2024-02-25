/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    nums.sort((a,b) => a-b)

    let base = nums[0] + nums[1] + nums[2];

    let ans = 0, curr = 0

    for (let i = 0 ; i < nums.length-2; i++) {

        let left = i + 1
        let right = nums.length-1

        while (left < right) {
            curr = nums[i] + nums[right] + nums[left]

            if (Math.abs(curr-target) < Math.abs(base - target)) {
                base = curr
            }

            if (curr < target) {
                left++
            } else if (curr > target) {
                right--
            } else return curr
        } 
        
    }

    return base


};