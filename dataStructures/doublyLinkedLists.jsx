 class Node {
     constructor(val){
         this.val = val;
         this.prev = null;
         this.next = null;
     }
 }

 class DoublyLinkedList{
     constructor(){
         this.head = null;
         this.tail = null;
         this.length = 0;
     }
     print(){
         let arr = [];
         let current = this.head;
         for (let i = 0; i < this.length; i++){
             arr.push(current.val);
             current = current.next;
         }
         console.log(arr);
     }
     push(val){
        // create a new Node
        let newNode = new Node(val);
        // check if the head is null 
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        // set the next property on the tail to be that node

        // set the prev property on the newly created node to be the tail

        //increment the list
        this.length++;
        // return the list
        return this;
     }
     pop(){
         // edge case - no head
         // take current tail- store in variable
         // if length is 1- set head and tail to null
         // update tail to be the prev node
         // set new tail next to null
         // decrement the length
         let oldTail = this.tail;
         if (!this.head) return null;
         if (this.length === 1){
             this.head = null;
             this.tail = null;
         } else{         
         let newTail = oldTail.prev;
         this.tail = newTail;
         this.tail.next = null;
         oldTail.prev = null;
         }
         this.length --;
         return oldTail;
     }
     shift(){
         if (!this.head) return null;
         let oldHead = this.head;
         if (this.length === 1){
            this.head = null;
            this.tail = null;
         }else {
         let newHead = oldHead.next;
         this.head = newHead;
         this.head.prev = null;
         oldHead.next == null;
         }
         this.length -- ;
         return oldHead;
     }
     unshift(val){
        // create a new node
        let newNode = new Node(val);
        // if list is empty
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
        // set prev property on the head to be the new node
        this.head.prev = newNode;
        // set the next property on the new node to be prev head
        newNode.next = this.head;
        // update the head to be the new node
        this.head = newNode;
        }
        // increment length
        this.length ++;
        //return the list
        return this;
     }
     get(ind){
        if (ind < 0 || ind > this.length-1) return null;
        if (ind < this.length/2){
            let count = 0;
            let current = this.head;
            while (count !== ind){
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while(count !== ind){
                current = current.prev;
                count --;
            }
            return current;
        }
     }

     set(ind, val){
        let updatedNode = this.get(ind);
        if (!updatedNode) return false;
        updatedNode.val = val;
        return true;
     }
     insert(ind, val){
        if( ind < 0 || ind > this.length) return null;
        if (ind === 0) return !!this.unshift(val);
        if (ind === this.length) return !!this.push(val);
        
        let newNode = new Node(val);
        let previousNode = this.get(ind-1);
        let nextNode = previousNode.next;
        // update previousNode
        previousNode.next = newNode;
        //update newNode
        newNode.prev = previousNode;
        newNode.next = nextNode;
        //update next node
        nextNode.prev = newNode;
        this.length ++;
        return newNode;
     }
     remove(ind){
        if( ind < 0 || ind >= this.length) return null;
        if (ind === 0) return this.shift();
        if (ind === this.length-1) return this.pop();
        //now if the index is in between head and tail
        let removedNode = this.get(ind);
        let previousNode = removedNode.prev;
        let nextNode = removedNode.next;
        //update previoud node
        previousNode.next= nextNode;
        //update removedNode
        removedNode.next = null;
        removedNode.prev = null;
        //update nextNode
        nextNode.prev = previousNode;
        //update length
        this.length --;
        return removedNode;
     }

 }
let list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermoine');
// list.print();
list.push('Luna')
list.push('Wilson')
list.push('Magnolia')
// list.print();
// list.pop();
// list.shift()
// list.print();
// list.shift()
// list.shift()
list.unshift('Hagrad')
// list.print();
// console.log(list.get(0))
// list.set(-10, 'Sam');

list.insert(6,'Sam')

list.print()

list.remove(6);
list.print()
list.remove(0)
list.print()