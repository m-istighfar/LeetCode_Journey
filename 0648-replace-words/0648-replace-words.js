/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    
    let set = new Set(dictionary)
    
    let arr = sentence.split(" ")
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            let prefix = arr[i].substring(0,j)
            
            if (set.has(prefix)) {
                arr[i] = prefix
                break
            }
            }
    }
    
    return arr.join(" ")
    
};