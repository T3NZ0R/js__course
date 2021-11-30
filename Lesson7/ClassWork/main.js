//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function  Car(model,manufacturer, year, maxSpeed, volume){
//     this.model = model;
//     this.manufcturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function (){
//         for (const key in this) {
//             if(typeof this[key] !== "function"){
//                 console.log(`${key} - ${this[key]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed+=newSpeed;
//     }
//
//     this.changeYear = function (newValue){
//         this.year=newValue;
//     }
//
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }

// let audi = new Car("Audi", "Germany", 2020, 360, 4.2);
// console.log(audi);
//
// audi.drive();
//
// audi.info();
//
// audi.increaseMaxSpeed(20);
// console.log(audi.maxSpeed);
//
// audi.changeYear(2021);
// console.log(audi.year);
//
// audi.driver("Vitaliy");
// audi.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class CarNew {
//     constructor(model,manufacturer, year, maxSpeed, volume) {
//
//         this.model = model;
//         this.manufcturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//             drive = function (){
//                 console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//             }
//             info = function (){
//                 for (const key in this) {
//                     if(typeof this[key] !== "function"){
//                         console.log(`${key} - ${this[key]}`);
//                     }
//                 }
//             }
//             increaseMaxSpeed = function (newSpeed){
//                 this.maxSpeed+=newSpeed;
//             }
//
//             changeYear = function (newValue){
//                 this.year=newValue;
//             }
//
//             addDriver = function (driver){
//                 this.driver = driver;
//             }
//         }
//
//
// let audi = new CarNew("Audi", "Germany", 2020, 360, 4.2);
// console.log(audi);
//
// audi.drive();
//
// audi.info();
//
// audi.increaseMaxSpeed(20);
// console.log(audi.maxSpeed);
//
// audi.changeYear(2021);
// console.log(audi.year);
//
// audi.addDriver("Vitaliy");
// audi.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
}

let arr = [
    new Popelushka("Kate", 21, 33),
    new Popelushka("Nicole", 22, 42),
    new Popelushka("Lily", 19, 33),
    new Popelushka("Olya", 23, 35),
    new Popelushka("Yulia", 18, 36),
    new Popelushka("Sonya", 22, 38),
    new Popelushka("Ania", 23, 39),
    new Popelushka("Sasha", 24, 33),
    new Popelushka("Monica", 25, 35),
    new Popelushka("Olena", 23, 32)
];

console.log(arr);

let prince = new Prince('Vasya', 22, 36);
console.log(prince);

for (let i = 0; i < arr.length; i++) {
    if(arr[i].footSize === prince["shoesSize"]){
        console.log(arr[i]);
    }
}