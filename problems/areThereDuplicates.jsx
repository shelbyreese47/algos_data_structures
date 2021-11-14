// accepts a variable number of arguments

// I'm going to have a counter and if the key value is greater than 1- return true and break out of the loop

function areThereDuplicates() {
    // console.log(arguments)
    let counter = {};
    for (let i=0; i< arguments.length; i++){
        // counter[arguments[i]] = ++counter[arguments[i]] || 1;
        if (counter[arguments[i]]) return true;
         counter[arguments[i]] = 1;
        // console.log(counter)

    }
    return false;
}

console.log(areThereDuplicates(1,2,3)) //f
console.log(areThereDuplicates(1,2,2)) //t
console.log(areThereDuplicates('a', 'b', 'c','a')) //t

//His solution- frequency counter
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// His solution- multiple pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// His solution one liner
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
