// function accepts two parameters- an array of positive integers and a positive integer
// should return the minimal length of a continuous subarray of which the sum is greater than or equal to the integer passed to the function. 
// if there isn't one, return 0 instead

// going to need two variables- a tempLen and a minLen
// once you hit >= value - left pointer moves right and you start sliding right again
// if that tempLen < minLen, update minLen

// function minSubArrayLen(arr, value){
//     let tempLen = 0; //since these are all positive integers- 0 is as low as we can go
//     let minLen = 0;
//     let tempSum = 0;
//     // first lets go through the whole array and make sure it can be done
//     for ( let i = 0; i < arr.length; i++){
//         tempSum = 
//     }
//     for ( let i = 0; i < arr.length; i++){
//         if (tempSum >= value) { // if tempSum is greater than the value, the tempLen should be compared to minLen
//             minLen= Math.min(tempLen, minLen);

//             return minLen;
//         }
//             tempSum += arr[i]; // this will keep adding values to tempSum 
//     }

// }

// console.log(minSubArrayLen([2,3,1,2,4,3],7)) //2
// console.log(minSubArrayLen([2,1,6,5,4],9)) //2
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)) //1
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) //3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) //5
// console.log(minSubArrayLen([4,3,3,8,1,2,3],11)) //2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) //0

// We are going to do two pointers... not sliding window
// the left pointer will start at ind 0 and the right pointer will travel down the array
// there will be an ongoing sum the entire time- if that sum gets to be => value, log the right pointer-left pointer and save it to a variable
// if the right pointer traverses the entire array without meeting the condition- return 0
// once the right pointer has found a match- the left pointer will increase 1, the right pointer will be left + 1 and the traversal will start over

function minSubArrayLen(arr, value){
let left = 0;
let right = 0;
let lenMin = Infinity;
let lenTemp = 0;
let tempSum = 0;
if (arr.length < 2 && arr[0]< value){
    return 0;
} else if (arr.length < 2 && arr[0] >= value) return 1; //two edge cases

while (left < arr.length){
    if (tempSum < value && right < arr.length){
        // console.log(arr[right])
        tempSum += arr[right] 
        // console.log('tempSum',tempSum)
        right ++;
    }
    else if (tempSum >= value) {
        // console.log('left', left, 'right', right)
        lenMin = Math.min(lenMin, right-left);
        // console.log('lenMin',lenMin);
        tempSum -= arr[left];
        left ++;
    }
    else break;
}
return lenMin === Infinity ? 0 : lenMin;

}

console.log(minSubArrayLen([2,3,1,2,4,3],7)) //2
console.log(minSubArrayLen([2,1,6,5,4],9)) //2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)) //1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) //3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) //5
console.log(minSubArrayLen([4,3,3,8,1,2,3],11)) //2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) //0



function minSubArrayLen2(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}