
"use strict"
function hello(callback){
    
    console.log("hello !");
    callback();
}

function goodby(){
    console.log("Goodbye !");
}


hello(goodby);

// sum(display,6,7);

{function sum(callback ,x,y){
    let result =x+y;
    callback(result);
}

function display(result){
    console.log(result);
}}

sum(display,6,7);


let hi =()=>{
    console.log("hi");
}
hi()