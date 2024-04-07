/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length;
  const leftToRight = new Array(n).fill(0);
  const rightToLeft = new Array(n).fill(0);
  let operations = 0,
    ballsCount = 0;

  for (let i = 0; i < n; i++) {
    leftToRight[i] = operations;
    ballsCount += boxes[i] === "1" ? 1 : 0;
    operations += ballsCount;
  }

  operations = 0;
  ballsCount = 0;

  for (let i = n - 1; i >= 0; i--) {
    rightToLeft[i] = operations;
    ballsCount += boxes[i] === "1" ? 1 : 0;
    operations += ballsCount;
  }

  const answer = new Array(n);

  for (let i = 0; i < n; i++) {
    answer[i] = leftToRight[i] + rightToLeft[i];
  }

  return answer;
};
