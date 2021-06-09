// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

// function Computer(RAM, power){
//     this.RAM = RAM;
//     this.power = power;
//
//     this.turnON = function(){
//         console.log(`Computer is turned on`);
//     }
// }
//
// let laptop = new Computer(200, 1000);
//
// laptop.turnON();
//
//
// class Computer{
//     constructor(RAM, power) {
//         this.RAM = RAM;
//         this.power = power;
//     }
//
//     turnON(){
//         console.log(`Computer is turned on`);
//     }
// }
//
// let computer1 = new Computer(200, 1000);
//
// computer1.turnON();
//
//
// // ===
// // Від базового компютрера треба реалізувати ноутбук.
// //     Він має нову властивість дюймаж монітора.
// //     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
//
// class Laptop extends Computer{
//     constructor(RAM, power, inches) {
//         super(RAM, power);
//         this.inches = inches;
//         this.batteryWork = this.power / (this.inches * this.RAM);
//     }
//
// }
//
// let laptop1 = new Laptop(200, 1000, 345);
//
// console.log(laptop1);
//
//
//
// // ===
// // Від ноутбука потрібно зробити ультрабук.
// //     Він має нову змінну ваги.
// //     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
//
// class UltraLaptop extends Laptop{
//     constructor(RAM, power, inches, scales) {
//         super(RAM, power, inches);
//         this.scales = scales;
//     }
//
//     turnON() {
//         if(this.scales > 2000 && this.batteryWork < 0.2){
//             console.error('ERROR')
//         } else {
//             super.turnON();
//         }
//     }
// }
//
// let ultraLaptop1 = new UltraLaptop(200, 1000, 10, 2100);
//
// console.log(ultraLaptop1);
//
// ultraLaptop1.turnON();
//
//
// // ===
// // Від базвого класу потрібно створити базовий ПК.
// //     В нього має бути новий метод запуску ігор.
// //     Кількість FPS визначається як потужність / опервтивку.
// //     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// class BasePC extends Computer{
//     constructor(RAM, power) {
//         super(RAM, power);
//         this.FPS = this.RAM / this.power;
//     }
//     playGame(nameOfGame){
//         console.log(`You are playing ${nameOfGame} with ${this.FPS} FSP`);
//     }
//
//     appgradeRAM(appgaradePersent){
//         if(appgaradePersent <= 100 && appgaradePersent >=0){
//             console.log((this.RAM * appgaradePersent)/100);
//             this.RAM += ((this.RAM * appgaradePersent)/100);
//         }
//     }
//
//     appgradePower(appgaradePersent){
//         if(appgaradePersent <= 10 && appgaradePersent >=0){
//             console.log((this.power * appgaradePersent)/100);
//             this.power += ((this.power * appgaradePersent)/100);
//         }
//     }
// }
//
// let basePC1 = new BasePC(2000, 400);
//
// console.log(basePC1);
//
// basePC1.playGame("World of Warcraft");
//
//
// //
// // Компютер можна апгрейдити.
// //     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// //     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// //     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
//
// basePC1.appgradeRAM(10);
// console.log(basePC1);
//
// basePC1.appgradePower(9);
// console.log(basePC1);
//
//
// // ===
// // Від базового ПК необхідно зробити ігровий ПК.
// //     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// //     При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// // що на цьому відрі ігри не запускаються.
//
//
// class GamePC extends BasePC{
//     constructor(RAM, power) {
//         super(RAM, power);
//     }
//
//     playGame(nameOfGame) {
//         if(this.power < 500){
//             document.write('Hа цьому відрі ігри не запускаються.')
//         } else {
//             super.playGame(nameOfGame);
//         }
//
//         this.power -= ((this.power * 0.1)/100 );
//     }
// }
//
// let gamePC1 = new GamePC(64, 505);
//
//
// for (let i = 0; i < 20; i++) {
//     gamePC1.playGame("wewe");
// }
//
// console.log(gamePC1);

//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, producer, year, speed, power){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed= speed;
//     this.pover = power;
//
//    this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     this.info = function (){
//         console.log(`Model is ${this.model}, producer is ${this.producer} ...`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//        this.speed = newSpeed;
//     }
//
//     this.changeYear = function (newValue){
//        this.year = newValue;
//     }
//
//     this.addDriver = function (driver){
//        this.driver = driver;
//     }
//
// }
//
// let porsh = new Car('cayen', 'porshe', 2019, 360, 2000);
//
// console.log(porsh);
//
// porsh.drive();
// porsh.info();
// porsh.increaseMaxSpeed(350);
// porsh.changeYear(2020);
// porsh.addDriver({name: "Bohdan", age: 27});
// porsh.addDriver({name: "Ivan", age: 26});

//
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car{
//     constructor(model, producer, year, speed, power){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed= speed;
//         this.pover = power;
//     }
//
//
//    drive = function (){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     info = function (){
//         console.log(`Model is ${this.model}, producer is ${this.producer} ...`);
//     }
//
//     increaseMaxSpeed = function (newSpeed){
//        this.speed = newSpeed;
//     }
//
//     changeYear = function (newValue){
//        this.year = newValue;
//     }
//
//     addDriver = function (driver){
//        this.driver = driver;
//     }
//
// }
//
// let porsh = new Car('cayen', 'porshe', 2019, 360, 2000);
//
// console.log(porsh);
//
// porsh.drive();
// porsh.info();
// porsh.increaseMaxSpeed(350);
// porsh.changeYear(2020);
// porsh.addDriver({name: "Bohdan", age: 27});
// porsh.addDriver({name: "Ivan", age: 26});

//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince{
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }
//
// let girls = [];
//
// let katy = new Popelushka("Katy", 30, 39);
// let dana = new Popelushka("Dana", 26, 37);
// let lyna = new Popelushka("Lyna", 20, 36);
// let olya = new Popelushka("Olya", 32, 40);
// let ira = new Popelushka("Ira", 26, 37);
//
// girls.push(katy, dana, lyna, olya, ira);
//
// console.log(girls);
//
// let prince = new Prince("Ivan", 37, 37);
//
// console.log(prince);
//
// for (let i = 0; i < girls.length; i++) {
//
//     if(prince.shoesSize === girls[i].footSize){
//         console.log(`${prince.name} and ${girls[i].name}`)
//     }
//
// }

//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Popelushka (name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince(name, age, shoesSize){
//     this.name = name;
//     this.age = age;
//     this.shoesSize = shoesSize;
//
//     this.findGirl = function (girls){
//         for (let i = 0; i < girls.length; i++) {
//             if(this.shoesSize === girls[i].footSize){
//                 console.log(`${this.name} and ${girls[i].name}`)
//             }
//         }
//     }
// }
//
// let girls = [];
//
// let katy = new Popelushka("Katy", 30, 39);
// let dana = new Popelushka("Dana", 26, 39);
// let lyna = new Popelushka("Lyna", 20, 36);
// let olya = new Popelushka("Olya", 32, 40);
// let ira = new Popelushka("Ira", 26, 37);
//
// girls.push(katy, dana, lyna, olya, ira);
//
// console.log(girls);
//
// let prince = new Prince("Ivan", 37, 37);
//
// console.log(prince);
// prince.findGirl(girls);


// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//        model : 'Kayen',
//        producer : 'Porshe',
//        year : '2020',
//        speed : '300',
//        power : '2000',
//
//     drive : function (){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     },
//     info : function (){
//         console.log(`Model is ${this.model}, producer is ${this.producer} ...`);
//     },
//     increaseMaxSpeed : function (newSpeed){
//         this.speed = newSpeed;
//     },
//     changeYear : function (newValue){
//         this.year = newValue;
//     },
//     addDriver : function (driver){
//         this.driver = driver;
//     }
// };
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(360);
// car.changeYear(2021);
// car.addDriver({name: "Bohdan", age: 27});
//
// console.log(car);
