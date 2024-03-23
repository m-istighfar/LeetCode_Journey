/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
 
for (let i = 1; i <= k; i++) {
    let n = Math.min(...nums)
    let idx = nums.indexOf(n)
    nums[idx] *= -1
}
    
return nums.reduce((a,b) => a+b,0)

};
