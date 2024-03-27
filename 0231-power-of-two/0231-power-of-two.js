/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    let answer = 0
    
    if (n <= 0) return false;
    
    
    while (n !== 0) {
        if (n & 1 == 1) {
            answer++
        }
        n = n >> 1
    }
    
    return answer  == 1
};