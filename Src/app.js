let now = new Date();
let h4 = document.querySelector("#time");
let hours = now.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
h4.innerHTML = `${hours}:${minutes} ${day}`;


function displayForecast() {
    let forecastElement = document.querySelector("#forecast");
    let forecastHtml = `<div class="row">`;
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    days.forEach(function (day) {
        forecastHtml = forecastHtml + `
    <div class="col-2">
        <div class="weather-forecast-date"> ${day} </div>
        <img src="https://d2erwcr27wae6d.cloudfront.net/resources/v1/resource/IconByCodeV1?iconset=forecast&iconSize=svglarge&iconCode=26&token=be390ba7-63a9-4068-a4ba-5f0d784169ea"
            alt="" width="42" />

        <div class="temperatures">
            <span class="weather-forecat-temperature-max"> 20°</span>
            <span class="weather-forecast-temperature-min"> 10°</span>
        </div>

    </div>`;
    });

    forecastHtml = forecastHtml + `</div>`;
    forecastElement.innerHTML = forecastHtml;
}

function showTemp(response) {
    let emojiElement = document.querySelector("#emoji");

    celsiusTemp = response.data.main.temp;

    document.querySelector("#country").innerHTML = response.data.name;
    document.querySelector("#temp").innerHTML = Math.round(celsiusTemp);
    document.querySelector("#weatherCondition").innerHTML = response.data.weather[0].description;
    emojiElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

}

function search(city) {
    let apiKey = "efc329b30b94f49696e6890973ad5897";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityElementInput = document.querySelector("#search-text-input");
    search(cityElementInput.value);
}

function celsiusTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = Math.round(celsiusTemp);
}
function farenhietTemperature(event) {
    event.preventDefault();

    let farenhietTemperature = (celsiusTemp * 9) / 5 + 32;
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = Math.round(farenhietTemperature);
}

let celsiusTemp = null;
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", celsiusTemperature);

let farenhiet = document.querySelector("#farenhiet-link");
farenhiet.addEventListener("click", farenhietTemperature);

search("New York");
displayForecast();

