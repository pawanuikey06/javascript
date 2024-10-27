function calculateCartPrice(val,val2,...num1){
    return num1
}


// console.log(calculateCartPrice(200,300,400))

const user={
    name:'pawan',
    price:199

}

function handleObject(anyObject){
    console.log(`UserName Is ${anyObject.name} and Price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    name :'sammy',
    price:242141134
})

// Passing Array Inside the Function

{
   const a =324
   
console.log(a)

}

// This KeyWord

const user1 ={
    username :"pawan",
    price: 3231,
     welcomeMessage :function (){
        console.log(`${this.username}, Welcome to Website`)
        console.log(this)
     }
}

user1.welcomeMessage()
user1.username ='Sammy'
user1.welcomeMessage()
console.log(this)

function chai(){
    let username ='pawan'
    console.log(this.username)
}
chai()
console.log(this)

const chai1=function(){
    let username ='pawan'
    console.log(this.username)
}
chai1()

const chai2 =()=>{
     let user ='hitesh'
     console.log(this.user)
}
chai2()

