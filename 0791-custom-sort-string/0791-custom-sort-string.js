/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {

    let map = new Map()

    
    for (const char of s) {
      map.set(char, (map.get(char) || 0) + 1)
    }

    result = ""

    for (const char of order) {
       if (map.has(char)) {
           result += char.repeat(map.get(char))
           map.delete(char)
       }
    }

    for (const [key, value] of map) {
        result += key.repeat(value)
    }



    return result
    
};