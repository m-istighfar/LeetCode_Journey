/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  let tweny = 0;

  for (const num of bills) {
    if (num == 5) {
      five++;
    } else if (num == 10) {
      five--;
      if (five < 0) {
        return false;
      }
      ten++;
    } else if (num == 20) {
      if (ten > 0) {
        ten--;
        five--;
      } else {
        five -= 3;
        if (five < 0) {
          return false;
        }
      }
    }
  }

  return five >= 0;
};
