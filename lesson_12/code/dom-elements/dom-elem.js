const form = document.getElementById("formId");
console.log(form);
console.log(form.innerHTML);

const successDiv = `<div id="success">Вы успешно зарегистрировались</div>`;

form.innerHTML = `${successDiv}`;

console.log(form.innerHTML);

// находим div по ID
const successDivByID = document.getElementById("success");

successDivByID.style.color = "green";

const link = document.getElementById("dev-link");

link.addEventListener("click", (event) => {
  // Предотвращает стандартное поведение браузера
  event.preventDefault();
  // проверяем предотвращено ли стандартное поведение браузера
  console.log(event.defaultPrevented);
  // если у вас элемент будет input то в value будет зраниться значение которое вы ввели с клавиатуры
  console.log(event.target.value);
  // Удаляем div элемент
  successDivByID.remove();
});
