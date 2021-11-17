var twoSum = function(nums, target) {
    // if nums [i] > target -> move on;
    // if nums.length < 2 -> return null;
    // two pointers, one starting at 0 and one at 1
    // check the sum
    // if the sum = target -> return an array of the correct indeces
    // if the sum !== target -> move forward
    let correct = [];
    let i = 0;
    let j = 1;
    if (nums.length < 2) return null;
    // if (nums[i] > target){
    //     i++;
    //     j++
    // }
    while(i<nums.length){
        console.log(i,j)
          if (nums[i] + nums[j] === target){
              correct.push(i,j)
              return correct;
          }
        j++;
        if (j >= nums.length) {
            i++;
            j = i+1;
        }
          }
    return null;
    
};

console.log(twoSum([3,2,3],6))
console.log(twoSum([2,5,5,11],10))
console.log(twoSum([0,3,-3,4,-1],-1))