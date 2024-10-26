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
