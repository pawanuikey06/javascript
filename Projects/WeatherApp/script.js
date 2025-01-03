const apiKey ="8e2b0874b20879611977fcd3cd381247";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&";

async function checkWeather() {
    const city =document.querySelector("#enter").value;
    if(!city){
        alert("please enter city Name");
    }
    const response =await fetch(apiUrl+`q=${city}`+`&appid=${apiKey}`);
    var data =await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity+' %  ';
    document.querySelector(".Wind").innerHTML=data.wind.speed+' km/h  ';

    

    
}
document.getElementById("submit").addEventListener("click",checkWeather)
