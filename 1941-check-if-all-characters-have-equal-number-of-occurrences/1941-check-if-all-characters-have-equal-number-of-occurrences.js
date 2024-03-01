/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {

    let map = new Map()
    let set = new Set()

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for (const value of map.values()) {
        set.add(value)
    }

    return set.size == 1
    
};