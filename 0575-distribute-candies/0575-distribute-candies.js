/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    
    let set = new Set(candyType) 
    let n = candyType.length/2
    let ans = 0;
    
    for (let num of set) {
        ans++
        n--
        if (n == 0) return ans
    }
    
    return ans
    
};