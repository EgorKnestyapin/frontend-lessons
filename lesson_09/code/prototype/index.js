// Прототипное наследование является нативным для JS
// шок-контент: отношение наследования между двумя объектами,
// где один объект будет выступать как прототип для другого
const bike = {
    brand: "Gazelle",
    gears: 21,
    drive() {
        console.log("bsh-bsh-bsh");
    }
};
const mountainBike = {
    __proto__: bike,
    gears: 20,
    price: 600
};
console.log(mountainBike); // { gears: 20, price: 600 }
console.log(mountainBike.brand); // Gazelle
console.log(mountainBike.gears); // 20