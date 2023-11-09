/* Задание 2
Создать кнопку "Изменить цвет" и создайте квадрат красного цвета. 
При нажатии на кнопку, через 2 секунды цвет должен изменитьяся на зеленый
*/
const box = document.getElementsByClassName("box")[0];
const button = document.getElementById("changeColorBtn");

button.addEventListener("click", () => {
  setTimeout(() => {
    box.style.backgroundColor = "blue";
  }, 2000);
});
