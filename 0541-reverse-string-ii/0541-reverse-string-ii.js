/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
    let result = ""
    
    for (let i = 0; i < s.length; i += 2*k) {
        
        let part1 = s.substring(i, i+k)
        let part2 = s.substring(i+k, i+2*k)
        
        let revPart1 = part1.split("").reverse().join("")
        
        result += revPart1 + part2
    }

    return result
};