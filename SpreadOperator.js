let numbers =[1,2,3,4];
console.log(...numbers)
console.log(numbers);


function sumAll(a,...args){
    let sum=0;
    for(let arg of args) sum+=arg;
    return sum+a;
}

console.log(sumAll(1,2,3))


let hi="hello ji ";
let arr =[...hi].join("-")
let arr1 =[...hi]
console.log(...hi)
console.log(typeof arr)
console.log(typeof arr1)


function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
  }

  sayHiBye("pawan","uikey")