const inputBox = document.getElementById('input-box')
const searchBtn = document.getElementById('search-addon')
const weather_img = document.getElementsByClassName('header-image')
const temperature = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const cloudy = document.getElementById('cloudy')
const wind= document.getElementById('wind')
const cityName = document.getElementById('city')

async function checkWeather(city){
    const api_key ='c198752904ab1a0787a32bc2fd8ef0b3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    console.log("data: " +url)
    const weather_data = await fetch(`${url}`).then(response => 
        response.json());

    console.log("string_data" +JSON.stringify(weather_data))

    if(weather_data.cod === `404`){
        console.log('error')
        return;
    }
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}&#176;`
    humidity.innerHTML = `${weather_data.main.humidity}`
    wind.innerHTML = `${weather_data.wind.speed} km/h`
    cloudy.innerHTML = `${weather_data.weather[0].description}`
    cityName.innerHTML = `${weather_data.name}`
    switch(weather_data.weather[0].description){
        case 'Clouds':
            weather_img.src = "cloudy.png";
            break;
        case 'Smoke':
            weather_img.src = "summer.png";
            break;
        case 'Rain':
            weather_img.src = "Thunder.png";
            break;
        default:
            weather_img.src = "Rectangle 1.png";

    }
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

const cureDate = document.getElementById('date')
let weather = document.getElementById('sky');

 const tempStatus = "Clouds";
 const getCurrentTime = () =>{
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = weekday[now.getDay()];
    var year = now.getFullYear();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let period ="AM";
    if(hours > 11 ){
        period ="PM";
        if(hours > 12) hours -=12;
    }
    if(month < 10){
        month = "0" + month;
    }
    if(mins < 10){
        mins = "0" + mins;
    
    if(day < 10){
        day = "0" + day
    }
}
    console.log(month + ' ' + day + ' '+year + ' ' +hours+ ' '+mins);
    return `${hours}:${mins} ${day} ${month}/${year}`;
 };
 
 cureDate.innerHTML = getCurrentTime();
 getCurrentTime();