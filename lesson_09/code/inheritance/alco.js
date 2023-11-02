/* 
Создайте класс Alcohol с полями: 
    - title, 
    - strength - крепость,
    - volume - объем бутылки
    с методом info - выводит в консоль фразу 
    "Ни дня без <название алкоголя>" 

Создайте производный класс Brandy
    - age - выдержка
    - country - страна

Создайте производный класс Liquor
    - sugarAmount - количество сахара
*/

class Alcohol {
    constructor(title, strength, volume) {
        this.title = title;
        this.strength = strength;
        this.volume = volume;
    }
    info() {
        const random = Math.random();
        console.log(random > 0.33 ? `Ни дня без ${this.title}` : "Надо и меру знать");
    }
}

class Brandy extends Alcohol {
    constructor(title, strength, volume, age, country) {
        super(title, strength, volume);
        this.age = age;
        this.country = country;
    }
}

class Liquor extends Alcohol {
    constructor(title, strength, volume, sugarAmount) {
        super(title, strength, volume);
        this.sugarAmount = sugarAmount
    }
}

const brandy = new Brandy("Torres", 38, 0.7, 10, "Spain");
brandy.info();
const liquor = new Liquor("Aperol", 11, 0.7, 20);
liquor.info();
