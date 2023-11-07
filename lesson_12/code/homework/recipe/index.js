/* Задание 1
Нужно создать приложение "Генератор бургера". Оно будет состоять из 7 кнопок, 
каждая из которых будут иметь название оответствующего ингридиента:

"Сыр",
"Лук",
"Бекон",
"Салат",
"Котлета"
"Булочка",
"Кетчуп"
При нажатии на любую из кнопок в список, который расположен ниже, 
добавляются названия соответствующих ингридиентов. 
По умолчанию список пустой. Стилизация приложения полностью на ваше усмотрение, 
чем интереснее сделаете, тем лучше
*/
const cheese = document.getElementById("cheeseBtn");
const onion = document.getElementById("onionBtn");
const bacon = document.getElementById("baconBtn");
const salad = document.getElementById("saladBtn");
const cutlet = document.getElementById("cutletBtn");
const bun = document.getElementById("bunBtn");
const ketchup = document.getElementById("ketchupBtn");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");

cheese.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Сыр";
  list.append(li);
});

onion.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Лук";
  list.append(li);
});

bacon.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Бекон";
  list.append(li);
});
salad.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Салат";
  list.append(li);
});

cutlet.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Котлета";
  list.append(li);
});

bun.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Булочка";
  list.append(li);
});

ketchup.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Кетчуп";
  list.append(li);
});

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
