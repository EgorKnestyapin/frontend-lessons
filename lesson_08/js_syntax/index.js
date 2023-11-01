console.log("hello");

// let, const, var
// {
//     var x = 10;
// }
// console.log(x); // var виден во внешнем скопе в отличии от let, const

// ПРИМИТИВНЫЕ ТИПЫ
// 1. string
let myName = "John";
let str1 = 'Можно писать и в одинарных';
// для char нет отдельного типа
let str2 = myName.toUpperCase(); // создаст копию, где все буквы прописные JOHN
// 2. number
let n1 = 10; // могут быть целыми
let n2 = 10.5 // могут быть с плавающей точкой

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 2^53 − 1.

// 3. bigInt
let n3 = 128n; // пишется с постфиксом 

// 4. boolean
let isDrunk = true;
// условная конструкция
if (isDrunk) {
    console.log("охохо, мне море по колено, а горы по плечу");
}
// if-else такой же, как в java
// тернарный оператор
let animal = isDrunk ? "pig" : "human";

// 5. symbol
const s1 = Symbol("Something");
console.log(s1);

// 6. undefined
let u1;
console.log(u1); // undefined
// когда не присвоено значение переменной 
// (когда нет элемента в массиве по индексу, когда нет ключа в объекте)
// также можем прописать вручную
let u2 = undefined;

// 7. null
// отсутствие значения
// можем прописать вручную:
let u3 = null;
// null возникает чаще всего как результат возвращаемого значения от метода
// document.getElementById("no-such-id") --> null
// например, если метод getElementById не нашел значение, он возвращает null

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// 1. Преобразование в строку
// неявное implicit
let str4 = 9 + ""; // через конкатенацию
// явное explicit
let str5 = String(9); // "9"
let n6 = 128;
let str6 = String(n6);
// небольшой кейс на "подумать"
let str7 = 12 + 6 + "10" // "1810"

// 2. Преобразование в число
// неявным образов
const n7 = +"9"; // 9 число
const n8 = +"10" + +"15" // 25 число
// явным
let n9 = Number("9"); // 9 число
console.log(typeof n9) // "number"
// какая проблема? 
let n10 = Number("9@7h"); // если не получается
console.log(n10); // NaN
// NaN - not a number
// вопрос на засыпку? Какой тип у NaN?
console.log(typeof NaN); // "number"
console.log(typeof true); // "boolean"

// 3. Преобразование в boolean - самое каверзное
// явное преобразование в булеан Boolean();
console.log(Boolean(12)); // true
console.log(Boolean(-12)); // true
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean("cat")); // true
console.log(Boolean("")); // false

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// falsy values: 0, null, undefined, NaN, "" --> false

// неявные преобразованеи в boolean
const name1 = "0";
if (name1) {
    console.log("Привет, " + name1); // "Привет, 0"
} else {
    console.log("Else");
}

// ОПЕРАТОРЫ
// 1. тернарный оператор
// 2. математические: *, -, /, +, %
// ** - возведение в степень
const sum = 10 + 12;
const power = 3 ** 2 // три в степени два
console.log(power); // 9
// 3. операторы сравнения: >, <, >=, <= - булеан

// равенство - строгое === и нестрогое ==
console.log(9 === 9); // true
console.log(9 == 9); // true

console.log(9 === "9"); // false
console.log(9 == "9"); // true
// строгое === смотрит тип и, если он не совпадает - сразу false
// нестрогое == если отличаются - происходит неявное преобразование типов 
// - и уже сравниваются значения
// строка число булеан
console.log(true == ''); // false, true преобразуется в 'true'
console.log(String(Number(true))); // "1"
console.log(true == "1"); // true, строка число булеан - true -> 1 -> "1"

// Неравенство
console.log(9 != 10); // true нестрогое неравенство, используется реже
console.log(9 != "9"); // false нестрогое неравенство, используется реже
console.log(9 !== "9"); // true !== - строгое равно

// Присваивания
// =
let n11 = 10;