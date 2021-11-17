// start at the beginning- set the min
// loop down the array and compare the min to each value
// if arr[i] < min -> min = arr[i] 
// at the end of the array, swap the two values

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for( let j = i+1; j < arr.length; j++){
            if (arr[lowest] > arr[j]) lowest = j;
        }
        if ( lowest !== i){
            swap(arr, i,lowest)
        }
        
    }
    return arr;
}

const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
}

console.log(selectionSort([3,2,4,6,2,1,3,7,9]))