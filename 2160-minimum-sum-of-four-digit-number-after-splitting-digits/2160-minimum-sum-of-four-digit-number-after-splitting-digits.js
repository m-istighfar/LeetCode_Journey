/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    
    let arr = Array.from(String(num), Number).sort((a,b) => a-b)
    
    let arr1 = Number([arr[0],arr[2]].join(""))
    let arr2 = Number([arr[1],arr[3]].join(""))
    
    return arr1+arr2
};