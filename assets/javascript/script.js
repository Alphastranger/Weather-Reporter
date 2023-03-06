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
var todayDate = document.getElementById('today-date')
var searchBox = document.getElementById('search-box');
var searchHistory = document.getElementById('history');
var searchHistEl = localStorage.getItem('History');
var boxValue = searchBox.value;

if ('History' in localStorage) {
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
        todayTemp.textContent = 'Temp: ' + Math.floor((((data.list[0].main.temp-273.15) * 9/5) + 32)) + ' degrees Fahrenheit'
        todayWind.textContent = 'Wind Speed: ' + data.list[0].wind.speed + " MPH"
        todayHumidity.textContent = 'Humidity: ' + data.list[0].main.humidity + '%'
        todayDate.textContent = 'Date: ' + data.list[0].dt_txt.split(' ') [0]
        if (data.list[0].weather[0].main === 'Clouds'){
            var weatherIconTod = document.createElement('i')
            cityName.appendChild(weatherIconTod)
            weatherIconTod.classList.add('fa-sharp')
            weatherIconTod.classList.add('fa-solid')
            weatherIconTod.classList.add('fa-cloud')
        } else if (data.list[0].weather[0].main === 'Rain' || data.list[0].weather[0].main === 'Drizzle' || data.list[0].weather[0].main === 'Thunderstorm'){
            var weatherIconTod = document.createElement('i')
            cityName.appendChild(weatherIconTod)
            weatherIconTod.classList.add('fa-sharp')
            weatherIconTod.classList.add('fa-solid')
            weatherIconTod.classList.add('fa-umbrella')
        } else if (data.list[0].weather[0].main === 'Clear'){
            var weatherIconTod = document.createElement('i')
            cityName.appendChild(wweatherIconTod)
            weatherIconTod.classList.add('fa-sharp')
            weatherIconTod.classList.add('fa-solid')
            weatherIconTod.classList.add('fa-sun')
        } else if (data.list[0].weather[0].main === 'Snow') {
            var weatherIconTod = document.createElement('i')
            cityName.appendChild(weatherIconTod)
            weatherIconTod.classList.add('fa-sharp')
            weatherIconTod.classList.add('fa-solid')
            weatherIconTod.classList.add('fa-snowflake')
        } else {
            var weatherIconTod = document.createElement('i')
            cityName.appendChild(wweatherIconTod)
            weatherIconTod.classList.add('fa-sharp')
            weatherIconTod.classList.add('fa-solid')
            weatherIconTod.classList.add('fa-block-question')
        }


        //tomorrow's weather
        function removeIfExists(selector) {
            var x = document.querySelector(selector)
            if (x) x.remove()
        }
        removeIfExists('#tomorrow p')
        removeIfExists('#tomorrow i')
        let tomWeath = document.createElement('p')
        tomorrow.appendChild(tomWeath)
        tomWeath.textContent = data.list[1].dt_txt.split(' ') [0] + '\n' + 'Temp: ' + Math.floor(((data.list[1].main.temp - 273.15) * 9/5) + 32) + ' degrees F\n' + "Wind: " + data.list[1].wind.speed +' MPH\n' + 'Humidity: ' + data.list[1].main.humidity + '%'
        if (data.list[1].weather[0].main === 'Clouds'){
            var weatherIconTom = document.createElement('i')
            tomorrow.appendChild(weatherIconTom)
            weatherIconTom.classList.add('fa-sharp')
            weatherIconTom.classList.add('fa-solid')
            weatherIconTom.classList.add('fa-cloud')
        } else if (data.list[1].weather[0].main === 'Rain' || data.list[1].weather[0].main === 'Drizzle' || data.list[1].weather[0].main === 'Thunderstorm'){
            var weatherIconTom = document.createElement('i')
            tomorrow.appendChild(weatherIconTom)
            weatherIconTom.classList.add('fa-sharp')
            weatherIconTom.classList.add('fa-solid')
            weatherIconTom.classList.add('fa-umbrella')
        } else if (data.list[1].weather[0].main === 'Clear'){
            var weatherIconTom = document.createElement('i')
            tomorrow.appendChild(weatherIconTom)
            weatherIconTom.classList.add('fa-sharp')
            weatherIconTom.classList.add('fa-solid')
            weatherIconTom.classList.add('fa-sun')
        } else if (data.list[1].weather[0].main === 'Snow') {
            var weatherIconTom = document.createElement('i')
            tomorrow.appendChild(weatherIconTom)
            weatherIconTom.classList.add('fa-sharp')
            weatherIconTom.classList.add('fa-solid')
            weatherIconTom.classList.add('fa-snowflake')
        } else {
            var weatherIconTom = document.createElement('i')
            tomorrow.appendChild(weatherIconTom)
            weatherIconTom.classList.add('fa-sharp')
            weatherIconTom.classList.add('fa-solid')
            weatherIconTom.classList.add('fa-block-question')
        }

        //Day three weather
        removeIfExists('#daythree p')
        removeIfExists('#daythree i')
        let daythreeWeath = document.createElement('p')
        daythree.appendChild(daythreeWeath)
        daythreeWeath.textContent = data.list[2].dt_txt.split(' ') [0] + '\n' +'Temp: ' + Math.floor(((data.list[2].main.temp - 273.15) * 9/5) + 32) + ' degrees F\n' + "Wind: " + data.list[2].wind.speed +' MPH\n' + 'Humidity: ' + data.list[2].main.humidity + '%'
        if (data.list[2].weather[0].main === 'Clouds'){
            var weatherIconThr = document.createElement('i')
            daythree.appendChild(weatherIconThr)
            weatherIconThr.classList.add('fa-sharp')
            weatherIconThr.classList.add('fa-solid')
            weatherIconThr.classList.add('fa-cloud')
        } else if (data.list[2].weather[0].main === 'Rain' || data.list[2].weather[0].main === 'Drizzle' || data.list[2].weather[0].main === 'Thunderstorm'){
            var weatherIconThr = document.createElement('i')
            daythree.appendChild(weatherIconThr)
            weatherIconThr.classList.add('fa-sharp')
            weatherIconThr.classList.add('fa-solid')
            weatherIconThr.classList.add('fa-umbrella')
        } else if (data.list[2].weather[0].main === 'Clear'){
            var weatherIconThr = document.createElement('i')
            daythree.appendChild(weatherIconThr)
            weatherIconThr.classList.add('fa-sharp')
            weatherIconThr.classList.add('fa-solid')
            weatherIconThr.classList.add('fa-sun')
        } else if (data.list[2].weather[0].main === 'Snow') {
            var weatherIconThr = document.createElement('i')
            daythree.appendChild(weatherIconThr)
            weatherIconThr.classList.add('fa-sharp')
            weatherIconThr.classList.add('fa-solid')
            weatherIconThr.classList.add('fa-snowflake')
        } else {
            var weatherIconThr = document.createElement('i')
            daythree.appendChild(weatherIconThr)
            weatherIconThr.classList.add('fa-sharp')
            weatherIconThr.classList.add('fa-solid')
            weatherIconThr.classList.add('fa-block-question')
        }

        //Day four weather
        removeIfExists('#dayfour p')
        removeIfExists('#dayfour i')
        let dayfourWeath = document.createElement('p')
        dayfour.appendChild(dayfourWeath)
        dayfourWeath.textContent = data.list[3].dt_txt.split(' ') [0] + '\n' +'Temp: ' + Math.floor(((data.list[3].main.temp - 273.15) * 9/5) + 32) + ' degrees F\n' + "Wind: " + data.list[3].wind.speed +' MPH\n' + 'Humidity: ' + data.list[3].main.humidity + '%'
        if (data.list[3].weather[0].main === 'Clouds'){
            var weatherIconFou = document.createElement('i')
            dayfour.appendChild(weatherIconFou)
            weatherIconFou.classList.add('fa-sharp')
            weatherIconFou.classList.add('fa-solid')
            weatherIconFou.classList.add('fa-cloud')
        } else if (data.list[3].weather[0].main === 'Rain' || data.list[3].weather[0].main === 'Drizzle' || data.list[3].weather[0].main === 'Thunderstorm'){
            var weatherIconFou = document.createElement('i')
            dayfour.appendChild(weatherIconFou)
            weatherIconFou.classList.add('fa-sharp')
            weatherIconFou.classList.add('fa-solid')
            weatherIconFou.classList.add('fa-umbrella')
        } else if (data.list[3].weather[0].main === 'Clear'){
            var weatherIconFou = document.createElement('i')
            dayfour.appendChild(weatherIconFou)
            weatherIconFou.classList.add('fa-sharp')
            weatherIconFou.classList.add('fa-solid')
            weatherIconFou.classList.add('fa-sun')
        } else if (data.list[3].weather[0].main === 'Snow') {
            var weatherIconFou = document.createElement('i')
            dayfour.appendChild(weatherIconFou)
            weatherIconFou.classList.add('fa-sharp')
            weatherIconFou.classList.add('fa-solid')
            weatherIconFou.classList.add('fa-snowflake')
        } else {
            var weatherIconFou = document.createElement('i')
            dayfour.appendChild(weatherIconFou)
            weatherIconFou.classList.add('fa-sharp')
            weatherIconFou.classList.add('fa-solid')
            weatherIconFou.classList.add('fa-block-question')
        }

        //Day five weather
        removeIfExists('#dayfive p')
        removeIfExists('#dayfive i')
        let dayfiveWeath = document.createElement('p')
        dayfive.appendChild(dayfiveWeath)
        dayfiveWeath.textContent = data.list[4].dt_txt.split(' ') [0] + '\n' +'Temp: ' + Math.floor(((data.list[4].main.temp - 273.15) * 9/5) + 32) + ' degrees F\n' + "Wind: " + data.list[4].wind.speed +' MPH\n' + 'Humidity: ' + data.list[4].main.humidity + '%'
        if (data.list[4].weather[0].main === 'Clouds'){
            var weatherIconFiv = document.createElement('i')
            dayfive.appendChild(weatherIconFiv)
            weatherIconFiv.classList.add('fa-sharp')
            weatherIconFiv.classList.add('fa-solid')
            weatherIconFiv.classList.add('fa-cloud')
        } else if (data.list[4].weather[0].main === 'Rain' || data.list[4].weather[0].main === 'Drizzle' || data.list[4].weather[0].main === 'Thunderstorm'){
            var weatherIconFiv = document.createElement('i')
            dayfive.appendChild(weatherIconFiv)
            weatherIconFiv.classList.add('fa-sharp')
            weatherIconFiv.classList.add('fa-solid')
            weatherIconFiv.classList.add('fa-umbrella')
        } else if (data.list[4].weather[0].main === 'Clear'){
            var weatherIconFiv = document.createElement('i')
            dayfive.appendChild(weatherIconFiv)
            weatherIconFiv.classList.add('fa-sharp')
            weatherIconFiv.classList.add('fa-solid')
            weatherIconFiv.classList.add('fa-sun')
        } else if (data.list[4].weather[0].main === 'Snow') {
            var weatherIconFiv = document.createElement('i')
            dayfive.appendChild(weatherIconFiv)
            weatherIconFiv.classList.add('fa-sharp')
            weatherIconFiv.classList.add('fa-solid')
            weatherIconFiv.classList.add('fa-snowflake')
        } else {
            var weatherIconFiv = document.createElement('i')
            dayfive.appendChild(weatherIconFiv)
            weatherIconFiv.classList.add('fa-sharp')
            weatherIconFiv.classList.add('fa-solid')
            weatherIconFiv.classList.add('fa-block-question')
        }

        //Day six weather
        removeIfExists('#daysix p')
        removeIfExists('#daysix i')
        let daysixWeath = document.createElement('p')
        daysix.appendChild(daysixWeath)
        daysixWeath.textContent = data.list[5].dt_txt.split(' ') [0] + '\n' +'Temp: ' + Math.floor(((data.list[5].main.temp - 273.15) * 9/5) + 32) + ' degrees F\n' + "Wind: " + data.list[5].wind.speed +' MPH\n' + 'Humidity: ' + data.list[5].main.humidity + '%'
        if (data.list[5].weather[0].main === 'Clouds'){
            var weatherIconSix = document.createElement('i')
            daysix.appendChild(weatherIconSix)
            weatherIconSix.classList.add('fa-sharp')
            weatherIconSix.classList.add('fa-solid')
            weatherIconSix.classList.add('fa-cloud')
        } else if (data.list[5].weather[0].main === 'Rain' || data.list[5].weather[0].main === 'Drizzle' || data.list[5].weather[0].main === 'Thunderstorm'){
            var weatherIconSix = document.createElement('i')
            daysix.appendChild(weatherIconSix)
            weatherIconSix.classList.add('fa-sharp')
            weatherIconSix.classList.add('fa-solid')
            weatherIconSix.classList.add('fa-umbrella')
        } else if (data.list[5].weather[0].main === 'Clear'){
            var weatherIconSix = document.createElement('i')
            daysix.appendChild(weatherIconSix)
            weatherIconSix.classList.add('fa-sharp')
            weatherIconSix.classList.add('fa-solid')
            weatherIconSix.classList.add('fa-sun')
        } else if (data.list[5].weather[0].main === 'Snow') {
            var weatherIconSix = document.createElement('i')
            daysix.appendChild(weatherIconSix)
            weatherIconSix.classList.add('fa-sharp')
            weatherIconSix.classList.add('fa-solid')
            weatherIconSix.classList.add('fa-snowflake')
        } else {
            var weatherIconSix = document.createElement('i')
            daysix.appendChild(weatherIconSix)
            weatherIconSix.classList.add('fa-sharp')
            weatherIconSix.classList.add('fa-solid')
            weatherIconSix.classList.add('fa-block-question')
        }
    
    })
    })
}

submitButton.addEventListener('click', speedySearch)