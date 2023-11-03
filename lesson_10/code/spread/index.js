// Spread
const fruits = ["apple", "orange"];
// Две переменные и один массив
const newFruits = fruits;
// Мы можем не заметить проблемы
fruits[0] = "banana";
console.log(newFruits[0]); // "banana"
// Как сделать новый массив с элементами, скопированными из первого?
// Скопируем в новый массив все элементы исходного, чтобы это были независимые массивы
const independentFruits = [...fruits];
// создали копию исходного массива - если меняем, исходный массив не меняется
console.log(independentFruits);

// Пример 2
const cars = ["BMW", "Porsche"];
const myCars = [...cars, "Mercedes"];
console.log(myCars);

// Пример 3
const myFriends = ["Roma", "Petr"];
const myWifeFriends = ["Fedor", "Frosya"];
const commonFriends = [...myFriends, ...myWifeFriends];
console.log(commonFriends); // [ 'Roma', 'Petr', 'Fedor', 'Frosya' ]