/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {

    let map = new Map()
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let count = 0

    for (let i = 0; i < key.length; i++) {
        if (key[i] !== " " && !map.has(key[i])) {
            map.set(key[i], alphabet[count])
            count++
        }
    }

    let arr = message.split("")
    let result = ""
    for (let char of arr) {
        if (char !== " ") {
            result += map.get(char)
        } else {
            result += " "
        }
    }

    return result
};