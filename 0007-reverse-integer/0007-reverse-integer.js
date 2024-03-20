/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
 const isNegative = () => {
     return x < 0
 }
    

 let number = Math.abs(x)
 

    
 let ans = 0
 
 while (number > 0) {
     let digit = number % 10
     number = Math.floor(number/10)
     ans = ans * 10
     ans += digit
 }

 if (ans > (Math.pow(2, 31) - 1)) {
            return 0;
        }
    
    return isNegative() ? -1*ans : ans
    
};