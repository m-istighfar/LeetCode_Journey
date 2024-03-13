/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {

    let prefix = [1]

    for (let i = 2; i <= n; i++) {
        prefix.push(i+prefix[prefix.length-1])
    }
    
     for (let i = 1; i <= n; i++) {
        if (prefix[i-1] == prefix[n-1] - prefix[i-1] + i) {
            return i
        }
    }

    return -1
    
};