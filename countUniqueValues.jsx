function countUnique(arr){
    if (arr.length < 2) return arr.length;
    let left = 0;
    let right = 1;
    while (right <= arr.length-1){
        if (arr[left] === arr[right]){
            right ++;
            // console.log('right', right)
        } else {
            left ++;
            arr[left] = arr[right];
            // console.log(arr)
            right ++;
            // console.log('not the same, the number is: ', arr[right], left, right)
        }
    }
return left+1;
}

console.log(countUnique([1,1,1,1,1,2])) //2
console.log(countUnique([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUnique([])) //0
console.log(countUnique([1])) //1
console.log(countUnique([-2,-1,-1,0,1])) //4

function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    var i = 0;
    for (let j = 1; j< arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

[1,1,2,3,3,4,5,6,6,7]

console.log(countUniqueValues([1,1,1,1,1,2])) //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues([])) //0
console.log(countUnique([1])) //1
console.log(countUniqueValues([-2,-1,-1,0,1])) //4