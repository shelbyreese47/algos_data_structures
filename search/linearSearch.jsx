// accepts an array and a value
// returns the index of vlue in array OR -1

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([10,15,20,25,30],15))
console.log(linearSearch([9,8,7,6,5,4,3,2,1],4))
console.log(linearSearch([100],100))