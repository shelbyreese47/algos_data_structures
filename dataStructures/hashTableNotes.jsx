// built in to most languages
// used to store key value pairs
// the keys are not ordered
// hash tables are fast! for finding vlaues, adding values and removing values

// JS has Objects and Maps (Objects have some restrictions (can only use a string as a key))

// in order to look up values by key, we need a way to convert keys into valid array indices

//hash functions or hashing functions help us do that

"a".charCodeAt(0)

function hash (key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let val = char.charCodeAt(0)-96;
        total = (total * WEIRD_PRIME +value) % arrayLen;
    }
    return total;
}

// Separate Chaining - at each index in the array, we store values using a more sophisticated data structure (an array or a linked list) -- allows us to store multiple key-value pairs at the same index
    // **will be a nested data structure - go to that index and loop through
// Linear Probing - only store one piece of data in each position- if we have a collision- we search through the array to find the next empty slot
// this allows us to store a single key-value at each index
