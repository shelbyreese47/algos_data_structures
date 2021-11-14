function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for( let i=0; i< arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i]**2);
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex,1);
    }
    return true;
}

// console.log(same([1,2,3,2], [9,1,4,4]))

// REFACTORED

function sameRef(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2){
        frequencyCounter2[val] = ++ frequencyCounter2[val] || 1;  
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1){
        if (!(key ** 2 in frequencyCounter2)) return false;
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
    }
    return true;
}
// console.log(sameRef([1,2,3,2], [9,1,4,4]))

function anagram(str1, str2){
    // first we want to see if the two strings are the same length- if they aren't we can break out early
    if (str1.length !== str2.length) return false;
    // now we want to inititate two objects for our counters
    let counter1 = {};
    let counter2 = {};
    // now we want to loop through each string (separately- to keep that O(n) and count how many times each letter is shown)
    for (const letter of str1){
        counter1[letter] = ++ counter1[letter] || 1; // if that letter is in there, add one, if not, add that letter and initiate it to one        
    }
    for (const letter of str2){
        counter2[letter] = ++ counter2[letter] || 1;
    }
    // now we can see if the letter counts are the same in each object
    // console.log(counter1)
    // console.log(counter2)
    for (const key in counter1){
        if (!key in counter2) return false; //if that letter isn't even in counter2 return false
        if (counter2[key] !== counter1[key]) return false; // if the value in the key letter isn't the same in each object- return false
    }
    return true; // if the objects made it through without early return of false- they are true
}

// console.log(anagram(' ',' '))
// console.log(anagram('aaz','zza'))
// console.log(anagram('anagram','nagaram'))
// console.log(anagram('rat','car'))
// console.log(anagram('awesome','awesom'))
// console.log(anagram('qwerty','qeywrt'))
// console.log(anagram('texttwisttime','timetwisttext'))

function anotherAnagram(first, second){
    if (first.length !== second.length) return false;
    const lookup = {};

    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        console.log(lookup)
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) return false;
        else lookup[letter] -= 1;
        console.log(lookup)
    }
    return true;
}

// console.log(anotherAnagram(' ',' '))
// console.log(anotherAnagram('aaz','zza'))
console.log(anotherAnagram('anagram','nagaram'))
// console.log(anotherAnagram('rat','car'))
// console.log(anotherAnagram('awesome','awesom'))
// console.log(anotherAnagram('qwerty','qeywrt'))
// console.log(anotherAnagram('texttwisttime','timetwisttext'))