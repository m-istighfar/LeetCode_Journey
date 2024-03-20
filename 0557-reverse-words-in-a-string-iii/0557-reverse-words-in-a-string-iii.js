/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    
   let sArr = s.split(" ")
   for (let i = 0; i < sArr.length; i++) {
       let rev = sArr[i].split("").reverse().join("")
       sArr[i] = rev
   }
    
   return sArr.join(" ")
};