/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = new Map()
    let ans = []
    for (let i = 0; i < groupSizes.length ; i++) {
        
        map.set(groupSizes[i], (map.get(groupSizes[i]) || []).concat([i]) )
        
        if (map.get(groupSizes[i]).length == groupSizes[i] ) {
            ans.push(map.get(groupSizes[i]))
            map.delete(groupSizes[i])
        }
    }
    
    return ans
    
    
   
};