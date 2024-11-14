const requestUrl= 'https://api.github.com/users/hiteshchoudhary';
const xhr =new XMLHttpRequest();
xhr.open('GET',requestUrl)
xhr.onreadystatechange =()=>{
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data =this.responseText
        console.log(typeof data);
        
        console.log(data.followers);
    }
}
xhr.send()