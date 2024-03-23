/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
     const digits = n.toString().split("").map(Number);

  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      sum += digits[i];
    } else {
      sum -= digits[i];
    }
  }

  return sum;
};