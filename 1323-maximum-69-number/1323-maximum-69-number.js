/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let numStr = String(num).split("");

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] == 6) {
      numStr[i] = 9;
      break;
    }
  }

  return Number(numStr.join(""));
};