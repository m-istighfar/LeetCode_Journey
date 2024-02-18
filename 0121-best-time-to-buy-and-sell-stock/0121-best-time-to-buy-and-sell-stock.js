/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {



    let profit = 0
    let min = prices[0]
    let max = 0

    for (let i = 0; i < prices.length  ; i++) {
      profit = prices[i] - min;
      max = Math.max(max, profit);
      min = Math.min(min, prices[i])
    }

    return max;
    
};