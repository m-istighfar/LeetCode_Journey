/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {

    let map = new Map()

    for (let nums of arr) {
        map.set(nums, (map.get(nums) || 0) + 1)
    }

    sortedMap = new Map([...map.entries()].sort((a,b) => a[1] - b[1]))

    for (const keys of sortedMap.keys()) {
        if (sortedMap.get(keys) <= k ) {
            k -= sortedMap.get(keys)
            sortedMap.delete(keys)

        }

        if (k == 0) break;
    }

   let set = new Set([...sortedMap.keys()])

   return set.size
    
};