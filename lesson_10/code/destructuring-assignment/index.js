// Destructuring assignment - присваивание с деструктуризацией
const user = { name: "Fred", age: 19 };
// console.log(age); // ReferenceError: age is not defined

// как получить переменную age со значением 19?
// java - old-school
// const age = user.age;
// Пример 1 - destructure operator
const { age, name, job } = user;
console.log(age); // 19
console.log(job); // undefined

// Пример 2 - был объект, как скопировать его пары ключ значения?
const car = { brand: "Opel", price: 15_000 };
// создам новый объект, скопирую ключи и значения старого
const myCar = { ...car, color: "red" };
console.log(myCar); // { brand: 'Opel', price: 15000, color: 'red' }

// Пример 3 - скопировать, но заменить значение
const rollsRoyce = { ...car, brand: "Rolls-Roys" };
console.log(rollsRoyce); // { brand: 'Rolls-Roys', price: 15000 }
