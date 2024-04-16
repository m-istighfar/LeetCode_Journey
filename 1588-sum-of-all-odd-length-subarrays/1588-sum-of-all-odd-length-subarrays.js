var sumOddLengthSubarrays = function(arr) {
    let totalSum = 0;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let startOptions = i + 1;
        let endOptions = n - i;
        
        let totalSubarrays = startOptions * endOptions;
        
        let oddCount = Math.floor((totalSubarrays + 1) / 2);
        
        totalSum += arr[i] * oddCount;
    }
    
    return totalSum;
};
