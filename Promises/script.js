const promiseOne =new Promise((resolve,reject)=>{
  //Do an async task
  //DB calls ,cryptography ,network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  },1000) 
})
promiseOne.then(()=>{
    console.log("Promise Consumed");
})



new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log(("Async Task 2"));
       resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 Resolved");
    
})


const PromisThree =new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve({username :"Chai",email:"chai@example.com"})
    },1000)
})

PromisThree.then((user)=>{

    console.log(user);
    
})


const promiseFour =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =false;
        if(!error){
            resolve({username:'pawan',password:"123"})
        }else{
            reject('EROOR: Something went Wrong')
        }

    },1000)

})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
    
})
.catch((e)=>{
    console.log(e);
    
}).finally(()=>{
    console.log("The Promise is Either Resolved or Rejected")
})

const PromiseFive =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =false;
        if(!error){
            resolve({username:'javascript',password:"123"})
        }else{
            reject('EROOR: JS Went Wrong')
        }

    },1000)


})

async function consumePromiseFive() {
   try {const response=await PromiseFive;
    console.log(response)}
    catch(error){
        console.log(error)
    }
    
}
consumePromiseFive()

async function getAllUser() {
    try{
        const response =await fetch('https://mail.google.com/mail')
        const data =await response.json();
    
         console.log(data);
        }catch(error){
        console.log(error)
    }
    
}
getAllUser()