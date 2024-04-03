/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    
    piles.sort((a,b) => b-a)
    
    let pilesPick = piles.slice(0,piles.length-(piles.length/3))
    
    console.log(pilesPick)
    
    let ans = 0
    
    for (let i = 0; i < pilesPick.length; i += 2) {
        ans += pilesPick[i+1] 
    }
    
    return ans
    
};