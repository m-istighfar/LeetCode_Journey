/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    
    let map = new Map()
    let ans = 0
    let curr = 0
    let left = 0
    
    for (let right = 0; right < fruits.length; right++) {
       map.set(fruits[right], (map.get(fruits[right]) || 0) + 1) 
        
       while (map.size > 2) {
           map.set(fruits[left], map.get(fruits[left]) - 1)
           if (map.get(fruits[left]) == 0) {
               map.delete(fruits[left])
           }
           left++
       }
        
        ans = Math.max(ans, right-left+1)
        
    }
    
    return ans
    
};