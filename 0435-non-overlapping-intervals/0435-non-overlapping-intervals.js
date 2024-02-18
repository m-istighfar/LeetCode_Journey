/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let ans = 0;
  

  intervals.sort((a, b) => a[1] - b[1]);

  console.log(intervals)

  let end = intervals[0][1]
  console.log(end)

  for (let i = 1; i < intervals.length ; i++) {
    if (end > intervals[i][0] ) {
    

        ans++;
    } else {
        end = intervals[i][1]
    }
  }

  return ans;
};
