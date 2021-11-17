// there is more than one way to create a stack
// a stack is a concept
// use push and pop OR unshift and shift

// 1. Use an array!!
const stack = [];
stack.push('google');
stack.push('coderbyte');
stack.push('youtube');
stack.pop(); // LIFO

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        // if there is nothing in the stack
        // this is going to add to the beginning of the list
        //need to create a new node
        const newNode = new Node(val);
        if(!this.first){
            this.first= newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if (!this.first) return null;
        let temp = this.first;
        if (this.size === 1){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

let stack1 = new Stack();
console.log(stack1.push(2301))
console.log(stack1.push(47))
console.log(stack1.pop())