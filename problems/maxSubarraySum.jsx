function maxSubarraySum(arr, num) {
    // first we want to initialize two values
    let maxSum = 0;
    let tempSum = 0; 
    if (arr.length < num) return null; // this is in case the array is less than the length for the window

    for ( let i = 0; i < num; i++){
        tempSum += arr[i]; // this will sum up the first i number of values
        // console.log (tempSum)
        maxSum = tempSum; // initializing the value to the first i components 
    }
    // now we can do our loop
    for ( let i = 1; i < arr.length-num+1; i++){
        // we want to sum the number of values and then compare it to maxSum
        // if we want to do the sliding window, we need to initialize the maxSum differently
        // now we can do our sliding window by using the tempSum, subtracting the previous first value, and adding on the new last value
        tempSum = tempSum - arr[i - 1] + arr[i + num-1];
        // console.log(tempSum);
        if (tempSum > maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)) //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) //39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) //5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) //5
console.log(maxSubarraySum([2,3], 3)) //null