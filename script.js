const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5d7796954fmshe5bcf56502f84d0p1495a5jsnd8383841423e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // Assuming these elements exist in your HTML
            const cloud_pct = document.getElementById("cloud_pct");
            const temp = document.getElementById("temp");
            const feels_like = document.getElementById("feels_like");
            const humidity = document.getElementById("humidity");
            const min_temp = document.getElementById("min_temp");
            const max_temp = document.getElementById("max_temp");
            const wind_speed = document.getElementById("wind_speed");
            const wind_degrees = document.getElementById("wind_degrees");
            const sunrise = document.getElementById("sunrise");
            const sunset = document.getElementById("sunset");
            
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

const submit = document.getElementById("submit");
const city = document.getElementById("city");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Hyderabad"); 