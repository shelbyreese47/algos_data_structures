// first implement a function responsible for merging two sorted arrays
// given two arrays which are sorted- this helper function should create a new array which is also sorted and consists of all of the elements in the two input arrays

function mergeSort(arr) {
    // break up the array in halves until you have arrays that have one element
    // use slice recursively
    // once we have small arrays, use merge function until we are back to the full array - return merged array
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right)
}

function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while (i< arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

console.log(mergeSort([50,10,8,5,15,24]))