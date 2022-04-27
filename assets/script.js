// add city search function

var searchBtn = document.getElementById("searchBtn");
var cityInput = document.getElementById("textAreaInput")
var cityDisplay = document.getElementById("cityName")
var temp = document.getElementById("temp")
var wind = document.getElementById("wind")
var humidity = document.getElementById("humidity")
var uv = document.getElementById("uv")
var coords; 
// put api information of currently selected city into main box

searchBtn.addEventListener("click",function() {
fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityInput.value+'&limit=1&appid=b497240b0e51a78d8e70e5314eea6385').then(function
(response) {
    if (response.ok) {
        return response.json(); 
    } else {
        return Promise.reject(response); 
    }
}).then(function (data) {
    console.log(data)
    coords = data; 
    console.log(coords); 
})
    
//     return fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=b497240b0e51a78d8e70e5314eea6385')
// }
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); 
//         var cityName = data['name'];
//         var temperatureData = data['main']['temp']; 
//         var windData = data['wind']['speed']; 
//         var humidityData = data['main']['humidity']; 
//         var uvData = data['']

//         cityDisplay.innerHTML = cityName;
//         temp.innerHTML = temperatureData; 
//         wind.innerHTML = windData; 
//         humidity.innerHTML = humidityData; 

//     })


// })
// add search history in the form of buttons





// 5 day forecast for currently selected city


// text area js resizing code for city search ui.
});