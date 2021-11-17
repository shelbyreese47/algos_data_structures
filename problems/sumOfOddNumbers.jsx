// function rowSumOddNumbers(n) {
// 	// TODO
//     let row = [];
//   let firstNum = _sum(n-1)*2;
//   console.log(firstNum);
//   function _sum(n){
//       if (n === 0) return 0;
//     return n + _sum(n-1);
//   }
//   for(let i = 0; i<(n*2+1); i++){
//       if(i%2) row.push(firstNum +i)
//   }
//   return row.reduce((a,b)=> a+b)
// }

console.log(rowSumOddNumbers(3))

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

function solution(str, ending){
  return str.endsWith(ending);
}