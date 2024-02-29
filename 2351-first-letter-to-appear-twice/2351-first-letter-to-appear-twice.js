/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    
    let set = new Set()
    
    for (const char of s) {
        if (set.has(char)) {
            return char
        } else set.add(char)
    }
    
};