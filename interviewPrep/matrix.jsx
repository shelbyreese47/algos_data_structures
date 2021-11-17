let arr = [
    [1,2,3,4],
    [6,2,7,8],
    [2,2,1,9],
    [0,5,2,7]
]
// console.log(arr)

function flipArr(arr){
   return arr[0].map((val,ind) => arr.map(row => row[ind]).reverse())
}

console.log(flipArr(arr));