/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let arr1 = ""
    let arr2 = ""
    
    for (let str of word1) {
        arr1 += str
    }
    
     for (let str of word2) {
        arr2 += str
    }
    
    return arr1 == arr2
    
    
};