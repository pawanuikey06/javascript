let name2={
    firstName:"Sachin",
    lastName:"Tendulkar",
    
}

let printFullName=function(city,state){
    console.log(this.firstName+' '+this.lastName+' '+city+" "+state)
}


let printMyname =printFullName.bind(name2,'Indore','Madhyapradesh')
printMyname()
console.log(printMyname)