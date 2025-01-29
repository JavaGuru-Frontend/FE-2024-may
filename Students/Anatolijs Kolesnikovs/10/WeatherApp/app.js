let todayWeatherBody = document.getElementById("todayWeather");
let input = document.getElementById("search");
let errorMessage = document.getElementById("errorMessage");


input.addEventListener("input", function (e) {
  if (e.target.value == "") {
    getTodayWeatherData(userZone);
  } else {
    let countryValue = e.target.value;
    getTodayWeatherData(countryValue);

  }
});


let todayWeather;

async function getTodayWeatherData(country) {
  let todayWeatherData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=f363c6f19c364fe5955182616230308&q=${country}`
  );
  if (todayWeatherData.status >= 200 && todayWeatherData.status <= 299) {
    todayWeatherData = await todayWeatherData.json();
    todayWeather = todayWeatherData;

    errorMessage.classList.replace("d-block", "d-none");

    showWeather();
  } else {
    errorMessage.classList.replace("d-none", "d-block");    
  }
}

function showWeather() {
  let { location, current } = todayWeather;
  const date = new Date(location.localtime);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("en-us", { weekday: "long" });
  const dayNumber = date.getDate();

  box = `
  <div class="today-weather">
  <div class="today-information">
    <p>${day}</p>
    <p><span>${dayNumber}</span> ${month}</p>
  </div>
  <div class="weather-details text-start">
    <p>${location.name},</p>
    <p>${location.country}</p>
    <div
      class="today-degree"
    >
      <h2>${Math.round(current.temp_c)}<sup>o</sup>C</h2>
      <img class="img-fluid" src="https://${current.condition.icon}" alt="">
    </div>
    <div class="today-weather-information">
      <p>${current.condition.text}</p>
      <div
        class="d-flex"
      >
        <p class="m-0">
          <img class="icon" src="./img/umbrella-solid.svg" border="0" alt="icon">
          <span>${current.humidity}%</span>
        </p>
        <p class="m-0">
          <img class="icon" src="./img/wind-solid.svg" border="0" alt="icon">
          <span>${current.wind_kph} km / h</span>
        </p>
        <p class="m-0">
          <img class="icon" src="./img/compass-solid.svg" border="0" alt="icon">
          <span>${current.wind_dir}</span>
        </p>
      </div>
    </div>
  </div>
</div>
  `;

  todayWeatherBody.innerHTML = box;
}



