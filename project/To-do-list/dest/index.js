const inputvalue =document.getElementById("input-box");
const listConatainer =document.getElementById("list-container");


function addTask(){
    if(inputvalue.value ===''){
        alert("you have must write something ! ")
    }else{
        let li =document.createElement("li");

        li.innerHTML =inputvalue.value;
        listConatainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputvalue.value = "";
    saveData()
}

listConatainer.addEventListener("click" ,function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listConatainer.innerHTML);
}
function showlist(){
    listConatainer.innerHTML =localStorage.getItem("data");

}
showlist();