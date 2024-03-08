/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {

let map = new Map()
let count = 0;
let max = 0;

for (let num of nums) {
    map.set(num, (map.get(num) || 0 ) + 1)
}

let sortedMap = new Map([...map.entries()].sort((a,b) => b[1] - a[1]))


for (let [keys, values] of sortedMap) {
    max = Math.max(max, values)

    if (max == values) {
        count += values
    } else return count
}

return count
};