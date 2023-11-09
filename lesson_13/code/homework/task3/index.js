/* Задание 3
Задание: Создание и обработка промисов

Создайте функцию showNumbers(seconds), которая принимает число секунд и возвращает промис. 
Промис должен выполняться через указанное количество секунд и возвращать 
сообщение "Прошло {seconds} секунд(ы)". Используйте setTimeout внутри промиса для 
создания задержки выполнения. Создайте несколько экземпляров функции wait с разными 
значениями секунд и выведите результат выполнения каждого промиса.
*/
function showNumbers(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Прошло ${seconds} секунд(ы)`), seconds * 1000);
  });
}
showNumbers(3).then((result) => console.log(result));
showNumbers(2).then((result) => console.log(result));
showNumbers(4).then((result) => console.log(result));
showNumbers(1).then((result) => console.log(result));
showNumbers(2).then((result) => console.log(result));
showNumbers(3).then((result) => console.log(result));
