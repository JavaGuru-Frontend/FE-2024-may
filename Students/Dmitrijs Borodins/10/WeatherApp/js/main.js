let inputVal = document.getElementById('cityinput');
let getDataBtn = document.getElementById('add');
let weatherOutput = document.getElementById('display');

let checkWeather = (data) => {
  let kelvinTemperature = data.main.temp;
  let celsiusTemperature = kelvinTemperature - 273.15;
  let weatherDescription = data.weather[0].description;
  let cityName = data.name;
  let windSpeed = data.wind.speed;
  let countryName = data.sys.country;

  weatherOutput.innerHTML =
    `<section id="display">
        <div class="wrapper">
            <h2 class="basic-text" id="cityoutput">${cityName}, ${countryName}</h2>
            <p class="basic-text" id="description">Clouds: ${weatherDescription}</p>
            <img class="skyinfo" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <p class="basic-text" id="temp">Temperature:  ${celsiusTemperature.toFixed(0)}&#8451;</p>
            <p class="basic-text" id="wind">Wind speed: ${windSpeed} km/h</p>
        </div>
    </section>`;
}

let fetchWeatherData = () => {
  let apiKey = "3045dd712ffe6e702e3245525ac7fa38";
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => checkWeather(data))
    .catch(error => alert(error));
  inputVal.value = '';
}

getDataBtn.addEventListener('click', fetchWeatherData);

inputVal.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    fetchWeatherData();
  }
});



// fetch metod
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
// inputval.value === введённый город
// apik = "3045dd712ffe6e702e3245525ac7fa38"

// on btn click
// addEventListener
// fetch
// response
// температура отображаеться в кельвинах но нам надо перевести в градусы цельсия
// необходимо от введёной температуры отнять 273 и тогда мы получим градусы цельсия

// ответ с сервера
//   {
//     "coord": {
//         "lon": 23.7128,
//         "lat": 56.65
//     },
//     "weather": [
//         {
//             "id": 802,
//             "main": "Clouds",
//             "description": "scattered clouds",
//             "icon": "03d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 293.17,
//         "feels_like": 292.48,
//         "temp_min": 293.17,
//         "temp_max": 293.17,
//         "pressure": 1014,
//         "humidity": 48,
//         "sea_level": 1014,
//         "grnd_level": 1014
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4.6,
//         "deg": 299,
//         "gust": 8.75
//     },
//     "clouds": {
//         "all": 46
//     },
//     "dt": 1655294073,
//     "sys": {
//         "type": 1,
//         "id": 1876,
//         "country": "LV",
//         "sunrise": 1655256795,
//         "sunset": 1655320681
//     },
//     "timezone": 10800,
//     "id": 459279,
//     "name": "Jelgava",
//     "cod": 200
// }










