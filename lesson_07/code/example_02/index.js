const doc = document.getElementById("hello");
console.log(doc);
const pandaElement = document.getElementById("panda");
// console.log(doc); вывели в консоль, чтобы
// убедиться, что вывели подходящий элемент

// Теперь мы можем менять элемент
// textContent - меняем текст при помощи кода
doc.textContent += " Goodbye";
// поменяли значение атрибута src, так же можно менять любой другой атрибут других тегов
pandaElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/440px-Grosser_Panda.JPG";
pandaElement.className = "panda-img"; // то есть здесь затрутся все остальные классы, если они были
pandaElement.classList.add("panda");
pandaElement.classList.remove("panda-img");