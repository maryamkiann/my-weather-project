let now = new Date();
let h4 = document.querySelector("#time");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
h4.innerHTML = `${hours}:${minutes} ${day}`;

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    console.log(searchInput.value);
    let h6 = document.querySelector("#country");
    if (searchInput.value) {
        h6.innerHTML = `${searchInput.value}`;

    } else {
        h6.innerHTML = null;
        alert("Please type ");
    }
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function convertfahrenheit(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = 22;

}

let fahrenheitlink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", convertfahrenheit);

function convertcelsius(event) {
    event.preventDefault();
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = 90;
}
let celsiuslink = document.querySelector("#celsius-link");
celsiuslink.addEventListener("click", convertcelsius);