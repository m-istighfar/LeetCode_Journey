/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let left = []


    let baseL = 1
    for (let i = 0; i < nums.length; i++) {
        left[i] = baseL;
        baseL = baseL * nums[i]
    }

    
    console.log(left)

    let right = []
    let baseR = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        right[i] = baseR;
        baseR = baseR * nums[i]
    }

    console.log(right)

    let result = []

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = right[i] * left[i]
       
    }

    return result

    
};