/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    
    special.sort((a,b) => a-b)

    let ansDiff = special[0] - bottom

    for (let i = 1; i < special.length; i++) {
        let diff = special[i] - special[i-1] - 1
        ansDiff = Math.max(ansDiff, diff)
    }

    return Math.max(ansDiff, top - special[special.length-1])
};