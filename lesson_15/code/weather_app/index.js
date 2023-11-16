// Элементы управления
const SEARCH_BUTTON = document.querySelector("#search-button");
const SEARCH_CITY_INPUT = document.querySelector("#city-input");

// Контейнеры для отображения
const LOADING_TEXT = document.querySelector("#load");
const WEATHER_INFO_CONTAINER = document.querySelector(
  "#weather-info-container"
);
const API_ERROR = document.querySelector("#api-error");

// Тексты с информацией
const WEATHER_CITY = document.querySelector("#weather-city");
const WEATHER_ICON = document.querySelector("#weather-icon");
const TEMPERATURE = document.querySelector("#temperature");

// Наш APP_ID
const APP_ID = "339eefdb8be5d321edc00550315211c1";

const createWeatherCard = (weatherData) => {
  TEMPERATURE.textContent = `${Math.round(weatherData.main.temp - 273, 15)}°`;
  WEATHER_CITY.textContent = weatherData.name;
  WEATHER_ICON.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  LOADING_TEXT.style.display = "none";
  WEATHER_INFO_CONTAINER.style.display = "flex";
  API_ERROR.style.display = "none";
};

// Создадим асинхронную функцию searchWeatherByCity, которая будет делать наш запрос на openweatherapp
// и показывать блок с погодой или с ошибкой, в зависимости от результата выполнения запроса
async function searchWeatherByCity() {
  // Получаем данные с инпута SEARCH_CITY_INPUT и убираем пробелы
  const CITY_NAME = SEARCH_CITY_INPUT.value.trim();
  console.log(CITY_NAME);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`;
  if (CITY_NAME.length === 0) {
    return alert("Please enter a city name");
  }
  LOADING_TEXT.style.disply = "flex";
  WEATHER_INFO_CONTAINER.style.display = "none";
  API_ERROR.style.display = "none";

  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);
    if (!response.ok) {
      throw Object.assign(new Error("Request failed"), {
        response: result,
      });
    }
    createWeatherCard(result);
  } catch (error) {
    console.log(error.response);
    const text_error1 = document.createElement("div");
    API_ERROR.innerHTML = "";
    text_error1.textContent = "API Error";
    text_error1.style.color = "red";
    text_error1.style.marginBottom = "10px";
    API_ERROR.appendChild(text_error1);
    const text_error2 = document.createElement("div");
    text_error2.textContent = "Something went wrong with API data";
    API_ERROR.appendChild(text_error2);

    API_ERROR.style.display = "flex";
  }
}

SEARCH_BUTTON.addEventListener("click", searchWeatherByCity);
