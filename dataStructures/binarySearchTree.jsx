//Root - the top node in a tree
// Child - a node directly connected to another node when moving away from the Root
// Parent- the converse notion of a child
// Siblings - a group of nodes with the same parent
// Leaf - a node with no children
// Edge - the connection between one node and another

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 0;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            newNode.count ++;
            return this;
        }else{
            let current = this.root;
            while (true){
                if(val < current.val){ // go left
                    if(current.left === null) {
                        current.left = newNode;
                        newNode.count ++;
                        return this;
                    } else current = current.left;
                }else if(val > current.val){ //go right
                    if(current.right === null){
                        current.right = newNode;
                        newNode.count ++;
                        return this;
                    } else current = current.right;
                } else if (current.val === val) {
                    // console.log(current)
                    current.count ++;
                    // console.log(current.count)
                    return false;
                }
            }
        }
    }
    find(val){
        if (!this.root) return false;
        let current = this.root;
        while(current){
            if(val < current.val){
                current = current.left;
            } else if (val === current.val){
                return current;
            } else if (val > current.val){
                current = current.right;
            }
        }
        return !current ? false : current;
    }
    BFS(){
        let data = [];
        let queue = [];
        let node = this.root;
        if(!this.root) return null;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);  
        }
        return data;
    }
    preDFS(){
        let data = [];
        traverse(this.root);
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        return data;
    }
        postDFS(){
        let data = [];
        traverse(this.root);
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        return data;
    }
        inOrderDFS(){
        let data = [];
        traverse(this.root);
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(15)
tree.insert(8)
tree.insert(20)

// console.log(tree.insert(10))
// console.log(tree)
// console.log(tree.find(5))
console.log(tree.BFS());
console.log(tree.preDFS());
console.log(tree.postDFS());
console.log(tree.inOrderDFS());