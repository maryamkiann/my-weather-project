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


function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let changeTemp = document.querySelector("#temp");
    changeTemp.innerHTML = `${temperature}`;
    let weatherDescription = response.data.weather[0].description;
    let updatedDescription = document.querySelector("#headingFive");
    updatedDescription.innerHTML = `${weatherDescription}`;
    let city = document.querySelector("#country");
    let changedCity = response.data.name;
    city.innerHTML = `${changedCity}`;
}

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let h6 = document.querySelector("#country");
    searchInput.innerHTML = `${h6.value}`;
    let apiKey = "efc329b30b94f49696e6890973ad5897";
    let url = let url = `https://api.openweathermap.org/data/2.5/weather?q=${h6.value}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);





