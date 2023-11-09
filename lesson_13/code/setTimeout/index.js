// 1. Пример: создать функцию, которая выводит сообщение "Прошло 3 секунды"
// через 3 секунды после вызова с использованием setTimeout()
// const showMessage = () => {
//   setTimeout(() => console.log("Прошло 3 секунды"), 3000);
// };
// showMessage();
// console.log("Hello world!"); // Hello world выведется до Прошло 3 секунды

// 2. Пример: такой же, как первый, но с передачей аргумента
// const showMessageWithArgs = () => {
//   const sayTime = (message) => console.log(message);
//   setTimeout(sayTime, 3000, "Прошло 3 секунды");
// };
// showMessageWithArgs();

// 3. Сделать подсчет до 10 с выводом в консоль каждую секунду
const countToTen = () => {
  // объявим переменную count === 1
  let count = 1;

  function increment() {
    console.log(count);
    // если count < 10, то вызываем функцию setTimeout, которая вызывает рекурсионную фукнцию increment
    if (count < 10) {
      count++;
      setTimeout(increment, 1000); // увеличивает счетчик каждую секунду
    }
  }
  increment();
};
countToTen();
