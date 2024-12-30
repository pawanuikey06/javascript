
function walkDog(callback){
    
    
    setTimeout(()=>{
        console.log("you walk the dog")
        callback();
    },1500);
}


function cleanKitchen(callback){
    

    setTimeout(()=>{
        console.log("You clean the kitchen ");
        callback();
        
    },2500)
}


function takeoutTrash(callback){

    setTimeout(() => {

        console.log("yOU TAKE out the trash")
        callback();
        
    }, 500);
}

walkDog(()=>{
    cleanKitchen(()=>{
        takeoutTrash(()=>{
            console.log("You Finished all the Chores!")
        })
    })
});
