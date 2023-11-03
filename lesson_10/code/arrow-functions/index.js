const sum = (a, b) => a + b;
const res = sum(8, 9);

const sum2 = (a, b) => {
  a + b;
};
console.log(sum2(2, 3)); // undefined

// как передавать функции в качестве параметров
function calculate(a, b, operation) {
  return operation(a, b);
}
// Пример с заранее созданной функцией sum
const res1 = calculate(5, 4, sum);
console.log(res1);
const res2 = calculate(5, 4, (a, b) => a - b);
console.log(res2);
// Пример с передачей анонимной функции
const res3 = calculate(20, 5, function (a, b) {
  return a - b;
});

/* Создайте функцию cook, которая принимает три параметра:
    - ингредиент 1,
    - ингредиент 2,
    - функция, которая описывает метод приготовления - должна выводить в консоль
*/
// Пример
// cook("яйцо", "лук", cookImpl)
// "Жарим яйцо и добавляем лук, вуаля, кушать подано"

function cook(ingredient1, ingredient2, recipe) {
  recipe(ingredient1, ingredient2);
}
cook("масло", "хлеб", (a, b) => {
  console.log(`Мажем ${a} на ${b}, вуаля, кушать подано`);
});
function makeDinner(recipe1, recipe2) {
  const ingredients = ["картошка", "масло", "хлеб"];
  cook(ingredients[0], ingredients[1], recipe1);
  cook(ingredients[1], ingredients[2], recipe2);
}
makeDinner(
  (a, b) => {
    console.log(
      `В кастрюле с водой варится ${a}, затем вытаскивается и смазывается ${b}м`
    );
  },
  (a, b) => {
    console.log(`Мажем ${a} на ${b}`);
  }
);

const cat = {
  name: "Murzik",
  meow() {
    console.log(`Meow-meow, ${this.name}`);
  },
};
cat.meow(); // Meow-meow, Murzik

const cat1 = {
  name: "Murka",
  meow: function () {
    console.log(`Meow-meow, ${this.name}`);
  },
};
cat1.meow(); // Meow-meow, Murka

const cat2 = {
  name: "Murka",
  meow: () => {
    console.log(`Meow-meow, ${this.name}`);
  },
};
cat2.meow();
