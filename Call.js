let Name={
    firstName:"Akshay",
    lastName:'Saini',
    printFullName:function(){
        console.log(this.firstName+' '+this.lastName)
    }

};

let name2={
    firstName:"Sachin",
    lastName:"Tendulkar",
    
}

let printFullName=function(){
    console.log(this.firstName+' '+this.lastName)
}

// Name.printFullName();

// /Function Borrowing

Name.printFullName.call(name2);
printFullName.call(name2);


const numbers = [1, 2, 3, 4];

console.log(Math.max.apply(null, numbers));  // Output: 4
console.log(Math.min.apply(null, numbers));  // Output: 1
