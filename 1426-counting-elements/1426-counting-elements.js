/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {

    let count = 0

    let set = new Set(arr)

    for (const num of arr) {
        if (set.has(num+1)) count++
    }

    return count

    
    
};