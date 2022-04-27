// add city search function
window.onload=function() {
var searchBtn = document.getElementById("#searchBtn");
var cityInput = document.getElementById("#textarea1")
var temp = document.getElementById("#temp")
var wind = document.getElementById("#wind")
var humdidity = document.getElementById("#humidity")
var uv = document.getElementById("#uv")
}
// put api information of currently selected city into main box

searchBtn.addEventListener("click",function() {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid=b497240b0e51a78d8e70e5314eea6385') 
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => alert("Does not exist"))
})
// add search history in the form of buttons





// 5 day forecast for currently selected city


// text area js resizing code for city search ui. 
$('#textarea1').val('city');
M.textareaAutoResize($('#textarea1'));