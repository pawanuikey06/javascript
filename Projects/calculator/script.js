document.getElementById("CalculateButton").addEventListener("click",()=>{
    const one =parseFloat(document.getElementById("one").value);
    const two =parseFloat(document.getElementById("two").value);
    const operation=document.getElementById("Operation").value.trim();
    let result;
    switch (operation) {
        case '*':
            result=one*two;
            
            break;
    
        case '-':
            result=one-two;
            break;
        case '/':
            if(two!=0)
                {result=one/two};
            
            break;
    
        case '+':
            result=one+two;
            break;
        default:
            result='Invalid operation';
            break;
    }
    const exist=document.getElementById('dynamicResult')
    if(exist){
        exist.remove();
    }
    const resultElement =document.createElement("h1");
    resultElement.id="dynamicResult";
    resultElement.textContent=`Result is :${result}`;
    resultElement.style.color='crimson';
    document.body.appendChild(resultElement)

})