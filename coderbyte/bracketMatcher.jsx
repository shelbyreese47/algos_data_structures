function BracketMatcher(str) { 

  // code goes here  
  let arr = str.split("");

  let left = 0;
  let right = 0;
  let diff = 0;

  for ( let i = 0; i < arr.length; i++){
    if(arr[i] === "(") left++;
    if(arr[i] === ")") left--;
    if(left < 0 ) return 0;
  }
  return left===0 ? 1 : 0; 

}


console.log(bracketMatcher('the color re(d))()(()')) //0