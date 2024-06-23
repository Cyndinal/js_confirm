function Node(data,left,right){
    this.data = data
    this.left = left
    this.right = right
    this.show = show

}


function show(){
   return  this.data
}


function BST(){
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.getMin = getMin
    this.getMax = getMax
    this.find = find

}


function insert(data){
    let newNode = new Node(data, null , null)
    if(this.root === null){
        this.root = newNode
    }
    else{
        let current = this.root
        let parent;
        while(true){
            parent = current
            if(data < current.data){
                current = current.left
                if(current === null){
                    parent.left = newNode
                    break;
                }
            }else{
                if(data > current.data){
                    current= current.right
                    if(current === null){
                        parent.right = newNode
                        break;
                    }
                }
            }
        }
    }
}


// Inorder traversal
function inOrder(node){
    if(!(node === null)){
        inOrder(node.left)
        console.log(node.show() + " ")
        inOrder(node.right)
    }
}


 var nums = new BST();
 nums.insert(23);
 nums.insert(45);
 nums.insert(16);
 nums.insert(37);
 nums.insert(3);
 nums.insert(99);
 nums.insert(22);



 var found = nums.find(22);
 if (found !== null) {
 console.log("Found " + found + " in the BST.");
 }
 else {
 console.log(found + " was not found in the BST.");
 }


//  let mins = nums.getMin()
// console.log("The minimum value of the BST is: " + mins);
//  console.log("\n");
//  var max = nums.getMax();
//  console.log("The maximum value of the BST is: " + max)
//




 // console.log("Inorder traversal: ");
 // inOrder(nums.root);
 // console.log("Preorder traversal")
 //  preOrder(nums.root)


 function preOrder(node){
     if(!(node===null)){
        console.log(node.show())
         preOrder(node.left)
         preOrder(node.right)
     }
 }

 function getMin(){
     let current = this.root
     while(current.left !== null){
         current = current.left
     }
     return current?.data
 }



 function getMax(){
     let current = this.root
     while(current.right !== null){
         current = current.right
     }
     return current?.data
 }

 function find(data) {
 var current = this.root;
 while (current.data !== data) {
 if (data < current.data) {
 current = current.left;
 }
 else {
 current = current.right;
 }
 if (current === null) {
 return null;
 }
 }
 return current.data;
 }




function remove(data){
     root = removeNode(this.root ,data)
}


 function removeNode(node, data){
     if(node === null){
         return null
     }
     if(data === node.data){
        if(node.left===null && node.right === null){
            return null
        }
        if(node.left === null){
            return node.right
        }
        if(node.right === null){
            return node.left
        }
        let tempNode = getSmallest(node.right)
         node.data = tempNode.data
         node.right = removeNode(node.right , tempNode.data)
         return node;
     }
     else{
         if(data < node.data){
         node.right = removeNode(node.right , tempNode.data)
         return node;
         }else {
           node.left = removeNode(node.left , data)
             return node;
         }
     }
 }