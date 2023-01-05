function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(repsonse.data.main.temperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "52fa42dae9fecd18f16adcedc0a52231";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=$New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(url).then(displayTemperature);
