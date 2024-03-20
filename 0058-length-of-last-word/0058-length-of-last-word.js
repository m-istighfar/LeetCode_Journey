/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  
    let sArr = s.trim().replace(/\s+/g, " ").split(" ")
    
    return sArr[sArr.length-1].length
    
};