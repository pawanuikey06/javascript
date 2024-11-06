setTimeout(()=>{
   console.log('pawan');
   
},2000)
setInterval(()=>{
  console.log("Welcome To World Of JavaScript")
},20000)
setInterval(()=>{
    console.log("Welcome To World Of DevelopMent")
  },20000)

const sayHitesh =function(){
    console.log('Hitesh');
}
const changeText =()=>{
    document.querySelector('h1').innerHTML="Best JS Series"
}
setTimeout(sayHitesh,2000)
const cahngeMe =setTimeout(changeText,3000)
// clearTimeout(cahngeMe)

document.querySelector('#stop').
addEventListener('click',()=>{
    clearTimeout(cahngeMe)
    console.log("STOPPED");
    
})
