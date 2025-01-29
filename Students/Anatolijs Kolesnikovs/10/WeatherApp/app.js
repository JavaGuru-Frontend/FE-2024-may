let todayWeatherBody = document.getElementById("todayWeather");
let input = document.getElementById("search");
let errorMessage = document.getElementById("errorMessage");

// searching for country

input.addEventListener("input", function (e) {
  if (e.target.value == "") {
    getTodayWeatherData(userZone);
  } else {
    let countryValue = e.target.value;
    getTodayWeatherData(countryValue);

  }
});

// today weather //

let todayWeather;

async function getTodayWeatherData(country) {
  let todayWeatherData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=f363c6f19c364fe5955182616230308&q=${country}`
  );
  if (todayWeatherData.status >= 200 && todayWeatherData.status <= 299) {
    todayWeatherData = await todayWeatherData.json();
    todayWeather = todayWeatherData;

    errorMessage.classList.replace("d-block", "d-none");

    displayTodayWeather();
  } else {
    errorMessage.classList.replace("d-none", "d-block");
  }
}

function displayTodayWeather() {
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
      class="today-degree d-flex justify-content-between align-items-center my-3"
    >
      <h2>${Math.round(current.temp_c)}<sup>o</sup>C</h2>
      <img class="img-fluid" src="https://${current.condition.icon}" alt="">
    </div>
    <div class="today-weather-information">
      <p>${current.condition.text}</p>
      <div
        class="d-flex justify-content-between align-items-center w-75"
      >
        <p class="m-0">
          <i class="fa-solid fa-umbrella me-1 fs-5"></i>
          <span>${current.humidity}%</span>
        </p>
        <p class="m-0">
          <i class="fa-solid fa-wind me-1 fs-5"></i
          ><span>${current.wind_kph} km / h</span>
        </p>
        <p class="m-0">
          <i class="fa-regular fa-compass me-1 fs-5"></i>
          <span>${current.wind_dir}</span>
        </p>
      </div>
    </div>
  </div>
</div>
  `;

  todayWeatherBody.innerHTML = box;
}

// get the current user location

let userZone;

async function getZone() {
  let zoneData = await fetch("https://ipinfo.io/?token=13a30ff1de8c72");
  zoneData = await zoneData.json();
  userZone = zoneData.city;
  getTodayWeatherData(userZone);
}

getZone();
