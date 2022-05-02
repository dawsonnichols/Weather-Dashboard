// add city search function

var searchBtn = document.getElementById("searchBtn");
var cityInput = document.getElementById("textAreaInput");
var cityDisplay = document.getElementById("cityName");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv");
let icon = document.getElementById("icon"); 
let lat = 0;
let lon = 0;
var day1 = document.getElementById("fiveDayTitle1");
var day2 = document.getElementById("fiveDayTitle2");
var day3 = document.getElementById("fiveDayTitle3");
var day4 = document.getElementById("fiveDayTitle4");
var day5 = document.getElementById("fiveDayTitle5");
var timeText = document.getElementById("currentDay");
var fiveDayStyle = document.getElementById("fiveDayStyle");
var fiveDayInfoOneCall = document.getElementById("fiveDayInfoOne");
var fiveDayInfoTwoCall = document.getElementById("fiveDayInfoTwo");
var fiveDayInfoThreeCall = document.getElementById("fiveDayInfoThree");
var fiveDayInfoFourCall = document.getElementById("fiveDayInfoFour");
var fiveDayInfoFiveCall = document.getElementById("fiveDayInfoFive");
var cities = [];

// put api information of currently selected city into main box

$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  let text = cityInput.value;
  cities.push(text);
  localStorage.setItem("searchHistory", JSON.stringify(cities));
  console.log(text);
  console.log(cities);
  displayCityhistory = JSON.parse(localStorage.getItem("searchHistory"));
  console.log(displayCityhistory);
  JSON.parse(localStorage.getItem("searchHistory"));
  const button = document.createElement("button");
  document.getElementById("searchHistory").appendChild(button);
  button.innerHTML = text; 

  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      cityInput.value +
      "&limit=1&appid=b497240b0e51a78d8e70e5314eea6385"
  )
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })

    .then((data) => {
      console.log(data);
      lat = data[0].lat;
      lon = data[0].lon;
      console.log(lat, lon);
      var cityName = data[0].name;
      cityDisplay.innerHTML = cityName;
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=visibility&appid=b497240b0e51a78d8e70e5314eea6385"
      )
        .then(function (response) {
          // console.log(response);
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data);
          //   const currentDate = new Date(data.current.dt * 1000);
          //   console.log(currentDate);
          //   const day = currentDate.get("year");
          //   const month = currentDate.getMonth() + 1;
          //   const year = currentDate.getFullYear();
          //   const hour = currentDate.getHours();
          //   const minute = currentDate.getMinutes();

          //   " (" + month + "/" + day + "/" + year + ") " + hour + ":" + minute;
          //   timeText.innerHTML = currentDate;
          var temperatureData = "Temperature: " + data.current.temp;
          var windData = "Wind Speed: " + data.current.wind_speed;
          var humidityData = "Humidity: " + data.current.humidity;
          var uvData = "UV data: " + data.current.uvi;
          var iconData = data.current.weather[0].icon; 
          var iconurl = "http://openweathermap.org/img/w/" + iconData + ".png";
          $('#icon').attr('src', iconurl);
          fiveDayStyle.classList.add("teal");
          let uvColor = document.createElement("span"); 
          
          if (data.current.uvi < 5 ) {
            uvColor.setAttribute("class", "green accent-4"); 
          }
          else if (data.current.uvi < 9) {
            uvColor.setAttribute("class", "yellow accent-4")
          }
          else {
            uvColor.setAttribute("class", "red accent-4");
          }
          uv.append(uvColor); 
          var day1Data = "Tomorrow ";
          var fiveDayInfoOne =
            " Temperature: " +
            data.daily[1].temp.max +
            " Humidity: " +
            data.daily[1].humidity +
            " Wind Speed: " +
            data.daily[1].wind_speed;
          var day2Data = "Day after Tomorrow ";
          var fiveDayInfoTwo =
            " Temperature: " +
            data.daily[2].temp.max +
            " Humidity: " +
            data.daily[2].humidity +
            " Wind Speed: " +
            data.daily[2].wind_speed;
          var day3Data = "Three days from now ";
          var fiveDayInfoThree =
            " Temperature: " +
            data.daily[3].temp.max +
            " Humidity: " +
            data.daily[3].humidity +
            " Wind Speed: " +
            data.daily[3].wind_speed;
          var day4Data = " Four days from now ";
          var fiveDayInfoFour =
            " Temperature: " +
            data.daily[4].temp.max +
            " Humidity: " +
            data.daily[4].humidity +
            " Wind Speed: " +
            data.daily[4].wind_speed;
          var day5Data = " Five days from now ";
          var fiveDayInfoFive =
            " Temperature: " +
            data.daily[5].temp.max +
            " Humidity: " +
            data.daily[5].humidity +
            " Wind Speed: " +
            data.daily[5].wind_speed;
          day1.innerHTML = day1Data;
          day2.innerHTML = day2Data;
          day3.innerHTML = day3Data;
          day4.innerHTML = day4Data;
          day5.innerHTML = day5Data;
          temp.innerHTML = temperatureData;
          wind.innerHTML = windData;
          humidity.innerHTML = humidityData;
          uv.innerHTML = uvData;
          fiveDayInfoOneCall.innerHTML = fiveDayInfoOne;
          fiveDayInfoTwoCall.innerHTML = fiveDayInfoTwo;
          fiveDayInfoThreeCall.innerHTML = fiveDayInfoThree;
          fiveDayInfoFourCall.innerHTML = fiveDayInfoFour;
          fiveDayInfoFiveCall.innerHTML = fiveDayInfoFive;
          icon.innerHTML = iconData; 
        })
        .catch(function (error) {
          console.log(error);
        });
    });
});
// / add search history in the form of buttons

for (var i = 0; i < cities.length; i++) {
  cities[i];
}
