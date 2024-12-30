
function walkDog(){

    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{

        const dogWalked=true;
        if(dogWalked){

            resolve("DOG WALKED")
        }else{
            reject("Dog Didn't Walked");
        }
            
            
        },1500);
    })
}


function cleanKitchen(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const kitcheCleand =false;
            if(kitcheCleand){
                resolve("You clean the kitchen ");
            }else{
                reject("Kitchen is not Cleaned")
            }
           
            
        },2500)
    })
}


function takeoutTrash(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            const TrashTakedOut=true;
            if(TrashTakedOut){
                resolve("yOU TAKE out the trash");
            }else{
                reject("Trash is not Taked OUT !")
            }
            
            
        }, 500);
    })
}

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeoutTrash(()=>{
//             console.log("You Finished all the Chores!")
//         })
//     })
// });

// Method cahnining


walkDog().then(value=>{console.log(value);return cleanKitchen()})
.then(value=>{console.log(value);return takeoutTrash()})
.then(value=>{console.log(value);
    console.log("You Finished All The Chores")}).catch(error=>console.error(error));
    
