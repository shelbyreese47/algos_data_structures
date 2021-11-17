const myArray = [1,2,3,4,5,5,5,1,2];
const mySet = new Set(myArray);

// console.log(myArray);
// console.log(mySet);

// const uniqueArray = [...mySet];
// console.log(uniqueArray);

// mySet.add([6,8,9,1,2]);

// mySet.delete(3)

// mySet.clear(); //clears the whole set

// console.log(mySet.has(2))
// console.log(mySet.size)
// console.log(mySet)

// const myMap = new Map([['name', 'Shelby'],['surname', 'Reese']])

// console.log(myMap)

// const myObject = {};

// const a = {};
// const b = {};

// myObject[a] = 'a';
// myObject[b] = 'b';
// console.log(myObject)

const myMap = new Map ([[{}, 'a'],[{}, 'b'],[1,'one']])


myMap.set({}, 'c');
// myMap.delete(1);
// myMap.clear();

console.log(myMap.has(1))
console.log(myMap.size)


console.log(myMap);