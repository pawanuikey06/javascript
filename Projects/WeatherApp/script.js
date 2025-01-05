const apiKey ="create ur own api key";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&";
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather() {
    const city =document.querySelector("#enter").value;
    if(!city){
        alert("please enter city Name");
    }
    const response =await fetch(apiUrl+`q=${city}`+`&appid=${apiKey}`);
    var data =await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity+' %  ';
    document.querySelector(".Wind").innerHTML=data.wind.speed+' km/h  ';

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    if(data.weather[0].main =="Clear"){
        weatherIcon.src="images/clear.png"
    }
    if(data.weather[0].main =="Rain"){
        weatherIcon.src="images/rain.png"
    }
    if(data.weather[0].main =="Drizzle"){
        weatherIcon.src="images/drizzle.png"

    }
    if(data.weather[0].main =="Mist"){
        weatherIcon.src="images/mist.png"
    }
    

    document.querySelector(".weather").style.display="block";
}
document.getElementById("submit").addEventListener("click",checkWeather)
