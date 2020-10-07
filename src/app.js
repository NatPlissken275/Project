// display current date and time
let now = new Date();
let weekday = now.getDay();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = now.getMonth();
let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  document.querySelector(
    ".dayAndTime"
  ).innerHTML = `${weekDays[weekday]}, ${monthName[month]} ${day} - ${hour}:0${minutes}`;
} else {
  document.querySelector(
    ".dayAndTime"
  ).innerHTML = `${weekDays[weekday]}, ${monthName[month]} ${day} - ${hour}:${minutes}`;
}
// get real city data

function showWeatherCon(response) {
  document.querySelector("#citysName").innerHTML = response.data.name;
  document.querySelector("#degreesBig").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humi").innerHTML = response.data.main.humidity + "%";
  document.querySelector("#windSpeed").innerHTML =
    Math.round(response.data.wind.speed) + "km/h";

  document.querySelector(".weatherStatus").innerHTML =
    response.data.weather[0].main;

  document
    .querySelector("#weatherIcon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
}

function browseCity(town) {
  let apiKey = "428692b6217f06d76f29c1338976dbc4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherCon);
}

function getCityName(event) {
  event.preventDefault();
  let town = document.querySelector("#search-other").value;
  browseCity(town);
}

let browseForm = document.querySelector(".clickAndBrowse");
browseForm.addEventListener("submit", getCityName);
browseForm.addEventListener("click", getCityName);
