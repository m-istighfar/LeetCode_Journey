/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {


    let prefix = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length-1])

    }

    let ans = new Array(nums.length).fill(-1,0,k).fill(-1,nums.length-k,nums.length+1)

   

    for (let i = k; i < nums.length-k;i++) {
        ans[i] = Math.floor((prefix[i+k] - prefix[i-k] + nums[i-k]) / (2*k+1))
    }
     return ans
};