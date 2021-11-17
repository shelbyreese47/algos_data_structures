class HashTable{
    constructor(size = 4){
        this.keyMap = new Array (size);
    }


_hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
}
set(key, val){
    //hash the key
    let index = this._hash(key);
    // store the key value pair in the hash table
    if (!this.keyMap[index]) {
        this.keyMap[index] = [];
    }
        this.keyMap[index].push([key,val])
    
}
get(key){
    //hash the key
    let index = this._hash(key);
    // store the key value pair in the hash table
    let resultArr = this.keyMap[index];
    console.log(resultArr)
    if (!resultArr) {
        return undefined;
    }
    for(let i = 0; i < resultArr.length; i++ ){
        if(resultArr[i][0] === key)return resultArr[i][1];
    }
    return undefined;
}
keys(){
    // console.log(this.keyMap)
    let keysArr = [];
    let len = this.keyMap.length
    let j = 0;
    for (let i = 0; i < len; i++){
        if (this.keyMap[i]){
        for (let j = 0; j < this.keyMap[i].length ; j++)
        if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
        }
        }
    }
    // returns all of the keys
    return keysArr;
}
values(){
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i ++){
        if(this.keyMap[i]){
            for (let j = 0; j < this.keyMap[i].length ; j++){
                if(!valuesArr.includes(this.keyMap[i][j][1])){
                valuesArr.push(this.keyMap[i][j][1])
                }
        }
        }
    }
    return valuesArr;
    // returns all of the values
    // might have duplicate values -- just want unique values
}
}

let ht = new HashTable();
ht.set('hello world', 'goodbye!')
ht.set('dogs', 'are cool')
ht.set('cats', 'are fine')
ht.set('i love', 'pizza')
ht.set('i really love', 'pizza')
// console.log(ht)
// console.log(ht.get('cats'))
// console.log(ht.keys());
// console.log(ht.values());

ht.keys().forEach(function(key){
    console.log(ht.get(key))
})