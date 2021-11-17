function longestWord(sen) {
    let newsen = sen.split(' ')
    console.log(newsen[0].length)
    let max = 0;
    let longestWord = '';
    for (let i = 0; i < newsen.length; i++){
        if (newsen[i].length > max) {
            max = newsen[i].length;
            longestWord = newsen[i];
        };
    }
    return longestWord; 
}

// console.log(longestWord('hello there my name is Shelby')) //Shelby
// console.log(longestWord('123456789 98765432')) //123456789

// function LongestWord(sen) { 

//   // code goes here  
//     let b =sen.replace(/[^a-z0-9 ]/gi, '')
//     let newsen = b.split(' ')
//     let max = 0;
//     let longestWord = '';
//     for (let i = 0; i < newsen.length; i++){
//         if (newsen[i].length > max) {
//             max = newsen[i].length;
//             longestWord = newsen[i];
//         };
//     }
//     return longestWord;

// }
   
// keep this function call here 
console.log(LongestWord('fun!!%$% time'))


function LongestWord(sen) { 

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z]+/gi);
  console.log(arr)

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];
         
}

function LongestWord(sen) { 
  return sen.match(/w+/g).reduce((item, next) => item.length >= next.length ? item : next);  
}

