document.getElementById('add').addEventListener('click', function() {
    const inputVal = document.getElementById('cityinput').value;
    const apik = '3045dd712ffe6e702e3245525ac7fa38'; //  API-ключ

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputVal + '&appid=' + apik)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {//Проверка на то, был ли запрос успешным.
                const kelvinTemp = data.main.temp;
                const celsiusTemp = kelvinTemp - 273.15;
                const weatherDescription = data.weather[0].description;
                const cityName = data.name;
                const windSpeed = data.wind.speed;

                document.getElementById('cityoutput').textContent = `Weather in ${cityName}`;
                document.getElementById('description').textContent = `Condition: ${weatherDescription}`;
                document.getElementById('temp').textContent = `Temperature: ${celsiusTemp.toFixed(2)}°C`;
                document.getElementById('wind').textContent = `Wind Speed: ${windSpeed} m/s`;
            } else {
                document.getElementById('cityoutput').textContent = 'City not found.';//Если код ответа от API не равен 200--- возникла ошибка ,например, город не найден. 
                document.getElementById('description').textContent = '';
                document.getElementById('temp').textContent = '';
                document.getElementById('wind').textContent = '';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('cityoutput').textContent = 'Error.';//Если произошла ошибка во время выполнения запроса ,например, проблемы с сетью.
            document.getElementById('description').textContent = '';
            document.getElementById('temp').textContent = '';
            document.getElementById('wind').textContent = '';
        });
});