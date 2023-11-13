// working with fetch api

// 1 пример
// Задача: сделать get запрос на удаленный ресурс по url
// получить данные по сети
// использовать синтакси async/await и fetch
const requestButton = document.getElementById("request-button");

async function getApliacesData() {
  const apliancesURL = "https://gzavertyaev-dev.github.io/appliances.json";

  // Получаем обьект Response
  const response = await fetch(apliancesURL);
  console.log(response.ok);
  console.log(response.status);
  console.log(response.statusText);

  // OK или не ок - успешно завершен запрос или нет
  if (response.ok) {
    // Забираем результат выполнения response, т.е тело ответа(наш обьект)
    const result = await response.json();
    console.log(result);
  } else {
    console.log("Some Erorr");
  }
}
getApliacesData();
requestButton.addEventListener("click", getApliacesData);
