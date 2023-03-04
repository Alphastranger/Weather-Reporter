var fiveDay = document.getElementById('fiveday')
let apiKey = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.2527&lon=85.7585&appid=a0dfdb5ddf4248081a0e3da0b4bb8938'
fetch(apiKey)
    .then(function(response){
        return response.json ();
    })
    .then(function (data){
        console.log(data)
        for (var i=0; i < data.length; i++) {
            var createDisplayEl = document.createElement('p')
            createDisplayEl.textContent = data[i].temp;
            fiveDay.appendChild(createDisplayEl)

        }
    })