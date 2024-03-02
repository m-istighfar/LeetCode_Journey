/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let rowMap = new Map();
  let colMap = new Map();

  let ans = 0;

  let row = 0;

  for (const gr of grid) {
    rowMap.set(row, gr.join(","));
    row++;
  }

  for (let i = 0; i < grid.length; i++) {
    let colStr = [];
    for (let j = 0; j < grid.length; j++) {
      colStr.push(grid[j][i]);
    }
    colMap.set(i, colStr.join(","));
  }

  for (const rowValue of rowMap.values()) {
    for (const colValue of colMap.values()) {
      if (rowValue === colValue) ans++;
    }
  }



  return ans;
};
