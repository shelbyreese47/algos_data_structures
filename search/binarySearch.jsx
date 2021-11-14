// HAS to be sorted!

// pick a left, middle and right

function binarySearch(arr,val){
    let left = 0;
    let right = arr.length-1;
    let middle = Math.floor((right+left)/2);

    while(arr[middle] !== val && left <= right ){
    if (arr[middle] === val) return middle;
    if (val < arr[middle]) right = middle-1;
    else left = middle+1;
    middle = Math.floor((right+left)/2);
    }
    return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5],2)) //1
console.log(binarySearch([1,2,3,4,5],3)) //2
console.log(binarySearch([1,2,3,4,5],5)) //4
console.log(binarySearch([1,2,3,4,5],6)) //-1

// function binarySearch(arr, elem){
//     let start = 0;
//     let end = arr.length -1;
//     let middle = Math.floor((start + end)/2);
//     console.log(start, middle, end)

//     while( arr[middle] !== elem){
//         if (elem < arr[middle]){
//             end = middle - 1;
//     } else {
//         start = middle + 1;
//     }
//     middle = Math.floor((start + end)/2);
//     console.log(start, middle, end)
//     }
// }