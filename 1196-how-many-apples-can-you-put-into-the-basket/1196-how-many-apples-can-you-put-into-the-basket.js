/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {

    weight.sort((a,b) => a-b)
    let max = 5000
    let ans = 0

    for (const nums of weight) {
        if (max < nums) {
            break;
        }

        max -= nums
        ans++

    }

    return ans
    
};