// start looping with a variable called i at the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i-1;
// if arr[j] > arr[j+1] swap!
// return the sorted array

function bubbleSort (arr) {
    for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
       for (let j = 0; j < i - 1; j++) {
           console.log( arr, arr[j], arr[j+1])
           if (arr[j] > arr[j+1]) {
               swap(arr, j, j+1)
               noSwaps = false;
            };           
       }
       console.log('ONE REP')
       if (noSwaps) break;
    }
    return arr;
}

const swap = (arr, ind1, ind2) =>{
    return [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}

console.log(bubbleSort([7,5,66,8,32,3]))