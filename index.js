const reverseString = (word)=>{
    let stringKeeper = ""
    for(let i= word.length - 1; i>=0 ;i--)
    {
        stringKeeper += word[i];
    }
    return stringKeeper;
}
console.log(reverseString('Maxwell'))



function setArray(...arguments){
    if(arguments.length === 1){
        // const argValue = arguments[argValue];
        cosnt [argValue] =arguments
        if(argValue instanceof Array){
            return setArray(...argValue)
        }
    }
    return arguments.reduce((a,b)=> a+b);
}
console.log(setArray(2,9,5))
a="Manifest"
b="Manifesto"
console.log(a.localeCompare(b))


function CompareString(word1,word2){
    if(word1 === word2){
       return console.log(`${word1} ${word2} are the same`)
    }else{
       return console.log(`${word1} ${word2} are not the same`)
    }
}

console.log(CompareString("Maxwells",word2="Maxwell"));








 // function sum(...arguments) {
 //    if (arguments.length === 1) {
 //        const [firstArg] = arguments
 //        if (firstArg instanceof Array) { //firstArg is something like [1, 2, 3]
 //            return sum(...firstArg) //calls sum(1, 2, 3)
 //        }
 //    }
 //    return arguments.reduce((a, b) => a + b)
 // }





 var s = "some ∆≈ƒ unicode ¡™£¢¢¢";
console.log(s.charCodeAt(5));
function isString(value){
   return typeof value === "string" || value instanceof String
}

const innerStriing = String("Hello new Stringser")
console.log(Object.prototype.toString.call(innerStriing))
// const newArray = ['Mangoes']
// console.log(Object.prototype.toArray.call(newArray))


 let b16 = '3.243f3e0370cdc';
 // Split into integer and fraction parts
 let [i16, f16] = b16.split('.');
 console.log(f16);
 console.log(i16);
 parseInt(i16,10)


const indexer = "The macho man is in the caro"
console.log(indexer.indexOf("o"))
console.log(indexer.lastIndexOf("o"))
const command = indexer.includes("macho")


function Animals(name, sound){
    this.name = name
    this.sound = sound
}

const cat = new Animals();
console.log(cat.name="Catty")

const pt =Animals.prototype.name = ()=>{console.log(cat.name)}
console.log(pt);
 const names = ['bob', 'alejandro', 'zandra', 'anna', 'bob'];
 const uniqueNames = new Set(names)
new Array(names.length)
new Object(names)
// list[] dictionary{key:value } set{1,3,4,5,6} boolean (true/false)
// Array[] Object Set boolean
console.log(uniqueNames.add("Nomani"));
 // for (let name of uniqueNames) {
 //  console.log(name);
 // }


const map = new Map().set("abc",1).set("fgtg",2);
for(let [i,j] of map){
    console.log(i,j)
}
// console.groupCollapsed("map",map)


// for(key of Object.keys(newObject)){
//     console.log(key,"",newObject[key])
// }
const myList = ['Mavis','narious',"Nadia",'Vicential']
const mySet =new Set([1,2,3,4,5,6,7])
console.log("mySet",mySet)
const newObject = {
    name:"Kingston",
    location:"Ghana",
    Nationality:"Ghanaian"
}

for(let k in mySet){
    console.log("k-values",k,mySet)
}

 // for(var i = 0; i < 5; i++){
 //  nextLoop2Iteration:
 //  for(var j = 0; j < 5; j++){
 //    if(i === j) {
 //        break nextLoop2Iteration
 //    };
 //    console.log(i, j);
 //  }}

 //
 // for(var i = 1; i < 25; i++){
 //      if(i===3){
 //          console.log("Alarm beeping, wake Up!")
 //          console.log(`Its ${i} O'clock now `)
 //          break;
 //      }
 //  // nextLoop2Iteration:
 //  for(var j = 1; j < 60; j++){
 //      for(let s=1;s<120;s++){
 //          console.log("Seconds",s)
 //      }
 //
 //  }}



// for(let key in newObject){
//     console.log("in",key, newObject[key]);
// }
// for(let key of Object.keys(newObject)){
//     console.log("of",key)
// }


 // Currying
 function prism(l) {
    return function(w) {
        return function (h) {
            return l * w * h;
        }
    }}
console.log(prism(30)(5)(2))

const newPrism = (h,w,l)=>(h)=>(w)=>(l)=>{
     return h*w*l
}
console.log(prism(90)(15)(2))

const Object_this ={
    speed:400,
    checkSpeed:(value)=>{
       (`Hello , your ${value} is moving at a speed of `+ this.speed)
    },
    display(message){
        alert(message)
    }
}

 const monitor = {
  threshold: 5,
  check: function(value) {
    if (value > this.threshold) {
      // this.display("Value is too high!");
        console.log("Value High")
    }
  },
  display(message) {
  console.log(message)
  }
 };

const check = monitor.check.bind(monitor);
check('1200');


 // var Vehicle =prompt("Enter your car brand");
const newChoice={
    topSpeed:900,
    automobile:"Vehicle",
    check:function (value){
        if(value > this.topSpeed){
            this.SpeedGun(`Your ${this.automobile} is moving at a speed of `+ value)
        }
    },
    SpeedGun:(message)=>{
        console.log(message)
    }

}

// const checkSter = newChoice.check.bind(newChoice);
// checkSter(12000)


function argy(...arguments){
    console.log(...arguments)
}
argy(90,55,56,88)

function* arguGenerator(){
    yield [...arguments];
    yield 12
    yield 12
}


console.log(...arguGenerator(),..."abc")


 // Calculate the Fibonacci value for each number in an array:

let fib1=true,
    numbers=[1,2,3,4,5,6,7,6,7,9,0].map(
        function fib1(n){
            return (n<=2) ? 1 : fib1(n-1) + fib1(n-2)
        }
    )
console.log(numbers)


 let obj = {
    a: 1,
    b: 2,
    set: function (a, b) {
        this.a = a;
        this.b = b;
        console.log(this.a, this.b);
    }
 };

var Student1={
    name:"Jacobson"

}
const n1=obj.set.bind(obj); // normal syntax
n1(1,2)


//  const n2=obj.set.bind(obj); // equivalent to the above
// n2(obj,[3,5])
 // obj.set.apply(obj, [3, 7]);





function IdentifyMonad(value){
    let monad = Object.create(null);

    monad.bind = (func, ...args)=>{
        func(value,...args)
    }
    monad.call = (func, ...args)=>{
        func(value,...args);
        return IdentifyMonad(value)
    }

    monad.apply = (func, ...args)=>{

        return IdentifyMonad(func(value,...args))
    }

    monad.value = ()=>{
        return value;
    }
    return monad;
}


 function identityMonad(value) {
    var monad = Object.create(null);

    // func should return a monad
    monad.bind = function (func, ...args) {
        return func(value, ...args);
    };
    // whatever func does, we get our monad back
    monad.call = function (func, ...args) {
        func(value, ...args);
        return identityMonad(value);
    };

    // func doesn't have to know anything about monads
    monad.apply = function (func, ...args) {
        return identityMonad(func(value, ...args));
    };
    // Get the value wrapped in this monad
    monad.value = function () {
        return value;
    };

    return monad;
 };


  var add = (x, ...args) => x + args.reduce((r, n) => r + n, 0),
    multiply = (x, ...args) => x * args.reduce((r, n) => r * n, 1),
     divideMonad = (x, ...args) => identityMonad(x / multiply(...args)),
    log = x => console.log(x),
    substract = (x, ...args) => x - add(...args);

 identityMonad(100)
    .apply(add, 10, 29, 13)
    .apply(multiply, 2)
    .bind(divideMonad, 2)
    .apply(substract, 67, 34)
    .apply(multiply, 1239)
    .bind(divideMonad, 20, 54, 2)
    .apply(Math.round)
    .call(log); // Logs 29




var Human = function(){
    this.canSpeak = true
    this.canWalk=true
}

Human.prototype.speak = function() {
    if(this.canSpeak){
        console.log("Human speak");
    }
}
Human.prototype.speak = function() {
    if(this.canWalk){
        console.log("Human Walk");
    }
}


var Student = function (name,title){
    Human.call(this)
    this.name = name;
    this.title = title;

}
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.speak = function () {

    if(this.canSpeak){
        console.log("Student can speak"+ this.name + this.title);
    }
}
Student.prototype.walk = function () {

    if(this.canWalk){
        console.log("Student can Walk"+ this.name + this.title);
    }
}
Student.prototype.walk = function(){
    if(this.canWalk){}
    console.log(this.name + "can walk!!")
}

const billy = new Student("Kwame",'AI Engineer')
billy.speak()
billy.walk()


class Person{
    constructor() {
        this._name = []
    }

    set setname(value){
        this._name.push(value);
    }
    get getname(){
        return this._name
    }
}

const newPerson = new Person()
newPerson.setname='Jeofty'
newPerson.setname='Eniol'
newPerson.setname='Nuys'
console.log(newPerson.getname)
console.log(newPerson._name)
// console.log()

// const newClass = new Person()
// newClass.name = "Kingston"
// console.log(newClass.name)

 const classInstance = new class {
    get getprop() {
        return 5;
    }
    set setprop(value){


    }
 };
 classInstance.prop = 10;
 // console.log(classInstance.prop);


 class Queue{
    myList= []
    constructor() {
        this.enqueue = function(value){
           myList.push(value);
            return value;
        }
        this.dequeue = function(){
            return myList.shift()

        }
    }
    ReturnAllArrays(){
        console.log("Array include: ")
        return this.myList
    }
 }

 const q = new Queue()
q.ReturnAllArrays()

console.log(q.enqueue(22))
console.info(q.enqueue(12))
console.info(q.enqueue(90))
// console.log(q.dequeue(22))
// console.info(q.dequeue(12))
// console.info(q.dequeue(90))


const objectEnqueue ={
    myListers:[],
    enqueue:function(value){
        this.myListers.push(value)
        console.log(value + " enqueued!")
        return value
    },
    dequeue:function(){
       return this.myListers.shift()
    }
}

enq =objectEnqueue.enqueue.bind(objectEnqueue)
deq =objectEnqueue.dequeue.bind(objectEnqueue)
enq(1)
enq(3)
enq(4)

console.log(objectEnqueue.myListers)
deq()
deq()
deq()
console.log(objectEnqueue.myListers)


// Dynamic method Names
let METADATA = Symbol('metadata');
 class Vehicle{
     constructor(model, name) {
         this.model = model
         this.name = name
     }
     [METADATA](){
         return{
         model:this.model,
         name:this.name
     }
     }
     ["add1"](a,b){
         return a+b;
     }
 }

 const car = new Vehicle('ToyOTA','RAM')
 console.log(car[METADATA]())
console.log(car.add1(9,4))



let topSecret  = Symbol('topSecretinSymbols')
class SecretSymbol{
     constructor(secret) {
         this[topSecret]=secret
         this.coverStory = "This is just a cover story"
         this.service = function(){
             figureWhatToDo(topSecret[topSecret])
         }
     }

}

const agentss = new SecretSymbol()
console.log(agentss[topSecret])

const data =Object.getOwnPropertySymbols(agentss)
console.log(data[0])


// const newTopSecret = new WeakMap()
 function Person1(){
    console.log("I'm " + this.name);
 }
 var person0 = {name: "Stackoverflow"}
 var person1 = {name: "John"};
 var person2 = {name: "Doe"};
 var person3 = {name: "Ala Eddine JEBALI"};
 var origin = Person1;
 Person1 = function(){
    origin.call(person0);
 }
 new Person1();
 //outputs: I'm Stackoverflow
 Person1.call(person1);
 Person1.apply(person2);
 Person1.apply(person3);


// function downloadCsv() {
//   var blob = new Blob([]);
//   if (window.navigator.msSaveOrOpenBlob ){
//       window.navigator.msSaveBlob(blob, "filename.csv");
//   }
//   else {
//     var a = window.document.createElement("a");
//     a.href = window.URL.createObjectURL(blob, {
//       type: "text/plain"
//     });
//     a.download = "filename.csv";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   }
//  }
//  var string = "a1,a2,a3";

//  downloadCsv(string);
// window.navigator.vibrate(100)

const MyValues =['1','2','3','4','5','6','7','8','9']
const LOWER=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const strn = ['A','B','C','M','j']
const capials = ['A','B','C','D','E','F','G','H','I','J','K','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let newP=[]
let result=[]
let NewForm=[]
for(let k of strn.keys()){
      NewForm+=strn[k]
      result = NewForm
    // for(let i=0; i< 3;i++){
      let output=result[Math.ceil(Math.random() *  result.length-1)]
      newP +=output
    console.log(newP.slice(0,2))
    // }

}

console.log( result)







// const randomisor =Math.ceil(Math.random() * num.length).toString()
// console.log(randomisor)



