/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    
    let arrNum = Array.from(String(num),Number).sort((a,b) => a-b)
    let odd = arrNum.filter(num => num % 2 == 1 )   
    let even = arrNum.filter(num => num % 2 == 0 )  
    
    let ans = ""
    
    for (let i = 0; i < arrNum.length; i++) {
        if (String(num)[i] % 2 == 0) {
            ans += even.pop()
        } else {
            ans += odd.pop()
        }
    }
    
    return Number(ans)
    
};