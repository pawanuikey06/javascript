// Ways of Adding elements in HTML page


// Take more time cuz evry time when we add we have to traverse whole tree 
// Structure
const addlang =(langName)=>{
   const li= document.createElement('li')
   li.innerHTML =`${langName}`
   document.querySelector('.language').appendChild(li)
}
addlang('Python')
addlang('TypeScript')


// Best Technique
const optTechnique =(langName)=>{
    const li =document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)

}
optTechnique('GoLang')


// EDIT
const secondLang =document.querySelector('li:nth-child(2)')
//secondLang.innerHTML ="Mojo" // not good approach

const newLi =document.createElement('li')
newLi.textContent='Mojo'
secondLang.replaceWith(newLi)
// Replace 

// edit 
const firstLang =document.querySelector('li:first-child')
firstLang.outerHTML='<li>C++</li>'

// REMOVE 
const lastLang =document.querySelector('li:last-child')
lastLang.remove()
