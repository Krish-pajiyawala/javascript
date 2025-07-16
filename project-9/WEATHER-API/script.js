let cityInput = document.querySelector(".city-input");
let searchBtn = document.querySelector(".search-btn");

let weatherInfoSection = document.querySelector(".weather-info");
let searchCitySection = document.querySelector(".search-city");
let notFoundSection = document.querySelector(".not-found");

let countryTxt = document.querySelector(".country-txt");
let dateTxt = document.querySelector(".current-date-txt");
let tempTxt = document.querySelector(".temp-txt");
let conditionTxt = document.querySelector(".condition-txt");
let humidityTxt = document.querySelectorAll(".humidity-value-txt")[0];
let windSpeedTxt = document.querySelectorAll(".humidity-value-txt")[1];
let weatherImage = document.querySelector(".weather-summery-img");
let forecastContainer = document.querySelector(".forecast-items-container");

let API_KEY = "2fa292141fe65073cfd033b3dfc27f46";

searchBtn.addEventListener("click", () => {
  let cityName = cityInput.value();
  if (cityName !== "") {
    getWeatherData(cityName);
  }
});

function getWeatherData(city) {
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(weatherUrl)
    .then(res => {
      if (!res.ok) {
        alert("City not found");
      }
      return res.json();
    })
    .then(weatherData => {
      let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

      fetch(forecastUrl)
        .then(res => res.json())
        .then(forecastData => {
          updateWeatherUI(weatherData, forecastData);
        });
    })
    .catch(error => {
      showNotFound();
    });
}

function updateWeatherUI(current, forecast) {
  let today = new Date();
  let options = { weekday: "short", day: "numeric", month: "short" };
  dateTxt.textContent = today.toLocaleDateString("en-US", options);

  countryTxt.textContent = current.name;
  tempTxt.textContent = `${Math.round(current.main.temp)} °C`;
  conditionTxt.textContent = current.weather[0].main;
  humidityTxt.textContent = `${current.main.humidity}%;`
  windSpeedTxt.textContent = `${current.wind.speed} M/S`;

  let iconCode = current.weather[0].icon;
  weatherImage.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  let forecastList = forecast.list.filter((item, index) => index % 8 === 0).slice(1, 4);
  forecastContainer.innerHTML = "";

  forecastList.forEach(day => {
    let date = new Date(day.dt_txt);
    let dayStr = date.toLocaleDateString("en-US", { day: "numeric", month: "short" });

    let itemHTML = `
      <div class="forecast-item">
        <h5 class="forecast-items-date">${dayStr}</h5>
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="forecast-item-img">
        <h5 class="forcast-item-temp">${Math.round(day.main.temp)} °C</h5>
      </div>
    `;

    forecastContainer.innerHTML += itemHTML;
  });

  weatherInfoSection.style.display = "block";
  searchCitySection.style.display = "none";
  notFoundSection.style.display = "none";
}

function showNotFound() {
  weatherInfoSection.style.display = "none";
  searchCitySection.style.display = "none";
  notFoundSection.style.display = "flex";
}