function my(){
    console.log("hello ji")
    console.log("hello NIT Raipur")
}

my()

function sum(x,y){
    let z=x+y
    return z
}

let val =sum(4,8)
console.log(val)



// Arrow Function
const mul =(x,y)=>{
    return x*y;
};

console.log(mul(4,5))

// 
const PrintHello=()=>{
    console.log("Hello Sir Welcome to Raipur");
};

PrintHello();

const NoOfVowel=(str)=>{
    let count=0
    for(let ch of str){
        if(ch==='a'||ch==='A'||ch==='I'||ch==='i'||ch==='e'||ch==='E'||ch==='O'||ch==='o'||ch==='u'||ch==='U'){
             count+=1;
        }
    }
    return count;
}


let num =NoOfVowel("Pawan Kumar Uikey")
console.log(num)


// FOR EACH LOOP

let arr= [1,2,3,4,598765,44245,23,43,565,676,];

// arr.forEach(function printVal(val){
//     console.log("square of ",val , "is =>", val*val)
// })

// or
let calculateSQR =(val)=>{
    console.log("square of ",val , "is =>", val*val)
};

arr.forEach(calculateSQR)

// MAP

let newArr =arr.map((val)=>{
    return val**2;
})
console.log(newArr)

// Filter

let newARR =arr.filter((val)=>{
    return val%2===1;
})
console.log(newARR)

// REDUCE METHOD 


let arr1 =[1,2,3,4,5,6,53,22,5565,767865,32,54,4555,565];

let initialValue =0;
let sumWithInitial =arr1.reduce((accumulator,currentval)=>{
    return accumulator>currentval ? accumulator :currentval;
})

console.log(sumWithInitial)



// Filter out marks of student that have marks 90+


let marks =[44,99,78,79,98,67,92,94,96,45,69,95]

let toppers =marks.filter((mark)=>{
    return mark>90;
})

console.log(toppers)


//

let n =prompt("enter Any Numeber");


let Array =[];

for(let i=1;i<=n;i++){
    Array[i-1]=i;
}

let prod =Array.reduce((res,cur)=>{
    return res*cur;
})

console.log(prod)