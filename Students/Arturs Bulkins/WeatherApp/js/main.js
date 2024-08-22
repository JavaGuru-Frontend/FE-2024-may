let getDataBtn = document.getElementById('add');
let dataDeleteBtn = document.getElementById('clear');
let getCity = document.getElementById('cityinput');
let renderInfo = document.getElementById('wrapper');
let history = document.getElementById('history');
let saveButton = document.getElementById('save');
let garbage = document.getElementById('garbage');


let clearInput = () => {
  getCity.value = ``;
}


 let renderWeather = (data) => {

   let renderIcon = () => {
    
    switch (data.weather[0].description) {

      case 'clear sky':
        return ` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/869/869869.png">`;
        break;

      case 'broken clouds', 'few clouds':
        return ` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/1888/1888282.png">`;
        break;
  
      case 'overcast clouds':
      case 'scattered clouds':
        return ` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/13804/13804450.png">`;
        break;

      case 'light rain':
      case  'rain':
      case 'mist':
        return ` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/13495/13495003.png">`;
          break;
  
      default:
        return `<div class="infosky">UPSssss</div>`;
        break;

    }
      
  }  

        let d = new Date();
        let h = d.getHours();
        let formattedH = h < 10 ? '0' + h : h;
        let m = d.getMinutes();
        let formattedM = m < 10 ? '0' + m : m;
        let s = d.getSeconds();
        let formattedS = s < 10 ? '0' + s : s;
        let y = d.getFullYear();
        let month = (d.getMonth())+1;
        let formattedMonth = month < 10 ? '0' + month : month;
        let date = d.getDate();
        let formattedDate = date < 10 ? '0' + date : date;
    


  renderInfo.innerHTML = `

          <div class="wrapper" id="wrapper">
              <p class="info info__date" id="wind">${formattedH} : ${formattedM} : ${formattedS}  / ${formattedDate}.${formattedMonth}.${y} </p>
              <h2 class="info info_city" id="cityoutput">${data.name}  ${data.sys.country}</h2>
              <h2 class="info" id="temp">${((data.main.temp)-273).toFixed(1)} °C</h2>
              ${renderIcon()}
              <div class="windicon">
                <img class="windicon__icon" src="https://cdn-icons-png.flaticon.com/128/2676/2676047.png">
                <p class="info info_wind" id="wind"> ${data.wind.speed} km/h</p>
              </div>
              <div class="windicon">
                <img class="windicon__icon" src="https://cdn-icons-png.flaticon.com/128/3466/3466636.png">
                <p class="info info_wind" id="wind">${data.wind.deg} deg</p>
              </div>
              <div class="windicon">
                <img class="windicon__icon" src="https://cdn-icons-png.flaticon.com/128/8923/8923690.png">
                <p class="info info_wind" id="wind">${data.main.humidity} %</p>
              </div>
          </div>`
         
    saveHistory (`<div class="wrapperhistory" id="wrapper">
              <p class="info info__date" id="wind">Searching date and time :<br> ${formattedH} : ${formattedM} : ${formattedS}  / ${formattedDate}.${formattedMonth}.${y} </p>
              <h2 class="info info_city" id="cityoutput">${data.name}  ${data.sys.country}</h2>
              <h2 class="info" id="temp">${((data.main.temp)-273).toFixed(1)} °C</h2>
              <img class="infosky__icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
              <p class="info info_wind" id="wind">Wind speed: ${data.wind.speed} km/h</p>
              <p class="info info_wind" id="wind">Direction: ${data.wind.deg} deg</p>
              <p class="info info_wind" id="wind">Humidity: ${data.main.humidity} %</p> 
              
          </div>`); 
    printHistory(); 
   
    
  console.log(data);
  console.log(data.name, data.sys.country);
  console.log(((data.main.temp)-273).toFixed(1));
  console.log(data.wind);
  console.log(data.weather[0].description);
  console.log(data.dt);
}


let fetchData = () => {
  apik = "3045dd712ffe6e702e3245525ac7fa38"
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+`${getCity.value}`+'&appid='+apik)
      .then(response => response.json())
      .then(data => renderWeather(data))
      .catch(error => alert(error))
      clearInput();
}





let saveHistory = (text) => {
  let historyData = JSON.parse(localStorage.getItem(history)) || [];
  historyData.push(text);
  localStorage.setItem(history, JSON.stringify(historyData));
  
  
}

let printHistory = () => {
  history.innerHTML = '';
  let printHistory = JSON.parse(localStorage.getItem(history)) || [];
  printHistory.forEach((historyRecord) => {
      history.innerHTML += `
          <div class="wrapperhistory" id="wrapper">
            <div class="inputs main">${historyRecord}</div>     
          </div>
          `
  })
}

let clearHistory = () => {
  let printHistory = JSON.parse(localStorage.getItem(history)) || [];
  printHistory.splice(0,100);
  history.innerHTML = '';
  localStorage.setItem(history, JSON.stringify(printHistory));
}

getDataBtn.addEventListener('click', fetchData);
dataDeleteBtn.addEventListener('click', clearHistory);
/* saveButton.addEventListener('click', saveHistory(`${ renderInfo.innerHTML}`));// НЕ РАБОТАЕТ */


getCity.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    fetchData();}
  })
 

/* https://openweathermap.org/img/w/${data.weather[0].icon}.png */

//<p4 class="info" id="clouds">${data.weather[0].description}</p4>

{/* <img class="infosky" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"> */} // берет иконку погоды с сайта

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
