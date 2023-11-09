// Promises
// 1. Пример: создаем промис и успешно его завершаем через 1 сек
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});
console.log(promise);

// 2. Пример: создаем промис и завершаем через 1 сек с ошибкой
let errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Error")), 1000);
});
console.log(errorPromise);

// 3. Пример: вызов и resolve и reject
let promiseWithResAndReject = new Promise((resolve, reject) => {
  // Promise вызывает только первую само быстро выполненную ф-ю resolve или
  // reject, остальное он игнорирует!!!
  setTimeout(() => resolve("Success"), 1000);
  reject(new Error("Some Error"));
});
console.log(promiseWithResAndReject);

let promiseWithResAndReject2 = new Promise((resolve, reject) => {
  // Promise вызывает только первую само быстро выполненную ф-ю resolve или
  // reject, остальное он игнорирует!!!

  // пример работы и имтации закгрузки данных по сети
  //   const data = post(url);

  //   if (data.status === 200) {
  //     resolve(data);
  //   }

  //   if (data.status === 400) {
  //     reject(data.error);
  //   }
  resolve({ name: "Kirill", age: 28 });
  reject(new Error("Some Error"));
});

promiseWithResAndReject2
  .then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  )
  .finally(() => {
    console.log("Выключаем спиннер");
  });
console.log(promiseWithResAndReject2);

// 4 пример: метод then(), catch(), finally()
let promiseWithResAndReject3 = new Promise((resolve, reject) => {
  // Promise вызывает только первую само быстро выполненную ф-ю resolve или
  // reject, остальное он игнорирует!!!

  // пример работы и имтации закгрузки данных по сети
  //   const data = post(url);

  //   if (data.status === 200) {
  //     resolve(data);
  //   }

  //   if (data.status === 400) {
  //     reject(data.error);
  //   }
  reject(new Error("Some Error"));
  resolve({ name: "Kirill", age: 28 });
});

promiseWithResAndReject3
  .then(
    (result) => {
      console.log(result);
    },
    // В данном случае ошибка обработается в then, а не в catch()
    (error) => {
      console.log("Error in then", error);
    }
  )
  .catch((error) => {
    console.log("Error in catch", error);
  })
  // finally выполниться в любом случае
  .finally(() => {
    console.log("Выключаем спиннер");
  });

console.log(promiseWithResAndReject3);

// 5-й пример: Имитация работы по сети
// 1й шаг: создаем promise для выполнения асинхронной задачи
const promiseWithApiImitation = new Promise((resolve, reject) => {
  // эмулировать загрузку данных по сети, мы хотим получить данные пользователя
  console.log("Включаем спиннер");
  setTimeout(() => {
    const success = true; // задача выполнена успешно или нет
    if (success) {
      resolve({ name: "Kirill", age: 28 });
    } else {
      reject(new Error("Internal server error"));
    }
  }, 3000);
});
promiseWithApiImitation
  .then((result) => {
    console.log(result);
    console.log("Мы получили данные успешно");
  })
  .catch((error) => {
    console.log(error);
    console.log("Мы получили ошибку");
  })
  .finally(() => console.log("Выключаем спиннер"));
