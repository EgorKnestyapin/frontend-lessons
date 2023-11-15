// Элементы управления
const SEARCH_BUTTON = document.querySelector("#search-button");
const SEARCH_CITY_INPUT = document.querySelector("#city-input");

// Контейнеры для отображения
const LOADING_TEXT = document.querySelector("#load");
const WEATHER_INFO_CONTAINER = document.querySelector(
  "#weather-info-container"
);

// Тексты с информацией
const WEATHER_CITY = document.querySelector("#weather-city");
const WEATHER_ICON = document.querySelector("#weather-icon");

// Наш APP_ID
const APP_ID = "339eefdb8be5d321edc00550315211c1";

const createWeatherCard = (weatherData) => {
  WEATHER_CITY.textContent = weatherData.name;
  WEATHER_ICON.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  LOADING_TEXT.style.display = "none";
  WEATHER_INFO_CONTAINER.style.display = "flex";
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
  WEATHER_INFO_CONTAINER.style.disply = "none";

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
    console.log(error);
  }
}

SEARCH_BUTTON.addEventListener("click", searchWeatherByCity);
