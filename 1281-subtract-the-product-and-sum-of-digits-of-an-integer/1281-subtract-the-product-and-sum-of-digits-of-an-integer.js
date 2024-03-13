/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    let sumAdd = 0
    let sumProduct = 1
    
    while (n > 0) {
        let digit = n %  10
        n = Math.floor(n/10)
        sumAdd += digit
        sumProduct *= digit
    }
    
    return sumProduct - sumAdd
    
};