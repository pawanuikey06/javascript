
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


async function doChores() {

    const walkDogResult =await walkDog();
    console.log(walkDogResult);

    try {
        const cleanKitchenResult =await cleanKitchen();
       console.log(cleanKitchenResult);

    } catch (error) {
        console.error(error)
        
    }

    const takeoutTrashResult =await takeoutTrash();
    console.log(takeoutTrashResult);
    
}


doChores()

