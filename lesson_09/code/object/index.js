// Example 1 - Object literal
const student = {
    name: "Fred",
    age: 18
};
// key, value - ключ, значение

console.log(student.name); // Fred
console.log(student.job); // undefined

// как записать новое значение по ключу
student.name = "Feodor";
console.log(student.name);
// если такого ключа не было
student.job = "Journalist";
console.log(student);

// Пример 2
const user = {name: "Semen", age: 35, "cat name": "Murzik"};
// что делать, если ключ состоит из нескольких слова?
console.log(user["cat name"]);
// создать новое свойство из двух слов
user["land of birth"] = "Cyprus";

// Пример 3 Как удалить свойство у объекта?
delete user.age; // удалит из объекта соответствующее свойство
console.log(user); // нет поля age
delete user["land of birth"];

// Пример 4
const cat = {name: "Markiza", color: "grey"};
const key1 = "color";
// как по ключу, сохраненному в переменной, достать значение из объекта
console.log(cat.key1); // undefined
console.log(cat[key1]); // grey

// Пример 5
// у нас есть переменные - и мы хотим создать из них объект
const brand = "Iphone";
const price = 200;
// создадим объект
const phone = {brand, price}; // { brand: 'Iphone', price: 200 }
console.log(phone);

// Пример 6
// Как создать объект на основании переменных,
// но сохранить под другими ключами 
const  bestPrice28 = 400;
const tv = {brand: "Sony", price: bestPrice28};
console.log(tv);

// Пример 7 - метод внутри объекта
const dog = {
    name: "Paddington",
    age: 1,
    bark() {
        console.log("Bark-bark-bark");
    },
    fetchtoy() {
        return "Toy";
    }
};
dog.bark(); // вызов метода
console.log(dog.fetchtoy()); // Toy

// Мы можем получить массив ключей
const lion = {name: "Alex", origin: "Africa", city: "New-York"};
const keys = Object.keys(lion);
console.log(keys); // [ 'name', 'origin', 'city' ]
// Мы можем получить массив значений
const values = Object.values(lion);
console.log(values); // [ 'Alex', 'Africa', 'New-York' ]
// Мы можем получить массив пар ключ-значение
const arrPairs = Object.entries(lion);
console.log(arrPairs); // [ [ 'name', 'Alex' ], [ 'origin', 'Africa' ], [ 'city', 'New-York' ] ]

// Как проверить что в объекте есть определенный ключ?
// Есть ли ключ name внутри lion?
console.log("name" in lion); // true
const hasWeightKey = "weight" in lion;
console.log(hasWeightKey); // false

// Цикл for in
const car = {brand: "Porsche", price: 25000, color: "green"};
for (const k in car) {
    console.log(k + ":" + car[k]); // car[k], а не car.k (!!!)
}