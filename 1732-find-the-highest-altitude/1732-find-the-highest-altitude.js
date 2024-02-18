/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

let prefix = [0]

let max = -Infinity
for (let i = 0; i < gain.length; i++) {
    prefix.push(gain[i] + prefix[prefix.length-1])
    max -Math.max(prefix[i], prefix[i+1])
}

return Math.max(...prefix)
    
};