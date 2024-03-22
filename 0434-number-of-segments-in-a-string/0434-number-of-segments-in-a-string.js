/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

    if (s.trim() == "") return 0
    
    let count = 0
    let arrS = s.trim().replace(/\s+/g," ").split(" ")

    console.log(arrS)

    return arrS.length
};