// setInterval()
// Задание: создать счетчик, который будет вызываться каждую секунду и увеличиваться
const simpleCounter = () => {
  let count = 1;

  const timerId = setInterval(() => {
    console.log(count);
    count++;
    // Отменяем действие setInterval, передав timerId в clearInterval через 5 тиков
    if (count > 5) {
      clearInterval(timerId);
    }
  }, 1000);
};
simpleCounter();
