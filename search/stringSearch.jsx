// loop over the longer string
// loop over the shorter string
// if the characters don't match, break out of the inner loop
// if the characters do match, keep going
// if you complete inner loop, increment the count of matches
// return the count

function stringSearch(str1, str2) {
    let count =0;
    for (let i=0; i< str1.length; i++){
        for (let j=0; j< str2.length; j++){
            if (str2[j] !== str1[i+j]) break;
            if (j === str2.length-1) count ++;
        }
    }
    return count;
}

console.log(stringSearch('hello haha hello haha', 'ha'))
console.log(stringSearch('lorie loled', 'lol'))