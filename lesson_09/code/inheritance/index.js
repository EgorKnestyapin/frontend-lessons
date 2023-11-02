// Наследование
class Animal {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    hello() {
        console.log(
            "Меня зовут " + this.name + " Возраст: " + this.age
            + " Вес " + this.weight
        );
    }
}

const whale = new Animal("Zig", 200, 8_000);
whale.hello();
console.log(whale.name); // отдельно обратились к полю

class Snail extends Animal {
    constructor(name, age, weight, speed) {
        super(name, age, weight);
        this.speed = speed;
    }
    rush() {
        console.log("Я бегу к цели со скоростью " + this.speed);
    }
}

const speedy = new Snail("Speedy", 1, 0.1, 0.001);
speedy.rush();

// Шаблонная строка
let firstName = "John";
let age = 34;
const str = `Меня зовут ${firstName}, мой возраст ${age}`;

// getters setters
// приватные поля с решеточкой
class Rectangle {
    #sideA;
    #sideB;
    constructor(sideA, sideB) {
        this.#sideA = sideA;
        this.#sideB = sideB;
    }
    get sideA() {
        return this.#sideA;
    }
    set sideA(sideA) {
        this.#sideA = sideA;
    }
};

const rec = new Rectangle(10, 5);
console.log(rec.sideA); // использовали геттер
rec.sideA = 12; // изменили - это возможно благодаря сеттеру
console.log(rec.sideA); 
// для sideB мы не написали - поэтому не сможем изменить или получить