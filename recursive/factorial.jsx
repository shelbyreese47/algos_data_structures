function factorial(num){
    if (num === 0 || num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(0)) 
console.log(factorial(1)) 
console.log(factorial(2)) 
console.log(factorial(4))
console.log(factorial(7))  

function FirstFactorial(num) { 

  // code goes here 
  let newNum=1 ; 
  for (i=num; i>0; i--){
    newNum*= i;
    // console.log(newNum)

  }
  num = newNum;
  return num; 

}