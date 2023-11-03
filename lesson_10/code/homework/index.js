/* 
Задание 1
Создайте стрелочную функцию, которая бы принимала массив и цифру, 
возвращала бы элемент массива под этим индексом.
*/
const getElementByIndex = (arr, num) => arr[num];
console.log(getElementByIndex([0, 1, 2, 3, 4], 3));

/* 
Задание 2 (spread)
Создайте функцию, которая принимает два массива, возвращать она должна новый массив, 
состоящий из всех элементов исходных массивов.
*/
function getNewArrayFromTwo(arr1, arr2) {
  return [...arr1, ...arr2];
}
const array = getNewArrayFromTwo([3, 4, 5], [1, 2, 6]);
console.log(array);

/* 
Задание 3 * (передача функции в качестве параметра)
Создайте функцию, которая бы принимала бы следующие параметры:

код погоды
функция decode, которая дает расшифровку погоды по коду.
Функция должна возвращать строку, описывающую погоду.
*/
function getWeatherDescription(code, decode) {
  return decode(code);
}
const decoder1 = getWeatherDescription("FC", (code) => {
  switch (code) {
    case "SQ":
      return "Шквал";
    case "PO":
      return "Пыльный вихрь";
    case "FC":
      return "Торнадо";
    case "BR":
      return "Дымка (видимость от 1 до 9 км)";
    case "HZ":
      return "Мгла (видимость менее 10 км)";
    case "FU":
      return "Дым (видимость менее 10 км)";
    case "DS":
      return "Пыльная буря (видимость менее 10 км)";
    case "SS":
      return "Песчаная буря (видимость менее 10 км)";
    default:
      return "Отсутствует расшифровка данного кода";
  }
});
console.log(decoder1);
