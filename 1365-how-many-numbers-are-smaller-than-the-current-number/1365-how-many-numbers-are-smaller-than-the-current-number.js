/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let map = new Map()

    let ans = []

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }


    for (let num of nums) {
        let count = 0;
        for (let [key, value] of map) {
            if (key < num) {
                count += value;
            }
        }
        ans.push(count);
    }

    return ans;

    
};