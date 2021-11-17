 // piece of data - val
 // reference to next node - next

 class Node{
     constructor(val){
         this.val = val;
         this.next = null;
     }
 }

 class SinglyLinkedList{
     constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0;
         
     }
     push(val){
        let newNode = new Node (val);
         if(!this.head){
             this.head = newNode;
             this.tail = newNode;
         } else{
         this.tail.next = newNode;
         this.tail = newNode;
        }
        this.length ++;
        return this;
     }
     traverse(){
        let current = this.head;
        if(!this.head) return;
        while (current){
            console.log(current.val);
            current = current.next;
        }
     }
    pop(val){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        console.log(current);
        console.log(newTail);
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(val){
        if(!this.head) return undefined;
        let shifted = this.head;
        this.head= shifted.next;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return shifted;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
        newNode.next = this.head
        this.head = newNode;
        }
        this.length ++;
        return this;
    }
    get(ind){
        if (ind < 0 || ind >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== ind){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(ind, val){
        let foundNode = this.get(ind);
        if (foundNode){
        foundNode.val = val;
        return true;
        }
        return false;
    }
    insert(ind, val){
        if(ind < 0 || ind >= this.length) return false;
        if(ind === 0) return !!this.unshift(val);
        if (ind === this.length-1) return !!this.push(val);
        let insertedNode = new Node(val);
        let previousNode = this.get(ind-1);
        let nextNode = previousNode.next;
        previousNode.next = insertedNode;
        insertedNode.next = nextNode;
        this.length++;
        return true; 
    }
    remove(ind){
        if(ind < 0 || ind >= this.length) return false;
        if(ind === 0) return this.shift();
        if (ind === this.length-1) return this.pop();
        let previousNode = this.get(ind-1);
        let deletedNode = previousNode.next;
        let nextNode = deletedNode.next;
        previousNode.next= nextNode;
        this.length--;
        return deletedNode;
    }

    reverse(){
       let node = this.head;
       this.head = this.tail;
       this.tail= node;
       let prev = null;
       let next;
       for (let i = 0; i < this.length; i++){
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
       }
       return this;
    }
    print(){
        let arr =[];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current= current.next;
        }
        console.log(arr)
    }
 }

const list = new SinglyLinkedList();
console.log(list.push('HELLO'));
console.log(list.push('GOODBYE'));
console.log(list.push('!'));
console.log(list.push('<3'));
console.log(list.push(':)'));
// list.print()
// console.log(list.pop())
// console.log(list.pop())
// console.log('*****')
console.log(list.unshift('HEY'))
// list.print()
// console.log(list.shift())
// list.print()
// console.log('*****')
// console.log(list.get(0));
// console.log(list.get(10));

// console.log(list.set(3, '***'))
console.log('+++++++++++++++')
console.log(list.get(2))

console.log(list.insert(2,'inserted'));
console.log(list.get(2))

console.log(list.insert(0, 'LESSSSEEEEE'))
list.print()

console.log(list.insert(0, 'LESSSSEEEEE'))
list.print()

list.reverse()
list.print();

//  const first = new Node("hi");
//  first.next = new Node("there");
//  first.next.next = new Node("how");
//  first.next.next.next = new Node("are");
//  first.next.next.next.next = new Node("you");

//  console.log(first)