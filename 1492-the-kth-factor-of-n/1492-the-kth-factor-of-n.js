/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    
let factor = []

for (let i = 1; i <= n/2; i++) {
    if (n % i == 0) {
        factor.push(i)
    }
}
    
     factor.push(n)
    
    
    
console.log(factor)
    
return factor.length >= k ? factor[k-1] : -1
    
};