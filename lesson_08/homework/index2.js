/* Задание 2
Используя пройденные на занятии методы массива получите из этого массива новый массив, 
в котором элементы идут в обратной последовательности.
*/
const arrNames = ["Семен", "Иван", "Петр", "Татьяна"];
const reverseArrNames = [];
let length = arrNames.length;

for (let i = 0; i < length; i++) {
    reverseArrNames[i] = arrNames.pop();
}

console.log(reverseArrNames);