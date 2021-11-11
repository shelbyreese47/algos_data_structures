// have two separate strings, must check if the first string is within the second string
// the characters don't have to be right next to each other but the order matters

// I'm going to start a counter to count each letter that is similar, and two pointers - one on each string. The pointer will never move backward- only forward

function isSubsequence(str1, str2) {
    let counter = 0;
    let one = 0;
    let two = 0;
    while (two < str2.length){
        if (str1[one] === str2[two]){
            counter ++;
            one ++;
        }
        two ++;
    }
    if (counter === str1.length) return true
    return false
}

console.log(isSubsequence('hello','hello world')) //t
console.log(isSubsequence('sing','sting')) //t
console.log(isSubsequence('abc','abracadabra')) //t
console.log(isSubsequence('abc','acb')) //f

// his version
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}