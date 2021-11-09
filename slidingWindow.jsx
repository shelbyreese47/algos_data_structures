// keeping track of a smaller set of data inside a larger set of data

//write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in the array.

function naiveWay(arr, num){
    if ( num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length-num+1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i+j];
        }
    if( temp > max){
        max = temp;
    }
        
    }
return max;
}

// console.log(naiveWay([1,2,5,2,8,1,5],2)) //10
// console.log(naiveWay([1,2,5,2,8,1,5],4)) //17
// console.log(naiveWay([4,2,1,6],1)) //6
// console.log(naiveWay([4,2,1,6,2],4)) //13
// console.log(naiveWay([4,2,1,6],1)) //6
// console.log(naiveWay([],4)) //null
// console.log(naiveWay([4,2,1,6,10],1)) //6

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for ( let i = 0; i < num; i ++){   //setting up an initial max value
        maxSum += arr[i];
        console.log('maxSum', maxSum)
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]; // tempsum - arr[num-num] + arr[num] = 3 - 1 + 5 = 7- arr[3-2]+arr[3] = 7-2+2 
        // what we are doing here is subtracting the previous first number and adding in the new last number- instead of getting a whole new sum
        console.log('temp sum', tempSum)
        maxSum = Math.max(maxSum, tempSum);
        console.log('new max', maxSum)
    }
    return maxSum;
}
console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) //10
// console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) //17
// console.log(maxSubarraySum([4,2,1,6],1)) //6
// console.log(maxSubarraySum([4,2,1,6,2],4)) //13
// console.log(maxSubarraySum([4,2,1,6],1)) //6
// console.log(maxSubarraySum([],4)) //null
// console.log(maxSubarraySum([4,2,1,6,10],1)) //6