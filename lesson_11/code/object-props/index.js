// Методы объектов
// 1. Object.keys()

const person = {
  name: "Kate",
  age: 28,
  job: "QA",
  private: true,
};
console.log(Object.keys(person));

// delete
delete person.job;
console.log(person);