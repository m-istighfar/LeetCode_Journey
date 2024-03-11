/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let curr = 0
    let ans = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "L") {
            curr++
        } else {
            curr--
        }
        
        if (curr == 0) ans++
    }
    
    return ans
    
};