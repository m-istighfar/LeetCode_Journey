/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let ans = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] != "C" && operations[i] != "D" && operations[i] != "+") {
      ans.push(parseInt(operations[i]));
    } else if ((operations[i] == "C")) {
      ans.pop();
    } else if ((operations[i] == "+")) {
      ans.push(ans[ans.length - 1] + ans[ans.length - 2]);
    } else if ((operations[i] == "D")) {
      ans.push(ans[ans.length - 1] * 2);
    }
  }

  return ans.reduce((a, b) => a + b, 0);
};
