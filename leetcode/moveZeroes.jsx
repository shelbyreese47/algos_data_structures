// var moveZeroes = function(nums) {
//     for (let i = 0; i < nums.length; i++){
//         if(nums[i] === 0){
//             if(nums [i+1] === 0){
//                 nums.splice(i,2)
//                 nums.push(0)
//                 nums.push(0)
//             } else{
//             nums.splice(i,1)
//             nums.push(0)
//         }
//     }
//     }
//     return nums;
// };


// const moveZeroes = function(nums) {
//  let numZeroes = 0;
//  for (let i = 0; i < nums.length; i++){
//      if (nums[i] === 0) numZeroes++;
//  }
//  console.log(numZeroes)

//  return nums;
// }

const moveZeroes = function(nums) {
let i = 0;
let j = 0;
while (j< nums.length){
    if (nums[j] === 0) j++;
    else{
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i ++;
        j ++;
    }
}
 return nums;
}


console.log(moveZeroes([0,1,0,3,12]))