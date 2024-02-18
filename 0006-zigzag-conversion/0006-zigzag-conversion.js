/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let bawah = true;
  let baris = 0;
  let map = {};

  if (numRows == 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    if (bawah) {
      map[baris] = (map[baris] || "") + s[i];

      if (numRows - baris == 1) {
        bawah = false;

        baris--;
      } else {
        baris++;
      }
    } else {
      map[baris] = (map[baris] || "") + s[i];
      if (baris == 0) {
        bawah = true;

        baris++;
      } else {
        baris--;
      }
    }
  }

  let ans = "";

  for (let i = 0; i < numRows; i++) {
    if (map[i] != undefined) {
      ans = ans + map[i];
    }
  }

  return ans;
};
