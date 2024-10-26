let MyDate =new Date()
console.log(MyDate);
console.log(MyDate.toString());
console.log(MyDate.toISOString());
console.log(MyDate.toUTCString());
console.log(MyDate.toLocaleString());
console.log(MyDate.toLocaleTimeString());

console.log(typeof MyDate)



let MyCreatedDate =new Date(2023,0,23)
console.log(MyCreatedDate.toDateString())


// let newDate =new Date(2024,9,26,5,3);
// console.log(newDate.toDateString())


// let newDate =new Date("2024-09-26");
let newDate =new Date("10-26-2024");
console.log(newDate.toDateString())


let myTimeStamp =Date.now();

console.log(myTimeStamp)

console.log(newDate.getTime())
console.log(Date.now())
console.log(Math.round(Date.now()/1000))

let dattt =new Date()
console.log(dattt.getDay())


dattt.toLocaleString('default',{
    weekday:"long"
})