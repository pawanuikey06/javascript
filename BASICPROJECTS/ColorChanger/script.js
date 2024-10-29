const buttons =document.querySelectorAll('.colors')
console.log(buttons)

const body =document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        console.log(event);
        console.log(event.target.id);
        const color =event.target.id;
        switch(color){
            case "grey":
                document.body.style.backgroundColor = color;
                break;
            case "white":
                document.body.style.backgroundColor = color;
                break;
            case "Blue":
                document.body.style.backgroundColor = color;
                break;
            case "Crimson":
                document.body.style.backgroundColor =color;
                break;
            case "purple":
                    document.body.style.backgroundColor =color;
                    break;    
            default:
                console.log("Color not found");
        }
        
        
    })
})