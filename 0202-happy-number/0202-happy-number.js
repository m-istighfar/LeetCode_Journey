/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = {};

  while (n !== 1 && seen[n] !== true) {
    seen[n] = true;

    let sum = 0;
    let digit = 0;

    while (n > 0) {
      digit = n % 10;
      sum = sum + digit ** 2;
      n = Math.floor(n / 10);
    }
    n = sum;
  }


  return n == 1;
};


