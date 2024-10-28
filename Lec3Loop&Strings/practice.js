// For LOOP

for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
    
    
}
console.log("next")
// Do while loop
let i=0;
do{
    console.log(i);
    i++
}while(i<10)


    // For Of Loop

const MyObject={
    js:"javascript",
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by Apple'
}

for(const key in MyObject){
    console.log(MyObject[key])
}

const Programming =['js','java','cpp','python','go','flutter']

for(const key of Programming){
    console.log(key)
}

for(const key in Programming){
    console.log(Programming[key])
}