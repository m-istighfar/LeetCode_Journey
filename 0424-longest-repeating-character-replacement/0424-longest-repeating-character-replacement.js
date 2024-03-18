/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let ans = 0
    let cur = 0
    let left = 0
    let maxCount = 0
    let map = new Map()
    
    
    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1)
        
        maxCount = Math.max(maxCount, map.get(s[right]))
        
        if (right - left + 1 - maxCount > k) {
            map.set(s[left], map.get(s[left]) - 1) 
            left++
        }
        
        ans = Math.max(ans, right-left+1)
    }
    
    return ans
    
};