/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    

    ans = s.trim().split(" ");
    return ans[ans.length-1].length

    
    
};