// add city search function

var searchBtn = document.getElementById("searchBtn");
var cityInput = document.getElementById("textAreaInput")
var cityDisplay = document.getElementById("cityName")
var temp = document.getElementById("temp")
var wind = document.getElementById("wind")
var humidity = document.getElementById("humidity")
var uv = document.getElementById("uv")
let lat = 0; 
let lon = 0;
var day1 = document.getElementById("fiveDayTitle1");
var day2 = document.getElementById("searchBtn");
var day3 = document.getElementById("searchBtn");
var day4 = document.getElementById("searchBtn");
var day5 = document.getElementById("searchBtn");

// put api information of currently selected city into main box

searchBtn.addEventListener("click",function(event) {
    event.preventDefault(); 
fetch("http://api.openweathermap.org/geo/1.0/direct?q=" +
cityInput.value +
"&limit=1&appid=b497240b0e51a78d8e70e5314eea6385"
)
.then(function(response) {
    if (response.ok) {
        return response.json()
        .then((data) => {
            console.log(data)
             lat = data[0].lat
             lon = data[0].lon
            console.log(lat, lon); 
            var cityName = data[0].name
            cityDisplay.innerHTML = cityName;
        }); 
    } else {
        return Promise.reject(response); 
    }
    
}) 
    

    
fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=visibility&appid=b497240b0e51a78d8e70e5314eea6385')
 
.then(function (response) {
    // console.log(response); 
    if (response.ok) {
        return response.json()
        .then((data) => {
            console.log(data)
            console.log(data); 
            
            var temperatureData = "Temperature: " + data.current.temp;
            var windData = "Wind Speed: " + data.current.wind_speed;
            var humidityData = "Humidity: " + data.current.humidity; 
            var uvData = "UV data: " + data.daily[0].uvi; 
            var day1Data = data.daily[1].temp.max; 
        day1.innerHTML = day1Data; 
        temp.innerHTML = temperatureData; 
        wind.innerHTML = windData; 
        humidity.innerHTML = humidityData; 
        uv.innerHTML = uvData; 
        })
    } else {
        return Promise.reject(response); 
    }
        

        cityDisplay.innerHTML = cityName;
        temp.innerHTML = temperatureData; 
        wind.innerHTML = windData; 
        humidity.innerHTML = humidityData; 
        
     })
     .catch(function(error) {
         console.log(error); 
         
     }) 


// / add search history in the form of buttons





// / 5 day forecast for currently selected city


// / text area js resizing code for city search ui.
    })