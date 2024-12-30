

function task1(callback){


    setTimeout(()=>{
        console.log("task 1 is complete")
        callback()
    },1000)
}

function task2(callback){
    setTimeout(()=>{
        console.log("task 2 is complete")
        callback()
    },2000)
}

function task3(callback){
    setTimeout(()=>{
        console.log("task 3 is complete")
        callback()
    },3000)
}

function task4(callback){
    setTimeout(()=>{
        console.log("task 4 is complete")
        callback()
    },2500)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("ALL TASKS COMPLETED")
            })
        })
    })
})