/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    
    let arr = s.split(" ")
    let ans = []
    
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        ans[word[word.length-1]-1] = word.split("").splice(0, word.length-1).join("") 
    }
    
    return ans.join(" ")
    
};