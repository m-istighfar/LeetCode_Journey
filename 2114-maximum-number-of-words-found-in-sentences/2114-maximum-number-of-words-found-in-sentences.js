/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    let ans = 0

    for (let str of sentences) {
        let wordStr = str.split(" ").length
        ans = Math.max(ans, wordStr)
    }
    
    return ans
};