// Stack Memory

let myName ="Pawan Kumar Uikey";

let anotherName =myName;

console.log(anotherName)
console.log(myName)

// / just crated teh copy of name previously and doesn't affect the value of name variable;
anotherName =" Kumar Uikey";

console.log(anotherName)


// Heap Memoery

let  useOne ={
    email :"user@google.com",
    upi :"21232344@paytm"
};

let userTwo =useOne;

console.log(useOne);
console.log(userTwo)

//  Also s]Affects the value of userOne beacuase of the Reference
userTwo.email ="pawanuikey690@gmail.com"

console.log(useOne);
console.log(userTwo)
