/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  while (num >= 10) {
    num = checkSum(num);
  }

  return num;
};

const checkSum = (n) => {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }

  return sum;
};
