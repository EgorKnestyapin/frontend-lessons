/* 
Задание 1
Создайте классы: Plant, Rose.
Роза должна наследовать Растение. Пусть у растения будут поля:

рост,
возраст.
И метод grow, который увеличивает его рост на 10 см.

У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.
*/
class Plant {
    #height;
    #age;
    constructor(height, age) {
        this.#height = height;
        this.#age = age;
    }
    get height() {
        return this.#height;
    }
    set height(height) {
        this.#height = height;
    }
    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }
    grow() {
        this.#height += 10;
    }
}

class Rose extends Plant {
    #numberOfFlowers;
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this.#numberOfFlowers = numberOfFlowers;
    }
    get numberOfFlowers() {
        return this.#numberOfFlowers;
    }
    set numberOfFlowers(numberOfFlowers) {
        this.#numberOfFlowers = numberOfFlowers;
    }
}

const rose = new Rose(60, 2, 8);
console.log(rose.height);
rose.grow();
console.log(rose.height);
console.log(rose.age);
console.log(rose.numberOfFlowers);