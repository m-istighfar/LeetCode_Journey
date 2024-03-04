/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map()
    let set = new Set()
    
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    } 
    
    for (const value of map.values()) {
        set.add(value)
    }
    
    return set.size == map.size
};