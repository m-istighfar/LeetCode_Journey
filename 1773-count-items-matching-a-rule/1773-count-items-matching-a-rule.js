/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
    let ans = 0
    
    if (ruleKey == "type") {
        key = 0
    } else if (ruleKey == "color") {
        key = 1
    } else key = 2
    
    for (let item of items) {
        if (item[key] == ruleValue) ans++
        }
    
    return ans
    
};