/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    
    let ans = ""
    
    while (columnNumber > 0) {
        let char = (columnNumber - 1) % 26
        ans =  String.fromCharCode(char + 65) + ans
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    
    return ans
    
};