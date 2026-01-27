let cityInput = document.getElementById("city-input");
let searchBtn = document.getElementById("search-btn");
let cityName = document.getElementById("city-name");
let tempValue = document.getElementById("temp-value");
let weatherDesc = document.getElementById("weather-description");
let windSpeed = document.getElementById("wind-speed")
let humidity = document.getElementById("humidity");
let sunriseTime = document.getElementById("sunrise-time");
let sunsetTime = document.getElementById("sunset-time");
let hourlyForecast = document.getElementById("hourly-forecast");

function handleSearch() {

  let city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  } else {
    console.log("Fetching weather data for city:", city);
    fetchWeatherData(city);
  }

};

searchBtn.addEventListener("click", handleSearch);

cityInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleSearch();
  }

});

async function fetchWeatherData(location) {
  
  const apiKey = "ZARHY522P8M3YZSHKVQHV7LUV";
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}`;

  try {

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data)
    updateUI(data);
  } catch (error) {
    console.log(error)
    alert("Error:", error)
  }

}

function updateUI(data) {

  const hero = document.getElementById("hero-section");
  hero.classList.remove("fade-in-up"); 
  void hero.offsetWidth; 
  hero.classList.add("fade-in-up");

  cityName.textContent = data.resolvedAddress;
  tempValue.textContent = Math.round(data.currentConditions.temp) + "°C";
  weatherDesc.textContent = data.currentConditions.conditions;
  windSpeed.textContent = `Wind: ${data.currentConditions.windspeed}km/h`;
  humidity.textContent = `Humidity: ${data.currentConditions.humidity}%`;
  sunriseTime.textContent = `Sunrise: ${data.currentConditions.sunrise.slice(0, 5)}`;
  sunsetTime.textContent = `Sunset: ${data.currentConditions.sunset.slice(0, 5)}`;
  
  hourlyForecast.innerHTML = "";
  data.days[0].hours.forEach(hour => {
    let iconName = hour.icon === "rain" ? "cloud-rain" : "sun";
    let hourDiv = document.createElement("div");
    hourDiv.classList.add("hour-block");
    hourDiv.innerHTML = `
      <div class="hour-time">${hour.datetime.slice(0, 5)}</div>
      <div class="hour-temp">${Math.round(hour.temp)}°C</div>
      <div class="hour-icon"><i data.currentConditions.icon="${iconName}"></i></div>
    `;
    hourlyForecast.appendChild(hourDiv);
  });

  lucide.createIcons();

}

function init() {

  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetchWeatherData(`${lat},${lon}`);
    },
      (error) => {
        console.log("Location denied, loading default");
        fetchWeatherData("London");
      }
    );
  } else {
    fetchWeatherData("London");
  }

}

lucide.createIcons();

init()