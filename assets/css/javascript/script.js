var fiveDay = document.getElementById('fiveday')
let apiKey = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
fetch(apiKey)
    .then(function(response){
        return response.json ();
    })
    .then(function (data){
        console.log(data)
        for (var i=0; i < data.length; i++) {
            var createDisplayEl = document.createElement('p')
            createDisplayEl.textContent = data[i].description;
            fiveDay.appendChild(createDisplayEl)

        }
    })