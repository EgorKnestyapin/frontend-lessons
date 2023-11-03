// function declaration - объвление функции
function sum(a, b) {
  return a + b;
}
const res = sum(2, 4);
console.log(res);

const res2 = sum(2, "4");
console.log(typeof res2); // string

const res3 = sum(3);
console.log(res3); // NaN

const res4 = print(); // в f declaration вызов может быть до объявления
function print() {
  console.log("Example");
}
console.log(res4); // undefined

// 2. Function expression - функциональное выражение
let divide = function (a, b) {
  return a / b;
};
console.log(divide(9, 3)); // в f expression вызов не может быть до объявления
// hoisting - поднятие
// coercion - неявное преобразование типов

const calculator = {
  brand: "casio",
  divide,
  sum,
  subtract: function (a, b) {
    return a - b;
  },
};
const res6 = calculator.divide(9, 3);
console.log(res6);
const res7 = calculator.sum(2, 2);
console.log(res7);
const res8 = calculator.subtract(9, 3);
console.log(res8);

// частный случай - default parameters
function hello(name = "Незнакомец") {
    console.log(`Привет, ${name}`);
}
// function call - (invocation) - вызов функции
hello(); // Привет, undefined заменилось на Привет, Андрей
hello("Семен"); // Привет, Семен

y = 10; // в строгом режиме ('use strict') вызовет ошибку - см. самый верх документа
console.log(y);

function foo() {
    'use strict'
    // для кода дальше работает строгий режим
}