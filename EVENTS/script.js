// document.getElementById('owl').onclick =()=>{
//     alert('OWL CLICKED')
// }

// best Approach
document.getElementById('owl').addEventListener('click',(event)=>{

    console.log(event)

},false)
//  HOMEWORK
// TYPE of Event Listener, Timsestamp ,defaultPrevented ,
// Target ,toElement ,srcElement , currentTarget 
// ClientX,ClientY ,screenX,screenY ,altKEy ,ctrlKey,shiftkey,keyCode

// EVENT PROPOGATION
document.getElementById('images').addEventListener('click',(event)=>{

    console.log("Clicked Inside The UL")

})

document.getElementById('owl').addEventListener('click',(event)=>{

    console.log('Owl Clicked')
    event.stopPropagation()

})

document.getElementById('google').addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('google Clicked');
    
})



document.querySelector('#images').addEventListener('click',(event)=>{
    console.log(event);
    console.log(event.target)
    console.log(event.target.parentNode)
    console.log(event.target.tagName)
    if(event.target.tagName==='IMG'){
        console.log(event.target.id)
        let removeIt =event.target.parentNode
    removeIt.remove()

    }
    // removeIt.parentNode.removeChild(removeIt)

},false)