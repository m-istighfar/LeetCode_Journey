/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let set = new Set(jewels)
    let ans = 0;

    for (const char of stones) {
        if (set.has(char)) {
            ans++
        }
    }

    return ans
    
};