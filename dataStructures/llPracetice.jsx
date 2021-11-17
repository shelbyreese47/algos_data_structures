class Node {
    constructor(val){
        this.val = val;
        this.next = null; //going to initialize this as null since the start node will not have a next node
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr)
    }
    push(val){
        let newNode = new Node(val);
        // edge cases
        // push and there are no values
        if (!this.head) {
            this.head = newNode;
        } else {
        // if the list is not empty, we know that the final value is this.tail
        this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length ++;
        return newNode;
    }
    pop(){
        // removing this.tail-- this.tail.next = null current.next.next = null
        //edge case- in case there is only one value
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length --;
            return true;
        }
        //edge case - if there are no values
        if (!this.head) return null;

        //loop until current.next.next = null
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        //reassign current.next = null
        current.next = null;
        this.length --;
        return true;

    }
    unshift(val){
        // we are reassigning a new node at the new head
        // create a new node
        let newNode = new Node(val);
        // edge case - there is no head
        if (!this.head) return this.head = newNode;

        //if there is a current head
        // create a variable to contain current head
        let oldHead = this.head;
        // reassign the new head to this.head
        this.head = newNode;
        // point the new node to the old head
        newNode.next = oldHead;
        this.length ++;
        return newNode;
    }
    shift(){
        //removing this.head
        // edge case - if there is not this.head
        if(!this.head) return null;
        // this.head = this.head.next
        this.head = this.head.next;
        return true;
    }
    get(ind){
        //saying we want the node of a certain index
        // edge cases: 
        // if the ind < 0
        // if the ind does not exist in the list
        if (ind < 0 || ind >= this.length) return null;
        // we are going to need to traverse through the list until a COUNT variable = ind
        let current = this.head;
        let count = 0;
        while (count !== ind){
            current = current.next;
            count ++;
        }
        // return this
        return current;
    }
    set(ind, val){
        // replacing the current val at ind with the new val 
        //edge cases:
        //we're going to refer to get anyways- so we can use the edge cases already built in
        // first we want to get the ind
        let updatedNode = this.get(ind);
        console.log(updatedNode);
        //then we want to update it
        if (!updatedNode) return false;
        updatedNode.val = val;
        return true;
    }
    insert(ind, val){
        // edge cases
        //if ind is a valid option
        if (ind < 0 || ind >= this.length) return null;
        // if ind = 0
        if (ind === 0) return this.unshift(val);
        // if ind = this.length -1
        if (ind === this.length-1) return this.push(val);
        //we want to insert at ind a NEW NODE with val
        let newNode = new Node (val);
        // this will change the current ind-1.next to be our new node
        let previousNode = this.get(ind-1);
        let nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        // and it will change newnode.next = (ind+1).next
        // we are ADDING to the length- increment length
        this.length ++;
        return newNode;
    }
    remove(ind){
        //edge cases
        // ind is not a valid option
        if (ind < 0 || ind > this.length -1) return null;
        // shift/pop
        if (ind ===0) return this.shift();
        if (ind === this.length-1) return this.pop();


        //want to find the previous node using .get
        let previousNode = this.get(ind-1);
        let nextNode = previousNode.next.next;
        previousNode.next = nextNode;
        //change the previous node. next to be removedNode.next
        //decrement length
        this.length --;
    }
    reverse(){
        //edge cases
        // there are no values in the list
        if (!this.head) return null;
        // swap the head and the tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        // change direction of every next
        for (let i = 0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new linkedList();
list.push('heyo')
list.push('wayo')
// list.print()
console.log('++++++')
// list.pop()
// list.print()
// console.log('++++++')
// list.pop()
// list.print()
list.unshift('first')
list.print()
console.log('++++++')
// list.shift();
// list.print()
console.log(list.get(2))
console.log(list.set(2, 'funfunfun'))
list.print();
console.log('++++++')
// console.log(list.set(4, 'schloop'))
// list.print();

list.insert(2,'inserted')
list.print();
console.log('=========')
// list.remove(1);
// list.print();

list.reverse();
list.print();