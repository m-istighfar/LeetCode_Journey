/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let digits = Array.from(String(num), Number).sort((a, b) => a - b);

  let num1 = digits[0] * 10 + digits[2];
  let num2 = digits[1] * 10 + digits[3];

  return num1 + num2;
};
