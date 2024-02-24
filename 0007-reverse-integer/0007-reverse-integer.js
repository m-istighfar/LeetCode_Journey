/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {


    let ans = []
    let digit = 0
    let min = false

    if (x < 0) {
        x = x * -1
        min = true
    }

   

    while (x % 10 == 0 && x !== 0) {
        x = x / 10
    }
    
    while ( x > 0 ) {
      
            digit = x % 10
            ans.push(digit)
            x = Math.floor(x/10)
        
    }

    let sum = 0;
    for (let i = 0; i < ans.length;i++) {
        sum = sum + ans[i] * (10 **  (ans.length-1-i))
    }

    if (sum < (-(2 ** 31)) || sum > (2 ** 31) - 1) {
        return 0
    }
    
    return (min == true) ? sum*-1 : sum
};