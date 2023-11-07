/* Задание 1
У вас есть массив объектов:
*/
const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];
/*
Создайте на основе страрого массива новый массив объектов по образу: 
[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
*/
const carsWithoutPrice = [];
cars.forEach((car, index) => {
  carsWithoutPrice.push({ ...car });
  delete carsWithoutPrice[index].price;
});
console.log(carsWithoutPrice);

// 2й способ
const newArray = cars.map((car) => {
  // Порядок не важен
  // const { price, brand, isDiesel } = car;
  const { price, ...rest } = car;
  return rest;
});
console.log(newArray);

/* Задание 2
Создайте новый массив, где оставьте только машины с дизельным двигателем.
*/
const carsWithOnlyDiesel = cars.filter((car) => car.isDiesel === true);
// cars.filter((car) => car.isDiesel)
console.log(carsWithOnlyDiesel);

/* Задание 3
Создайте новый массив, где оставьте только машины не с дизельным двигателем.
*/
const carsWithoutDiesel = cars.filter((car) => car.isDiesel === false);
// cars.filter((car) => !car.isDiesel)
console.log(carsWithoutDiesel);

/* Задание 4
Посчитайте общую стоимость всех машин не с дизельным двигателем.
*/
// Неправильное решение(!)
// const totalPriceWithoutDiesel = carsWithoutDiesel.reduce(
//   (prev, next) => prev.price + next.price 22000.price + 30000 -> undefinded + 30000
// );
const totalPriceWithoutDiesel = carsWithoutDiesel.reduce((prev, next) => {
  prev + next.price;
}, 0);
console.log(totalPriceWithoutDiesel);

/* Задание 5
Повысьте цену всех машин в массиве на 20%.
*/
cars.forEach((car) => {
  car.price = car.price * 1.2;
});
console.log(cars);

/* Задание 6
Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
*/
const tesla = { brand: "Tesla", price: 25000, isDiesel: false };
const carsSwitchDieselWithTesla = cars.map((car) => {
  if (car.isDiesel) {
    return tesla;
  }
  return car;
});
console.log(carsSwitchDieselWithTesla);

/* Задание 7*
Создайте переменную name со строковым значением "education" Создайте функцию с именем converter, 
которая в качестве аргумента принимает строку(ваша переменная name) и возвращает слово наоборот! 
Например: на входе функция принимает строку "hello", а на выходе должна вернуть "olleh". 
!!!Важно: используйте методы массивов и строк
*/
const name = "education";
function converter(name) {
  const nameArr = name.split("");
  nameArr.reverse();
  return nameArr.join("");
}
console.log(converter(name));
