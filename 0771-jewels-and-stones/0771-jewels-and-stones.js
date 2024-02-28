/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let map = new Map();

    for (let s of stones) {
        map.set(s, (map.get(s) || 0) + 1)
    }

    let count = 0;

    for (let s of jewels) {
        if (map.has(s)) {
            count += map.get(s)
        }
    }

    return count
    
};