/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
   let rank = [...score]
   rank.sort((a,b) => b-a)
 
    
   let ans = ["Gold Medal","Silver Medal","Bronze Medal"]
   for (let i = 3; i < score.length; i++) {
       ans[i] = `${i+1}`
   }
   let resul = []

    
   for (let s of score) {
       resul.push(ans[rank.indexOf(s)])
   }

    return resul
    
};