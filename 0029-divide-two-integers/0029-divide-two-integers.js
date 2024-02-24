/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    let ans = Math.trunc(dividend/divisor)

    if (ans > (2**31) - 1) {
        return (2**31) - 1
    } else  if (ans < (-(2**31))) {
        return  (-(2**31))
    } else return ans

};