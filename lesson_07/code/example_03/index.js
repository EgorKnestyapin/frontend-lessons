const divFigureElement = document.getElementById("figure");
const btnChangeFigure = document.getElementById("btn-change-figure");
// здесь можете проверить и вывести в консоль

let toggle = true;
// при клике на кнопку вызываю функцию
btnChangeFigure.addEventListener('click', () => {
    if (toggle) {
        divFigureElement.textContent = "Blue circle";

        // вариант без классов
        // // как менять стили
        // // css: background-color --> js: backgroundColor
        // divFigureElement.style.backgroundColor = "blue";
        // divFigureElement.style.color = "white";
        // divFigureElement.style.borderRadius = "50%";

        // вариант с классом
        // divFigureElement.className = "blue-circle";
        // или
        divFigureElement.classList.replace("red-box", "blue-circle");

        btnChangeFigure.textContent = "Change to Red box";
    } else {
        divFigureElement.textContent = "Red box";

        // вариант без классов
        // divFigureElement.style.backgroundColor = "lightcoral";
        // divFigureElement.style.color = "black";
        // divFigureElement.style.borderRadius = 0;

        // вариант с классом
        // divFigureElement.className = "red-box";
        // или
        divFigureElement.classList.replace("blue-circle", "red-box");

        btnChangeFigure.textContent = "Change to Blue circle"
    }
    toggle = !toggle;
});
