// Мы должны получить доступ ко всем необходимым элементам
const plusButtonElement = document.getElementById("plus"); // доступ к кнопке +
const minusButtonEleement = document.getElementById("minus"); // доступ к кнопке -
const counterElement = document.getElementById("counterId"); // доступ к счетчику counter

// Проверяем доступ ко всем элементам
console.log(plusButtonElement);
console.log(minusButtonEleement);
console.log(counterElement);

// Создаем переменную counter, которая будет хранить актуальное значение счетчика
let counter = 0;
let plusFlag = false;
let minusFlag = false;

const plusHandler = () => {
  if (minusFlag) {
    minusFlag = false;
    minusButtonEleement.style.backgroundColor = "azure";
    minusButtonEleement.style.cursor = "pointer";
  }
  if (counter < 10) {
    // увеличиваем значение счетчика counter на один
    counter++;
    // Вернули counter в counterElement
    counterElement.textContent = counter;
  }
  if (counter >= 10) {
    plusFlag = true;
    plusButtonElement.style.backgroundColor = "red";
    plusButtonElement.style.cursor = "not-allowed";
  }
};

const minusHandler = () => {
  if (plusFlag) {
    plusFlag = false;
    plusButtonElement.style.backgroundColor = "azure";
    plusButtonElement.style.cursor = "pointer";
  }
  if (counter > 0) {
    // уменьшаем значение счетчика counter на один
    counter--;
    // Вернули counter в counterElement
    counterElement.textContent = counter;
  }
  if (counter <= 0) {
    minusFlag = true;
    minusButtonEleement.style.backgroundColor = "red";
    minusButtonEleement.style.cursor = "not-allowed";
  }
};

plusButtonElement.addEventListener("click", plusHandler);
minusButtonEleement.addEventListener("click", minusHandler);
