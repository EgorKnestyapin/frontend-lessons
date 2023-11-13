// Promise.all()

// 1 - создадим массив промисов
const promises = [
  new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve(2), 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve(3), 3000);
  }),
];

// 2 - запускаем все промисы через Promise.all([]).then()
Promise.all(promises)
  .then((result) => console.log("Все промисы выполнились успешно ", result))
  .catch((error) =>
    console.log("Один из промисов завершился с ошибкой ", error)
  );

// Пример с ошибкой Promise.all()
// 1 - создадим массив промисов
const promisesWithError = [
  new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  }),
  new Promise((_, reject) => {
    setTimeout(() => reject("Some error"), 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve(3), 3000);
  }),
];

// 2 - запускаем все промисы через Promise.all([]).then()
Promise.all(promisesWithError)
  .then((result) => console.log("Все промисы выполнились успешно ", result))
  .catch((error) =>
    console.log("Один из промисов завершился с ошибкой ", error)
  );

// Пример с Promise.race
// 1 - создадим массив промисов
const promisesRace = [
  new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  }),
  new Promise((_, reject) => {
    setTimeout(() => reject("Some error"), 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve(3), 3000);
  }),
];

// 2 - запускаем все промисы через Promise.all([]).then()
Promise.race(promisesRace)
  .then((result) => console.log("Первый успешный промис ", result))
  .catch((error) => console.log("Первый промис с ошибкой ", error));
