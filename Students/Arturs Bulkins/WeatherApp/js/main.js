let getDataBtn = document.getElementById('add');
let getCity = document.getElementById('cityinput');
let renderInfo = document.getElementById('render');

let clearInput = () => {
  getCity.value = ``;
}

let renderWeather = (data) => {

  renderInfo.innerHTML = `

          <div class="grid">
              <h2 class="info info_city" id="cityoutput">${data.name}  ${data.sys.country}</h2>
              <h2 class="info" id="temp">${((data.main.temp)-273).toFixed(1)} C</h2>
              <p3 class="info info_wind" id="wind">Wind speed: ${data.wind.speed} km/h</p3>
              <p3 class="info info_wind" id="wind">Direction: ${data.wind.deg} deg</p3>
              <p3 class="info info_wind" id="wind">Humidity: ${data.main.humidity} %</p3>
              <p4 class="info" id="clouds">${data.weather[0].description}</p4>
          </div>`




  console.log(data);
  console.log(data.name, data.sys.country);
  console.log(((data.main.temp)-273).toFixed(1));
  console.log(data.wind);
  console.log(data.weather[0].main);
}


getDataBtn.addEventListener('click', () => {

  apik = "3045dd712ffe6e702e3245525ac7fa38"
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+`${getCity.value}`+'&appid='+apik)
      .then(response => response.json())
      .then(data => renderWeather(data))
      .catch(error => alert(error))
      clearInput();
})







// fetch metod
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  // inputval.value === введённый город
  // apik = "3045dd712ffe6e702e3245525ac7fa38"

// on btn click
  // addEventListener
  // fetch
  // response
  // теспература отображаеться в кельвинах но нам надо перевести в градусы цельсия
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
