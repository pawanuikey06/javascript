const div=document.createElement('div');
console.log(div);
div.className ='main'
div.id =Math.round(Math.random()*100+1)
div.setAttribute('title' ,'Generate tile')
div.style.backgroundColor ='crimson'
div.style.padding ='12px'
div.innerText =" CHAI AND BISCUIT"
const addText =document.createTextNode("Chai Aur Code")
div.appendChild(addText)
document.body.appendChild(div)
