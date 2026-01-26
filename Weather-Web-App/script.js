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
  } catch (error) {
    console.log(error)
    alert("Error:", error)
  }

}




lucide.createIcons();