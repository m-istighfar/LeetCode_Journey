/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {

    let prefix = [nums[0]]

    for (let i = 1; i < nums.length;i++) {
        prefix.push(nums[i] + prefix[prefix.length-1])
    }

   

    let ans = 0;

     for (let i = 0; i < nums.length -1;i++) {
        if (prefix[i] >= (prefix[prefix.length-1] - prefix[i] )) ans++
    }

    return ans
    
};