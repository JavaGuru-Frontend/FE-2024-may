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
    let wheaterImage = document.getElementById('imagePath');
    let imagePath = "";

    switch (data.weather[0].description) {

      case 'clear sky':
        imagePath =` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/6974/6974859.png">`
        break;

      case 'broken clouds':
        imagePath =` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/3222/3222794.png">`
          break;
  
      case 'overcast clouds' || 'scattered clouds':
        imagePath =` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/3920/3920770.png">`
          break;

      case 'light rain' || 'rain'|| 'heavy rain' || 'mist':
        imagePath =` <img class="infosky" src="https://cdn-icons-png.flaticon.com/128/10040/10040130.png">`
          break;
  
      default:
        imagePath = "UPSssss";
        break;

    }
      wheaterImage = imagePath;
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
    
        let imagePath2 = "https://cdn-icons-png.flaticon.com/128/1345/1345823.png"; // почему не видет изображение


  renderInfo.innerHTML = `

          <div class="wrapper" id="wrapper">
              <p class="info info__date" id="wind">Searching date and time :<br> ${formattedH} : ${formattedM} : ${formattedS}  / ${formattedDate}.${formattedMonth}.${y} </p>
              <h2 class="info info_city" id="cityoutput">${data.name}  ${data.sys.country}</h2>
              <h2 class="info" id="temp">${((data.main.temp)-273).toFixed(1)} °C</h2>
              <img class="infosky" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
              <img src="${renderIcon()}">
              <p class="info info_wind" id="wind">Wind speed: ${data.wind.speed} km/h</p>
              <p class="info info_wind" id="wind">Direction: ${data.wind.deg} deg</p>
              <p class="info info_wind" id="wind">Humidity: ${data.main.humidity} %</p>
              <input class="inputs inputs__btn" type="submit"    value="SAVE"                  id="save">
              <img class="inputs inputs__btn inputs__btn_delete" id="clear" src="${imagePath2}" alt="garbage">
      
          </div>`
         
    saveHistory (`<div class="wrapperhistory" id="wrapper">
              <p class="info info__date" id="wind">Searching date and time :<br> ${formattedH} : ${formattedM} : ${formattedS}  / ${formattedDate}.${formattedMonth}.${y} </p>
              <h2 class="info info_city" id="cityoutput">${data.name}  ${data.sys.country}</h2>
              <h2 class="info" id="temp">${((data.main.temp)-273).toFixed(1)} °C</h2>
              <img class="infosky" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
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
  changeFlexDirection(historyData);
  
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

let changeFlexDirection = () => {
  let container = document.getElementById('wrapper');
  let currentDirection = container.style.flexDirection;
  let newDirection = currentDirection === 'column' ? 'row' : 'column';
  container.style.flexDirection = newDirection;
  localStorage.setItem('flexDirection', newDirection);
  
}


let applyFlexDirection = () => {

  let savedDirection = localStorage.getItem('flexDirection');
  let container = document.getElementById('wrapper');
  if (savedDirection) {
    container.style.flexDirection = savedDirection;
  } else {
    container.style.flexDirection = 'row';
  }
}

getDataBtn.addEventListener('click', fetchData);
dataDeleteBtn.addEventListener('click', clearHistory);
/* saveButton.addEventListener('click', saveHistory(`${ renderInfo.innerHTML}`));// НЕ РАБОТАЕТ */


getCity.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    fetchData();}
  })
 
  applyFlexDirection();

let searchingTime = () => {
  let d = new Date();
  console.log(d);
  let h = d.getHours();
  console.log(h);
  let m = d.getMinutes();
  console.log(m);
  let s = d.getSeconds();
  console.log(s);
  let showTime = ""
  console.log('Searching time:',h,':',m,':',s);
  let y = d.getFullYear();
  console.log(y);
  let month = d.getMonth();
  console.log(month);
  let date = d.getDate();
console.log(date);
let day = d.getDay();
console.log(day);
}
searchingTime();

/*   let timestamp = Math.floor(dateObject.getTime()/1000);// получение временной метки */

/*   let renderIcon = () => {
    switch (json.data.weather[0].description) {
      case 'clear sky':
        renderImg.innerHTML =` <img class="infosky" src="..\images\clearsky.png">`
        break;
      case 'broken clouds':
        renderImg.innerHTML =` <img class="infosky" src="..\images\clearsky.png">`
          break;
  
      case 'overcast clouds':
        renderImg.innerHTML =` <img class="infosky" src="..\images\clearsky.png">`
          break;
  
      case 'light rain':
        renderImg.innerHTML =` <img class="infosky" src="..\images\clearsky.png">`
          break;
  
      default:
        break;
    }} */








/* https://openweathermap.org/img/w/${data.weather[0].icon}.png */

//<p4 class="info" id="clouds">${data.weather[0].description}</p4>



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
