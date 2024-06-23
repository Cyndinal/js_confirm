

function HashTable(){
    this.table = new Array(137)
    this.showData = showData
    this.simpleHash = simpleHash
    this.put = put
    this.betterHash = betterHash
}



 function simpleHash(data) {
 var total = 0;
 for (var i = 0; i < data.length; ++i) {
 total += data[i].charCodeAt(i);

 }
  console.log("Hash value: " + data + " -> " + total)
 return total % this.table.length;
 }


 function put(arrData){
     let pos = this.simpleHash(arrData)
      this.table[pos] = arrData
 }

function showData(){
    for(let i=0;i<this.table.length ;++i){
        if(this.table[i] !== undefined){
            console.log(i + " " + this.table[i])
        }
    }
}

 // var someNames = ["David", "Jennifer", "Donnie", "Raymond",
 // "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
 // var hTable = new HashTable();
 // for (var i = 0; i < someNames.length; ++i) {
 // hTable.put(someNames[i]);
 // }
 // hTable.showData();

function betterHash(data){
    let total =0
    let pn = 37
    for(let i=0;i<data.length;++i){
        total += pn * total + data.charCodeAt(i)
    }
    return total % this.table.length
}


function betterPut(data,key){
    let pos = this.betterHash(key)
    this.table[pos]=data
}
function get(key){
    return this.table[betterHash(key)]
}


//In solving collision there are 2-methods Linear Probing && Separate chaining
//In separate chaining ; you introduce an empty array together with the original array

function buildFunction(){
    for(let i=0;i<this.table.length;++i){
        this.table[i] = []
    }
}

function SeparateShow(){
    let index=0
    for(let j=0;j<this.table.length;++j){
        if(this.table[i][index]!== undefined){
            console.log(this.table[i])
        }
    }
}
function separatePut(key,data){
    let index=0
    let pos =betterHash(key)
    if(this.table[pos][index] === undefined){
         this.table[pos][index+1]=data
    }
    index++
    while(this.table[pos][index] !== undefined){
       index++
    }
    this.table[pos][index] = data
}



function Set(){
    this.setDataStore=[]
    this.add = add
    this.union = union
    this.intersect = intersect
    this.contains = contains
    this.remove = remove

}

function remove(value){
   let found= this.setDataStore.indexOf(value)
    if(found > -1){  //means if the element is found
        this.setDataStore.splice(found,1)
        return true
    }else{
        return false
    }
}
function add(value){
   if(this.setDataStore.indexOf(value) < 0){
        this.setDataStore.push(value)
       return true
   }else{
       return false
   }
}


function contains(value){
    if(this.setDataStore.indexOf(value) > -1){
        return true
    }else{
        return false
    }
}
function union(set){
    let tempSet = new Set()
    for(let i=0;i<this.setDataStore.length;++i){
        tempSet.add(this.setDataStore[i])
    }
    for(let j=0;j<set.this.setDataStore.length;++j){
        if(!tempSet.contains(set.setDataStore[j])){
            tempSet.setDataStore.push(set.setDataStore[j])
        }
    }
}





 function size(){
    return this.setDataStore.length

}

function subset(set){
    if(this.size() > set.size){
        return false
    }
    else{
        for(let i in this.setDataStore){
            if(!set.contains(i)){
                return false
            }
        }
    }
    return true

}

let setObj = new Set()

setObj.add(9)
setObj.add(12)
setObj.add(4)
setObj.remove(12)
setObj.contains(4)




