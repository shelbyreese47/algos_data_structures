// const  removeDuplicates = function(nums) {
//     let unique = Array.from(new Set (nums));
//     let result = `${unique.length}, nums = ${unique}`
//     return result;
// };


const removeDuplicates = function(nums) {
    let left = 0;
    let right = 1;
    while (left < right && right < nums.length){
        if (nums[left] === nums[right]){
            right ++;
        } else {
            left ++;
            nums[left] = nums[right];
            right ++;
        }
    }
    
    return left+1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))