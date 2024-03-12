/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    
    let ans = 0
    let emptyBottles = 0
    
    while (numBottles > 0) {
        ans += numBottles
        emptyBottles += numBottles
        numBottles = Math.floor(emptyBottles/numExchange)
        emptyBottles -= numBottles*numExchange
    }
    
    return ans
    
};