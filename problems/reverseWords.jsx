function reverseWords(str) {
  // Go for it
  let arr = str.replace(/,/g,' ').split(' ');
  arr = arr.map(word => word.split('').reverse().join(''));
//   for(let i=0; i< arr.length; i ++){
//     arr[i] = arr[i].split('').reverse().join('')
//   }
  console.log('reversed',arr)
  return arr.join(' ')
}

console.log(reverseWords('The,quick,brown,fox,jumps,over,the,lazy,dog.'))
