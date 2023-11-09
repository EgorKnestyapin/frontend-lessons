/* Задание 1
Появление цифр на экране от 1 до 5: Создайте страницу с 5 элементами (например, div). 
Используйте setTimeout(), Нужно сделать их видимыми по очереди через 
каждую секунду после загрузки страницы.
*/
const numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
  setTimeout(() => displayNum(numbers[i]), (i + 1) * 1000);
}
function displayNum(elem) {
  elem.style.visibility = "visible";
}
