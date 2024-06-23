let myList= [5,6,824,78]
let newList =[]
let sum=0


// function myChecker(...ops){
//     for(let i=0;i<2;i++){
//      newList.push(ops[i])
// }
//     if(ops.includes("C")){
//       newList.pop()
//         if(ops.includes("D")){
//             let dz=newList[0] * ops[1]
//             newList.push(dz)
//             if(ops.includes("+")){
//                let add = newList[1] + newList[0]
//                 let final_=newList.concat(add)
//                 for(let j=0;j<final_.length;j++){
//                     sum+=final_[j]
//                 }
//                 console.log("Answer:","",sum)
//             }}}
// }
// myChecker(2,2,"C","D","+");

const factorial=(number1)=>{
    let product=1
    for(let j=number1;j>=1;j--){
        product*=j
    }
    return product;
}


function Scoper(){
    scope="local"
    return scope
}
scope="global"
console.log(scope)
console.log(Scoper())


//another factorial approach
// function Factorial(number){
//     if(number ===1) {return number}else{
//         return  number * Factorial(number-1)
//     }
// }
// console.log(Factorial(5))

// function deposit(amount){
//     this.balance +=amount;
// }

// function withdraw(amount){
//     if(amount < this.balance){
//         this.balance -=amount
//     }
//     if(amount > this.balance){
//         console.log("Insufficient amount ")
//     }
// }

// function Checking(amount){
//     this.balance = amount
//     this.deposit = deposit
//     this.withdraw = withdraw
// }

// let numbers = [24,5,7]

 // var nums = [2,3,4,5];
 // var newnum = 1;
 // var N = nums.length;
 // for (var i = N; i >= 0; --i) {
 // nums[i] = nums[i-1];
 // }
 // nums[0] = newnum;


// Insert an element at the beginning of an array
// let listy=["Kofi",'John',4,'Amina','Issa']
// for(let i=listy.length;i>=0;--i){
//     listy[i] =listy[i-1]
//     console.log(listy[i])
// }
// listy[1]=100
// console.log(listy)


//insert element(s) at the middle of an array using splice
// let arrayList = [1,2,3,8,9,10]
// arrayList.splice(6,0,4,5,6,7)
// console.log(arrayList)



let myArray=[8,6,46,8,4,2]
// function isEven(num){
//    return num % 2 === 0
//
// }
// let even = myArray.every(isEven)
// if(even){
//     console.log("All numbers are even!!")
// }else{
//     console.log("Not all the num are even!!")
// }

// const add = (a,b)=>{
//     return a+b;
// }
//
// const summer =myList.reduce((a,b)=>{
//     return a+b
// })
// console.log(summer)
//
//
// const sorter = myList.sort((a,b)=>{
//     return a-b
// })
//
// console.log(sorter)
//
// const isEven= myList.some((number)=>number%2===0)
// if(isEven){
//     console.log("Some numbers are even  ")
// }else{
//     console.log('Not all are even')
// }
//
// let mySentence =['Never ','gonna ','give','up']
// const sentencer = mySentence.reduceRight((a,b)=>{
//     return a+b
// })
//
// console.log(sentencer)

// Array.matrix = function(numRows,numCols,initial){
//     var arr=[]
//     for(let i=0;i<numRows;i++){
//         var column=[]
//         for(let j=0;j<numCols;j++){
//             column[j]= initial
//         }
//         arr[i] = column;
//     }
//     return arr
// }
//
// let num = Array.matrix(5,5,"")
// num[1][1]='Kabe'
// console.log(num[1][1])
// console.log(num)
var grades = [[1,2,3],[4,5,6],[7,8,9]];
 //
 // var total = 0;
 // var average = 0.0;
 // for (var row = 0; row < grades.length; ++row) {
 // for (var col = 0; col < grades[row].length; ++col) {
 // total += grades[row][col];
 // }
 // average = total / grades[row].length;
 // print("Student " + parseInt(row+1) + " average: " +
 // average.toFixed(2));
 // total = 0;
 // average = 0.0;
 // }

 //
 //  var total = 0;
 // var average = 0.0;
 // for (var col = 0; col < grades.length; ++col) {
 // for (var row = 0; row < grades[col].length; ++row) {
 // total += grades[row][col];
 // }
 // average = total / grades[col].length;
 // print("Test " + parseInt(col+1) + " average: " +
 // average.toFixed(2));
 // total = 0;
 // average = 0.0;
 // }



// function List(){
// this.append = append;
// this.find = find;
// this.remove = remove;
// this.insert = insert;
// this.dataStore = [90,100,1,3,5,6];
// this.listSize = 0;
// this.front=front;
// this.prev=prev;
// this.next=next;
// this.end =end;
// this.currentPos=currentPos;
// this.pos = 0
//
//
// }
//
// function append(element){
//  return this.dataStore[this.listItem++] = element;
// }
//
// function find(element){
//  for(let i=0;i<this.dataStore.length;i++){
//   if(this.dataStore[i] === element){
//     return this.dataStore[i]
//   }}
//  return -1;
// }
//
// function remove(element){
//  let found =this.find(element)
//  if(found > -1){
//   this.dataStore.splice(found,1)
//   --this.listSize
//   return true
//  }
//  return false
// }
//
// function toString(){
//  return this.dataStore
// }
//
// function insert(element,after){
//   let insertVal = this.find(after)
//  if(insertVal > -1){
//     this.dataStore.splice(insertVal+1,0,element)
//     ++this.listSize
//   return console.log(element + "inserted")
//  }
//  return false
// }
//
// function clear(){
//  delete this.dataStore
//  this.dataStore = []
//  this.listSize =0
//
// }
//
// function next(){
//  if(this.pos < this.listSize){
//   ++this.pos
//  }
// }
//
// function prev(){
//  if(this.pos > 0){
//   --this.pos;
//  }
// }
//
// function end(){
//  return this.pos === this.listSize-1
// }




// function Stack(){
//  this.StackDataStore = []
//  this.push =push
//  this.pop = pop
//  this.StackLength =StackLength
//  this.peek = peek
//  this.top=0
//  this.clearStack = clearStack
//
// }
//
// function push(element){
//  this.StackDataStore[this.top++] = element
// }
//
// function pop(){
//  return this.StackDataStore[--this.top]
// }
//
// function peek(){
//  return this.StackDataStore[this.top-1]
// }
//
// function StackLength(){
//  return this.top;
// }
//
// function clearStack(){
//  return this.top=0
// }


//implementing palindrome with STACK
// const stack = new Stack()


 // function isPalindrome(word) {
 //  var s = new Stack();
 //
 //  for (var i = 0; i < word.length; ++i) {
 //   s.push(word[i]);
 //  }
 //  var rword = "";
 //  while (s.StackLength() > 0) {
 //   rword += s.pop();
 //  }
 //  if (word === rword) {
 //   return true;
 //  } else {
 //   return false;
 //  }
 // }
 //
 //  var word = "racecar";
 // if (isPalindrome(word)) {
 // console.log(word + " is a palindrome.");
 // }
 // else {
 // console.log(word + " is not a palindrome.");
 // }
 //


function Queues(){
 this.enqueue = enqueue;
 this.dequeue = dequeue;
 this.front = front
 this.end = end
 this.QueuedataStore =[]
 this.Queuelength=Queuelength
}

function enqueue(element){
 this.QueuedataStore.push(element)

}
function dequeue(element){
 this.QueuedataStore.shift(element)
}

function front(){
 return this.QueuedataStore[0]
}

function back(){
 return this.QueuedataStore[this.Queuelength.length-1]
}

function empty(){
 if(this.QueuedataStore.length === 0){
  return true
 }else{
  return false;
 }
}



const fs = require('fs')
const path = require('path')
function getDancers() {
 const names = fs.readFileSync(path.join(__dirname, 'names.txt'))
 console.log(names[0].toString())


 function Node(element) {
  this.element = element
  this.next = null
  // this.prev = null //for a doubly linked list
 }

 function LList() {
  this.head = new Node("head")
  // this.head.next = this.head  //for a circular linked list
  this.find = find
  this.remove = remove

 }

 function find(item) {
  let currNode = this.head
  if (currNode.element !== item) {
   currNode = currNode.next
  }
  return currNode;
 }

 function insert(newElement, item) {
  let newNode = new Node(newElement)
  let currNode = this.find(item);
  newNode.next = currNode.next
  currNode.next = newNode
 }

 function removePreviousNode(item) {
  let currNode = this.head
  if (!(currNode.element) === null && currNode.next.element !== item) {
   currNode = currNode.next;
  }
  return currNode;
 }
}
function remove(item){
  let prevNode = removePreviousNode(item);
  if(prevNode.next !== null){
   prevNode.next = prevNode.next.next
  }}


function HashTable(){
 this.table = new Array(137)
 this.simpleHash = simpleHash
 this.put =put
 this.get = get
}

let total =0
function simpleHash(data){
 for(let i=0;i<data.length;++i){
     total += data.charCodeAt(i)
 }
     return total%this.table.length
}

function put(data){
 const pickedData = simpleHash(data)
 this.table[pickedData] = data
}



 var someNames = ["David", "Jennifer", "Donnie",
  "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
let tt = new HashTable()
for(let i=0;i<someNames.length;++i){}

//  List,Stack , Queue, Linked List ,Doubly Linked List, Hash Tables















