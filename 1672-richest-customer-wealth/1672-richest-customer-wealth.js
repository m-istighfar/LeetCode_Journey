/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    const sumBank = (arr) => {
        let sum = arr.reduce((acc,curr) => acc+curr, 0)
        return sum
    }
    
    let maxWealth = 0
    
    for (let item of accounts) {
        maxWealth = Math.max(maxWealth, sumBank(item))
    }
    
    return maxWealth
    
    
    
};