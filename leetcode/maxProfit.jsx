// maxProfit = function(prices) {
//     let left = 0;
//     let right =1;
//     let profit = 0;

//     while (right < prices.length){
//         if(prices[left] < prices[right]){

//             profit = prices[right] - prices[left];
//             console.log(profit)
//             left++
//             right++
//         } else{
//             right ++;
//         }
//     }
//     return profit;
// };

// console.log(maxProfit([7,1,5,3,6,4]))

maxProfit = function(prices) {
    let left = 0;
    let right =1;
    let profit = 0;
    
    while (right <= prices.length){
        if(prices[left] < prices[right]){
            if(prices[left+1] < prices[left]) left ++;
            profit += prices[right] - prices[left];
            console.log(left, right, profit)
            left = right;
            right++;
        } else{
            right ++;
        }
        if(right==prices.length-1 && left !== prices.length -2){
            left++;
            right= left+1;
        }
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))