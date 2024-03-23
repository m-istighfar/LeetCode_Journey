/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    let set = new Set(arr)
    let zero = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zero++
        }

        if (set.has(arr[i]*2) && arr[i] !== 0 ) {
            return true
        }
    }
    
    return zero > 1
    
};