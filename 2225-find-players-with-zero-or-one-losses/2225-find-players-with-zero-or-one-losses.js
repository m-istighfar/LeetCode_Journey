var findWinners = function (matches) {
  let win = new Map();
  let lose = new Map();

  let ans = [];
  let ans2 = [];

  for (const match of matches) {
    win.set(match[0], (win.get(match[0]) || 0) + 1);
    lose.set(match[1], (lose.get(match[1]) || 0) + 1);
    if (!win.has(match[1])) win.set(match[1], 0);

  }

  for (const [key, value] of win) {
    if (!lose.has(key)) {
      ans.push(key);
    }
  }

  for (const [key, value] of lose) {
    if (value === 1) {
      ans2.push(key);
    }
  }

  ans.sort((a, b) => a - b);
  ans2.sort((a, b) => a - b);

  return [ans, ans2];
};