/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    nums.sort((a,b) => a-b)

    let map = new Map();
    let ans = []

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }


    for (let i = 1; i < nums.length+1;i++) {
        if (map.get(nums[i]) == 2) {
            map.set(nums[i], 1)
            ans[0] = nums[i]
        }
        

        if (!map.has(i)) {
            ans[1] = i
        }
    }

    return ans
    
};