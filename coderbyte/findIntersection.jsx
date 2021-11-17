
function findIntersection(arr){
    let counter1 = {};
    let same = [];
    let arr1 = arr[0].split(',');
    arr1 = arr1.map(num => num.trim());
    let arr2 = arr[1].split(',');
    arr2 = arr2.map(num => num.trim());
    for (let i = 0; i < arr1.length; i++){
        let num = arr1[i];
        counter1[num] ? counter1[num] = counter1[num] : counter1[num] = 1;
    }
    for (let j = 0; j < arr2.length; j++){
        let num = arr2[j];
        counter1[num] ? counter1[num] = ++counter1[num] : counter1[num] = 1;
    }

    let counterLen=Object.keys(counter1).length
    for (const key in counter1){
        if(counter1[key] > 1) same.push(key)
    }
    return same.length === 0 ? false : same.join(',');
}

    // for (const key in counter1){
    //     if (!key in counter2) return false; //if that letter isn't even in counter2 return false
    //     if (counter2[key] !== counter1[key]) return false; // if the value in the key letter isn't the same in each object- return false
    // }
    // return true; // if the objects made it through without early return of false- they are true

console.log(findIntersection(["1, 5, 6,7, 10, 11, 12", "5, 6, 8, 11, 17"])) // 5,6,11

console.log(findIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"])) //false
// ["2, 3, 4", "3"] //3

// ["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"] //false

// ["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"] // 2,4

function FindIntersection(strArr) { 

  var a = strArr[0].split(', ')
  var b = strArr[1].split(', ')
  var result = a.filter(x => b.find(a => a === x))
  return result.length > 0 ? result.join(',') : 'false'

}

function anotherFindInt(strArr){
    const lists = strArr.map(str => str.split(", "));
    const firstList = lists[0];
    const secondList = lists[1];

    let matchMap = {};
    let resultArr = [];

    firstList.forEach( num => matchMap[num] = true);

    secondList.forEach(num => {
        if(matchMap[num]) resultArr.push(num);
    })
    
    return resultArr.length > 0 ? resultArr.join(",") : false; 
}