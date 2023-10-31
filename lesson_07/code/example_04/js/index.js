const createBtnElement = document.getElementById("btn-create");
const removeBtnElement = document.getElementById("remove");

const newElement = document.createElement("p"); // <p></p>
    // .classList.add("new-paragraph"); // <p class="new-paragraph"></p>
newElement.id = "first_paragraph";
newElement.textContent = "Текст первого параграфа";
console.log(newElement);

createBtnElement.addEventListener('click', () => {
    console.log("click");
    document.body.append(newElement);
});

removeBtnElement.addEventListener('click', () => {
    newElement.remove();
})