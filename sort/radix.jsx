function getDigit(num, i){
    return Math.floor(Math.abs(num)/ Math.pow(10,i)) % 10;
}
function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums){
    let most = 0;
    for (let i = 0; i < nums.length; i++) {
        if (digitCount(nums[i]) > most) most = digitCount(nums[i]);
        
    }
    return most;
}

// console.log(mostDigits([23,567,89,12234324,90]))

function radix(nums){
    let most = mostDigits(nums);
    for (let i = 0; i < most; i++) {
        let digitBuckets = Array.from({length: 10}, ()=>[]);
       for (let j = 0; j < nums.length; j++) {
            digitBuckets[getDigit(nums[j], i)].push(nums[j])
       }
        // console.log(digitBuckets)
        nums = [].concat(...digitBuckets)
        // console.log(nums)
    }
    return nums;
}

console.log(radix([23,345,5467,12,2345,9852]))