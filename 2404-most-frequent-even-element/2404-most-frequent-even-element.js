/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    
    let evenMap = new Map()
    
    for (let num of nums) {
        if (num % 2 === 0) {
            evenMap.set(num, (evenMap.get(num) || 0) + 1)
        }
    }
    
    if (evenMap.size === 0) return -1;
    
    let sortedEvenMap = [...evenMap.entries()].sort((a, b) => {
        if (b[1] !== a[1]) { 
            return b[1] - a[1];
        } else { 
            return a[0] - b[0];
        }
    });
    
 
    return sortedEvenMap[0][0];
};