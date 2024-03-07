/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {

    let set = new Set(arr)
    let curr = 0

    for (i = 1; i <= arr[arr.length-1]+k;i++) {
        if (!set.has(i)) {
            curr++
        }

        if (curr == k) {
            return i
        }
    }
    
};