function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while( left < right ){ //while there are at least 2 indices we are looking at
        let sum = arr[left] + arr[right];
        if ( sum ===0 ){
            return [arr[left], arr[right]];
        } else if ( sum > 0 ){
            right --; //right goes left one
        } else {
            left ++; //left goes right one
            //this will eventually break us out of our while loop since the left and right will meet
        }
    }

}
// console.log(sumZero([-4,-3,-2,-1,0,1,2,10]))

console.log(sumZero([-4,-3,-2,-1,0,5,6,7,10]))