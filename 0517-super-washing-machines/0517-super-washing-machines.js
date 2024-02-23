/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  let sum = machines.reduce((acc, curr) => acc + curr, 0);

  if (sum % machines.length !== 0) return -1;

  let target = sum / machines.length;

  let bal = 0;
  let min = 0;

  for (let i = 0; i < machines.length; i++) {
    bal = bal + machines[i] - target;
    min = Math.max(min, Math.abs(bal), machines[i] - target);
  }

  return min;
};
