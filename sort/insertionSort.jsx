// builds up the sort by gradually creating a larger left half which is always sorted
// take the number out- see where it would go within the sorted array, then insert- compare to each number to the left

// start by picking the second element in the array
// compare the second element with the one before it and swap if necessary
// continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// repeate until the array is sorted

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
       let insert = arr[i]
       for (let j = i-1; j>=0 && arr[j] > insert; j--) {
           console.log(i, j )
           arr[j+1] = arr[j];
           arr[j] = insert
    }
}
return arr;
}

console.log(insertionSort([8,5,7,6,9,12,15,8,7,4]))

// works well if data is coming in live
