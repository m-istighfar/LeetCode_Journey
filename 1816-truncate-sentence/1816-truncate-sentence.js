/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    let arrS = s.split(" ")
    
    
    return arrS.slice(0,k).join(" ")
    
};