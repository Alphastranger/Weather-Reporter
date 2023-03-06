var fiveDay = document.getElementById('fiveday');
var tomorrow = document.getElementById('tomorrow');
var daythree = document.getElementById('daythree')
var dayfour = document.getElementById('dayfour')
var dayfive = document.getElementById('dayfive')
var daysix = document.getElementById('daysix')
var submitButton = document.getElementById('submit-button');
var cityName = document.getElementById('cityName');
var todayTemp = document.getElementById('today-temp');
var todayWind = document.getElementById('today-wind');
var todayHumidity = document.getElementById('today-humidity');
var searchBox = document.getElementById('search-box');
var searchHistory = document.getElementById('history');
var searchHistEl = localStorage.getItem('History');
var boxValue = searchBox.value;

if (searchHistEl.value == true) {
let historyEl = document.createElement('button')
searchHistory.appendChild(historyEl)
historyEl.textContent = searchHistEl;
}

function speedySearch(){
    var boxValue = searchBox.value;
    console.log(boxValue);
    let searHist = document.createElement('button')
    searchHistory.appendChild(searHist)
    searHist.textContent = boxValue;
    localStorage.setItem('History', boxValue)
    cityName.textContent = boxValue;

    console.log(searchBox)

 let geoKey = 'http://api.openweathermap.org/geo/1.0/direct?q=' + boxValue + '&limit=5&appid=a0dfdb5ddf4248081a0e3da0b4bb8938'
fetch(geoKey)
    .then(function(response){
        return response.json ();
    })
    .then(function (data){
        console.log(data)
        var latitude = data[0].lat;
        var longitude = data[0].lon;

    
let apiKey = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=a0dfdb5ddf4248081a0e3da0b4bb8938'
fetch(apiKey)
    .then(function(response){
        return response.json ();
    })
    .then(function (data){
        console.log(data)
        console.log(data.list[0].main.temp)
        //today's weather
        todayTemp.textContent = 'Temp: ' + (data.list[0].main.temp-273.15) + ' degrees Celsius'
        todayWind.textContent = 'Wind Speed: ' + data.list[0].wind.speed
        todayHumidity.textContent = 'Humidity: ' + data.list[0].main.humidity
        if (data.list[0].weather[0].main === 'Clouds'){
            var weatherIcon = document.createElement('i')
            cityName.appendChild(weatherIcon)
            weatherIcon.classList.add('fa-sharp')
            weatherIcon.classList.add('fa-solid')
            weatherIcon.classList.add('fa-cloud')
        } else if (data.list[0].weather[0].main === 'Rain' || data.list[0].weather[0].main === 'Drizzle' || data.list[0].weather[0].main === 'Thunderstorm'){
            var weatherIcon = document.createElement('i')
            cityName.appendChild(weatherIcon)
            weatherIcon.classList.add('fa-sharp')
            weatherIcon.classList.add('fa-solid')
            weatherIcon.classList.add('fa-cloud')
        } else if (data.list[0].weather[0].main === 'Clear'){
            var weatherIcon = document.createElement('i')
            cityName.appendChild(weatherIcon)
            weatherIcon.classList.add('fa-sharp')
            weatherIcon.classList.add('fa-solid')
            weatherIcon.classList.add('fa-sun')
        } else if (data.list[0].weather[0].main === 'Snow') {
            var weatherIcon = document.createElement('i')
            cityName.appendChild(weatherIcon)
            weatherIcon.classList.add('fa-sharp')
            weatherIcon.classList.add('fa-solid')
            weatherIcon.classList.add('fa-snowflake')
        } else {
            var weatherIcon = document.createElement('i')
            cityName.appendChild(weatherIcon)
            weatherIcon.classList.add('fa-sharp')
            weatherIcon.classList.add('fa-solid')
            weatherIcon.classList.add('fa-block-quest')
        }


        //tomorrow's weather
        let tomWeath = document.createElement('p')
        tomorrow.appendChild(tomWeath)
        tomWeath.textContent = 'Temp: ' + data.list[1].main.temp + 'K degrees\n' + "Wind: " + data.list[1].wind.speed +'\n' + 'Humidity: ' + data.list[1].main.humidity

        //Day three weather
        let daythreeWeath = document.createElement('p')
        daythree.appendChild(daythreeWeath)
        daythreeWeath.textContent = 'Temp: ' + data.list[2].main.temp + 'K degrees\n' + "Wind: " + data.list[2].wind.speed +'\n' + 'Humidity: ' + data.list[2].main.humidity

        //Day four weather
        let dayfourWeath = document.createElement('p')
        dayfour.appendChild(dayfourWeath)
        dayfourWeath.textContent = 'Temp: ' + data.list[3].main.temp + 'K degrees\n' + "Wind: " + data.list[3].wind.speed +'\n' + 'Humidity: ' + data.list[3].main.humidity

        //Day five weather
        let dayfiveWeath = document.createElement('p')
        dayfive.appendChild(dayfiveWeath)
        dayfiveWeath.textContent = 'Temp: ' + data.list[4].main.temp + 'K degrees\n' + "Wind: " + data.list[4].wind.speed +'\n' + 'Humidity: ' + data.list[4].main.humidity

        //Day six weather
        let daysixWeath = document.createElement('p')
        daysix.appendChild(daysixWeath)
        daysixWeath.textContent = 'Temp: ' + data.list[5].main.temp + 'K degrees\n' + "Wind: " + data.list[5].wind.speed +'\n' + 'Humidity: ' + data.list[5].main.humidity
    
    })
    })
}

submitButton.addEventListener('click', speedySearch)