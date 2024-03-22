/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    
    let map = new Map()
    
    for (let num of nums) {
        map.set(num, true)
    }
    
    let ans = []
    
    for (let i = 0; i < l.length; i++) {
        let numPart = nums.slice(l[i],r[i]+1)
        numPart.sort((a,b) => a-b)
        let diff = numPart[1] - numPart[0]
        for (let j = 2; j < numPart.length; j++) {
            if (numPart[j] - numPart[j-1] !== diff) {
                ans.push(false)
                break
            }
        }
        if (ans[i] == undefined) {
            ans.push(true)
        }
    }
    
    return ans
    
};