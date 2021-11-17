// enqueue, dequeue

// const q = [];
// // q.push('first');
// // q.push('second');
// // q.push('third');
// // console.log(q);
// // q.shift();
// // console.log(q);
// // q.shift();
// // console.log(q);

// q.unshift('first');
// q.unshift('second');
// q.unshift('third');
// console.log(q);
// q.pop();
// console.log(q);
// q.pop();
// console.log(q);

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
 class Queue{
     constructor(){
         this.first = null;
         this.last = null;
         this.size = 0;
     }
     // want to add to tail and remove from head
     enqueue(val){
         let newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
     }
     dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } 
        this.first = this.first.next;
        this.size -- ;
        return temp.val;
     }
 }

 let q = new Queue();

console.log( q.enqueue('first'))
console.log( q.enqueue('second'))
console.log( q.enqueue('third'))
console.log( q.dequeue())
