/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    
    
    let ans = 0;
    
    if (citations.length == 1 ) {
        if (citations[0] == 0) {
        return 0
     } else {
         return 1
     }
    }

    
    citations.sort((a,b) => b-a)
    
    for (let i = 0 ; i < citations.length ; i ++) {
        
        if (citations[i] > ans ) {
            ans ++
        } 
        
    }
    
    return ans
    
};