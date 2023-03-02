let apiKey = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
fetch(apiKey)
    .then(function(response){
        return response.json ();
    })
    .then(function (data){
        console.log(data)
    })