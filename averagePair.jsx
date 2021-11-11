// true if there is a pair in the array that has an average of the param

function averagePair(arr, value) {
    if (arr.length < 2) return false;
    let left = 0;
    let right = 1;
    while (right < arr.length){
        let avg = (arr[left]+arr[right])/2;
        // console.log(avg)
        if(avg === value) return true
        right ++;
        if(right === arr.length -1){
            left ++;
            right = left +1;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5)) //t
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) //t
console.log(averagePair([-1,0,3,4,5,6],4.1)) //f
console.log(averagePair([],4)) //f

// his solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
