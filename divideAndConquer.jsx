// Binary Search
// Accepts a SORTED array of integers, write a function that accepts a value and returns the index where the value passed to the function is located
// return -1 if not found

// this is log n!!!

function search(arr, val){
    let min = 0;
    let max = arr.length - 1;
    if (val < arr[min] || val > arr[max]) return -1; // the number isn't in the array

    while (min <= max){
    let midpoint = Math.floor((min+max)/2);
    // console.log('midpoint', midpoint)
    let currentElement = arr[midpoint];
    // console.log('current', currentElement)
    if (arr[midpoint] < val){
        min = midpoint + 1;
        // console.log('new min', min)
    }
    else if (arr[midpoint] > val){
        max = midpoint - 1;
        // console.log('next max', max)
    } else return midpoint;
    }
return -1;
}

console.log(search([1,2,3,4,5,6],4)) //3
console.log(search([1,2,3,4,5,6],6)) //5
console.log(search([1,2,3,4,5,6],11)) //-1