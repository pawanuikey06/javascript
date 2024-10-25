let arr=["Bloomberg","MicroSoft","Uber","Google","IBM","Netflix"];

console.log(`Array [ ${arr} ]  Before any operations`)

// Remove the first Company from the array
let frontEl=arr.shift()
console.log(arr,`front element deleted that is : "${frontEl}"`);

// Remove Uber and add ola in its place
arr.splice(1,1,"Ola");
console.log(arr);

// Add amazon at the end of Array
arr.push("AMAZON")
console.log(arr)