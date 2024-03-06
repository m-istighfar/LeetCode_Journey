/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let map = new Map();

  for (let char of moves) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let Y = (map.get("U") || 0) - (map.get("D") || 0);
  let X = (map.get("L") || 0) - (map.get("R") || 0);



  if (Y == 0 && X == 0) {
    return true;
  } else return false;
};


