// split up the array until you hit 0 or 1
// works by selecting a single element (pivot) and find the index where the pivot should end up in the sorted array
// can pick index 0 as our pivot
// if element < pivot count ++ -> at the end pivot will go to the count index

function quickSort(arr, start = 0, end = arr.length-1){
    if (start < end) {
    let pivotIndex = pivotHelper(arr, start, end);
    quickSort(arr, start, pivotIndex-1);
    quickSort(arr, pivotIndex+1, end);
    }
    return arr;
}

// pivot helper
function pivotHelper(arr, start=0, end=arr.length-1){
    // if (arr.length <= 1) return arr;
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start+1; i <= end; i++){
        if (pivot > arr[i]){
            swapIdx ++;
            swap(arr, swapIdx,i)
         }
        // console.log(swapIdx)
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}

function swap(arr, ind1, ind2) {
    [arr[ind1], arr[ind2]]=[arr[ind2], arr[ind1]];
}

console.log(quickSort([6,4,3,8,7,2,1]))