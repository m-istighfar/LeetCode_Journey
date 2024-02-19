/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();

  let digit;

  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      digit = n % 10;
      sum = sum + digit ** 2;
      n = Math.floor(n / 10);
    }
    n = sum;
    if (set.has(n)) return false;
    set.add(n);
  }

  return n == 1;
};

