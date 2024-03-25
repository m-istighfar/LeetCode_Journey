/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let carry = 0;
  let i = num.length - 1;
  let result = [];

  while (i >= 0 || k > 0 || carry > 0) {
    let numDigit = i >= 0 ? num[i] : 0;
    let kDigit = k % 10;

    let sum = numDigit + kDigit + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);

    k = Math.floor(k / 10);
    i--;
  }

  return result;
};
