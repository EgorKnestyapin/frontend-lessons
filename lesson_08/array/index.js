// Массив
// в JS не фиксированной длины, напоминает лист из Java
// 1. Создание пустого массива
// первый способ
const arr1 = [];
console.log(typeof arr1); // object
// второй способ 
const arr2 = new Array();

// 2. Создание массива с элементами
const fruits = ["apple", "orange", "lime"];
console.log(fruits);
console.log(arr2);

// 3. Как изменить значение по индексу?
// хочу заменить orange на banana
// индексация с нуля как в java
fruits[1] = "banana";

// 4. Как пройтись циклом и вывести все элементы в консоль
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 5. Некоторые методы массива push, pop, shift, unshift
const students = ["Pavel", "Anastasia", "Juri"];
students.push("Oleksandr"); // push добавляет указанный элемент в конец массива
console.log(students);
students.pop(); // pop возвращает и убирает последний элемент из массива
students.unshift("Egor"); // unshift добавляет элемент в начало массива
console.log(students);
students.shift(); // shift возвращает и убирает первый элемент