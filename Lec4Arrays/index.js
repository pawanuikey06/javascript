const MyArr =[0,13,2,3,4,5];

console.log(MyArr[1])
//Shallow Copy Copy
const arr =MyArr;
console.log(arr)
arr[0]= 123;
console.log(arr)
console.log(MyArr)

// Methods In Array

arr.push(55)
console.log(arr)
arr.unshift(44)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.includes(2423))
console.log(arr.indexOf(13))
console.log(arr.splice(1,3,55,66,77,88,88));
console.log(arr.join())

// Spread Operator

let a =[1,2,3,4,5,6,7];
let b =[8,9,0,33,44,55,666,7777]

let c =[...a ,...b];
console.log(c)
b[3]=13233423;
console.log(c)
console.log(b)

//  flatten Array 


// Coverting into Array 
// Using From Method

let name="pawan"
let temp =Array.from(name)
console.log(temp)
temp[3] ="cgd"
console.log(temp)
console.log(name)


console.log(Array.from({name :"pawan"}))
