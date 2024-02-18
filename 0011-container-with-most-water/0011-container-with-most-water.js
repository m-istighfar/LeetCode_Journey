/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0, right = height.length-1; ans = 0;
    

    while (left < right) {


    let y = Math.min(height[left], height[right])
  
    ans = Math.max(ans, (right-left) * y )
 


    if (height[left] < height[right]) {
    left++
    } else right--
}

return ans
    


    
};