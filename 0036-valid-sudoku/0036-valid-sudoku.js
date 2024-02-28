/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = new Array(9).fill(null).map(() => new Set());
  let col = new Array(9).fill(null).map(() => new Set());
  let box = new Array(9).fill(null).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let check = board[i][j];
      let sq = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (check !== ".") {
        if (row[i].has(check) || col[j].has(check) || box[sq].has(check)) {
          return false;
        } else {
          row[i].add(check);
          col[j].add(check);
          box[sq].add(check);
        }
      }
    }
  }

  return true
};
