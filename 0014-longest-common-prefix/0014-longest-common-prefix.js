/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    strs.sort((a,b) => a.length - b.length)

    console.log(strs)

    let base = strs[0];
    console.log(base, "base")


    for (let i = 1; i < strs.length; i++) {

        while (strs[i].indexOf(base) !== 0) {

            base = base.slice(0, base.length-1)
        }
    }

    if (base.length !== 0) {
        return base
    } else return ""

    
};