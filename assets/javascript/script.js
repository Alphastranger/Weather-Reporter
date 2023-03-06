var fiveDay = document.getElementById('fiveday');
var tomorrow = document.getElementById('tomorrow');
var submitButton = document.getElementById('submit-button');
var cityName = document.getElementById('cityName');
var todayTemp = document.getElementById('today-temp');
var todayWind = document.getElementById('today-wind');
var todayHumidity = document.getElementById('today-humidity');
var searchBox = document.getElementById('search-box').value;

cityName.textContent = searchBox;
let strSplit = searchBox.split(' ');
console.log(searchBox)
let geoKey = 'http://api.openweathermap.org/geo/1.0/direct?q=' + 'London' + '&limit=5&appid=a0dfdb5ddf4248081a0e3da0b4bb8938'
fetch(geoKey)
    .then(function(response){
        return response.json ();
    })
    .then(function (data){
        console.log(data)
        var latitude = data[0].lat;
        var longitude = data[0].lon;

    
let apiKey = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=a0dfdb5ddf4248081a0e3da0b4bb8938'
// function getApi() {
fetch(apiKey)
    .then(function(response){
        return response.json ();
    })
    .then(function (data){
        console.log(data)
        console.log(data.list[0].main.temp)
        todayTemp.textContent = 'Temp: ' + data.list[0].main.temp + ' degrees'
        todayWind.textContent = 'Wind: ' + data.list[0].wind.speed
        todayHumidity.textContent = 'Humidity: ' + data.list[0].main.humidity
        if (data.list[0].weather[0].main === 'Clouds'){
            var weatherIcon = document.createElement('i')
            cityName.appendChild(weatherIcon)
            // weatherIcon.innerHTML = ;

        }


        // for (var i=0; i < data.length; i++) {
        //     var tomorrow = document.getElementById('tomorrow');
        //     var createDisplayEl = document.createElement('p')
        //     createDisplayEl.textContent = data.list[i].main.temp;
        //     tomorrow.append(createDisplayEl)

        // }
    })
})
// }
// submitButton.addEventListener('click',function (){
//     fetch(apiKey)
//     .then(function(response){
//         return response.json ();
//     })
//     .then(function (data){
//         let cityName = data.city.name;
//         cityName += searchVal;
//         latitude = data.city.coord.lat;
//         longitude = data.city.coord.lon;
//     })
// })