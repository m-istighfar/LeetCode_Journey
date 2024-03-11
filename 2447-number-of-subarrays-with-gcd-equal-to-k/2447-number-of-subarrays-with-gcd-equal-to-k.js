/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    
   const gcd = (a,b) => b == 0 ? a : gcd(b, a%b)
    
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        let currGcd = 0
         for (j =  i; j < nums.length; j++) {
               currGcd = gcd(currGcd, nums[j]);

             if (currGcd == k) {
                 count++
             } else if (currGcd < k) {
                 break
             }
         }
    }
      
    return count
};