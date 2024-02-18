/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);

  console.log(points);

  start0 = points[0][1];

  let ans = 1 ;

  for (let i = 1; i < points.length; i++) {
    if ( start0 < points[i][0] && start0 < points[i][1]) {
        ans++
        start0 =points[i][1];
    }
  }

  return ans;
};
