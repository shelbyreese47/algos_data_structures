function sameFrequency (int1, int2){
    // console.log(int1)
    let arr1 = int1.toString().split('');
    let arr2 = int2.toString().split('');
    let counter1 = {};
    let counter2 = {};
    for (let i = 0; i < arr1.length; i++) {
        counter1[arr1[i]] = ++counter1[arr1[i]] || 1;
    }
    for (let i = 0; i < arr2.length; i++){
        counter2[arr2[i]] = ++counter2[arr2[i]] || 1;
    }
    if (JSON.stringify(Object.keys(counter1))!== JSON.stringify(Object.keys(counter2))) return false;
    if (JSON.stringify(Object.values(counter1)) !== JSON.stringify(Object.values(counter2))) return false;
    else return true;
}

console.log(sameFrequency(182,281)) //t
console.log(sameFrequency(34,14)) //f
console.log(sameFrequency(3589578,5879385)) //t
console.log(sameFrequency(22,222)) //f


// His solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}