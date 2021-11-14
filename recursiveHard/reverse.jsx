//accepts a string and returns a new string in reverse

// function reverse(str){
//  let count = 0;
//     // console.log(str[str.length-1])
//     // console.log(str.length)
//     str = str.split('');
//     // console.log('string', str)
//     function helper(str){
//         if (count === str.length) return str;
//         let letter =str.splice(0,1)
//         console.log('letter', letter)
//         console.log('before', str)
//         str[str.length-count] = letter;
//         console.log('after', str)
//         count++;
//         // console.log(count, str)
//         helper(str)
//     }
//     helper(str);
//     return str.join('');

// }
// console.log(reverse('awe'))
// console.log(reverse('awesome')) //'emosewa'
// console.log(reverse('rithmschool')) //'loohcsmhtir'

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse('awe'))
console.log(reverse('awesome')) //'emosewa'
console.log(reverse('rithmschool')) //'loohcsmhtir'c