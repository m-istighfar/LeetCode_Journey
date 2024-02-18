/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    if (str1 + str2 !== str2 + str1) return ""

    function gdc(x,y) {

        if (!y) {
            return x
        }
        return gdc(y, x%y)
    }

    let n = str1.length;
    let k = str2.length

    result = gdc(n,k)

    return str1.slice(0, result)
    
};