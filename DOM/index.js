const parent =document.querySelector('.parent')
console.log(parent)
// console.log(parent.children[1].innerHTML)

for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color ="orange"
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayeOne =document.querySelector('.day')
console.log(dayeOne);

console.log(dayeOne.parentElement)
console.log(dayeOne.nextElementSibling);
// NODE LIST
console.log(`NODES :`, parent.childNodes);

