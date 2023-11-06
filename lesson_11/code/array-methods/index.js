// Методы массивов

// Строковый метод split()
console.log("Алексей".split(""));

// Метод map()
// Создать новый массив, у которого каждый элемент будет увеличен на 5
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(
  (currentValue, index, array) => currentValue + 5
);
console.log(newNumbers);

// foreach
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArray = arr2.forEach((value) => {
  //   if (index === 5) {
  //     return;
  //   }
  arr1.push(value);
  //   post(url, value);
});

console.log(arr1);
console.log(arr2);
console.log(newArray);

// filter() method
// Создать новый массив без Kate
const names = ["Aleksei", "Gleb", "Anastasia", "Alex", "Kate"];
const newNames = names.filter((value) => value !== "Kate");
console.log(newNames);

// find()
const companyNames = [
  { name: "Kate", age: 28 },
  { name: "Alex", age: 30 },
  { name: "Roma", age: 40 },
];
const newCompanyNames = companyNames.find((value) => value.name === "Leha");

console.log(companyNames);
console.log(newCompanyNames);

// Array method reduce()
const digits = [0, 1, 2, 3, 4, 5];
const newDigits = digits.reduce(
  (prevValue, currentValue) => prevValue + currentValue
);
console.log(newDigits);

// Array method reverse()

// some() array method
const isNameFound = ["Alex", "Gleb", "Kate", "Roma"].some(
  (value) => value === "Pablo"
);
console.log(isNameFound);

// every()

// метод includes()
console.log([1, 2, 3, 4, 5].includes(5));

// метод isArray()
// Данные пришли с сервера
const dataFromServer = [1, 2, 3, 4];
console.log(Array.isArray(dataFromServer));
