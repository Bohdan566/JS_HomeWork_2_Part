// 1) Створити масив з 20 чисел та:

// let arr = [12, 45, 34, 56, 34, 3, 5, 3, 56, 67, 67, 478, 12, 34,87, 28, 67, 68, 98];

//     a) відсортувати його від меншого до більшого.

// arr.sort((a, b) => a - b);
//
// console.log(arr);

//     b) відсортувати його від більшого до меншого.

// arr.sort((a, b) => b - a);
//
// console.log(arr);

//     c) Відфілтрувати числа які є кратними 3.

// let numbers = arr.filter(value => {
//     return (value % 3 === 0)
// });
//
// console.log(numbers);

// d) Відфілтрувати числа які є більшими за 10.

// let numbers = arr.filter(value => {
//     return value > 10;
// });
//
// console.log(numbers);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// arr.forEach(value => {
//     document.write(`${value} <br>`);
// })

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// let map = arr.map(value => {
//     return value * 3;
// });
//
// console.log(map);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let number = arr.reduce((acc, value) => {
//     acc += value;
//     return acc;
// }, 0);
//
// console.log(number);


// 2) Створити масив з 20 стрічок та:

let arr = ['inna', 'ivan', 'bohdan', 'ihor', 'ihnat', 'vova', 'marta', 'maria', 'andriy', 'yra'];

// a) Відсортувати його в алфавітному порядку

// let sort = arr.sort((a, b) => {
//     if(a > b){
//         return 1;
//     }
//     return -1;
// });
//
// console.log(sort);

// b) Відсортувати в зворотньому порядку

// let sort = arr.sort((a, b) => {
//     if(a > b){
//         return -1;
//     }
//     return 1;
// });
//
// console.log(sort);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// let strings = arr.filter(value => value.length > 4);
//
// console.log(strings);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let strings = arr.map(value => {
//     return value = "Sam says " + value;
// });
//
// console.log(strings);


//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :

    // const users = [
    //     {name: 'vasya', age: 31, isMarried: false},
    //     {name: 'petya', age: 30, isMarried: true},
    //     {name: 'kolya', age: 29, isMarried: true},
    //     {name: 'olya', age: 28, isMarried: false},
    //     {name: 'max', age: 30, isMarried: true},
    //     {name: 'anya', age: 31, isMarried: false},
    //     {name: 'oleg', age: 28, isMarried: false},
    //     {name: 'andrey', age: 29, isMarried: true},
    //     {name: 'masha', age: 30, isMarried: true},
    //     {name: 'olya', age: 31, isMarried: false},
    //     {name: 'max', age: 31, isMarried: true}
    // ];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// let sort = users.sort((a, b) => a.age - b.age);
//
// console.log(sort);

// let sort = users.sort((a, b) => b.age - a.age);
//
// console.log(sort);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sort = users.sort((a, b) => a.name.length - b.name.length);
//
// console.log(sort);

// let sort = users.sort((a, b) => b.name.length - a.name.length);
//
// console.log(sort);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let numbers = users.map(((value, index) => {
//     return let = id = index;
// }));
// console.log(numbers)
// console.log(users)

// d) відсортувати його за індентифікатором

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// let reduce = users.reduce((acc, value, index, arr) => {
//     if (value.isMarried){
//         value.flat = true;
//         acc.push(value);
//     }
//
//     return acc;
// }, []);
//
// console.log(reduce)

//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//

// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

//
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let filter = cars.filter(value => {
//     return (value.volume >= 3)
// });
//
// console.log(filter);

// - двигун = 2л

// let filter = cars.filter(value => {
//     return (value.volume === 2)
// });
// console.log(filter);

// - виробник мерс

// let filter = cars.filter(value => {
//     return (value.producer === 'mercedes')
// });
// console.log(filter);

// - двигун більше 3х літрів + виробник мерседес

// let filter = cars.filter(value => {
//     return (value.producer === 'mercedes' && value.volume >= 3)
// });
// console.log(filter);

// - двигун більше 3х літрів + виробник субару

// let filter = cars.filter(value => {
//     return (value.producer === 'subaru' && value.volume >= 3)
// });
// console.log(filter);

// - сили більше ніж 300

// let filter = cars.filter(value => {
//     return (value.power > 300)
// });
// console.log(filter);

// - сили більше ніж 300 + виробник субару

// let filter = cars.filter(value => {
//     return (value.power > 300 && value.producer === 'subaru')
// });
// console.log(filter);

// - мотор серіі ej

// let filter = cars.filter(value => {
//     return (value.engine.startsWith('ej'))
// });
// console.log(filter);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filter = cars.filter(value => {
//     return (value.engine.startsWith('ej') && value.power > 300 && value.producer === 'subaru')
// });
// console.log(filter);

// - двигун меньше 3х літрів + виробник мерседес

// let filter = cars.filter(value => {
//     return (value.volume < 3 && value.producer === 'mercedes')
// });
// console.log(filter);

// - двигун більше 2л + сили більше 250

// let filter = cars.filter(value => {
//     return (value.volume > 2 && value.power > 250)
// });
// console.log(filter);

// - сили більше 250  + виробник бмв


// let filter = cars.filter(value => {
//     return (value.power > 250 && value.producer === 'bmw')
// });
// console.log(filter);

//
//
// - взять слдующий массив

// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: true, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// -- Відсортувати їх по ID

// let sort = usersWithAddress.sort((a, b) => a.id - b.id);
//
// console.log(sort);

// -- Відсортувати їх по ID в зворотньому порядку

// let sort = usersWithAddress.sort((a, b) => b.id - a.id);
//
// console.log(sort);

// -- Відсортувати по віку

// let sort = usersWithAddress.sort((a, b) => a.age - b.age);
//
// console.log(sort);

// -- Відсортувати по віку в зворотньому порядку

// let sort = usersWithAddress.sort((a, b) => b.age - a.age);
//
// console.log(sort);

// -- Відсорутвати по імені

// let sort = usersWithAddress.sort((a, b) => {
//     if(a.name > b.name){
//         return 1;
//     }
//     return -1;
// });
//
// console.log(sort);

// -- Відсорутвати по назві вулиці

// let sort = usersWithAddress.sort((a, b) => {
//     if(a.address.street > b.address.street){
//         return 1;
//     }
//     return -1;
// });
//
// console.log(sort);

// -- Відсорутвати по номеру будинку

// let sort = usersWithAddress.sort((a, b) => {
//     return parseInt(a.address.number) - parseInt(b.address.number);
// });
//
// console.log(sort);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

// let filter = usersWithAddress.filter(value => value.age < 30);
//
// console.log(filter);

// -- Залишити тільки одружених

// let filter = usersWithAddress.filter(value => value.isMarried);
//
// console.log(filter);

// -- Залишити тільки одружених, які молодні за 30

// let filter = usersWithAddress.filter(value => (value.isMarried && value.age < 30));
//
// console.log(filter);

// -- Залишити лише тих, в кого парні номери будинків.

// let filter = usersWithAddress.filter(value => (value.address.number % 2 === 0));
//
// console.log(filter);

// -- Порахувати загальний вік всіх людей. (reduce)

// let number = usersWithAddress.reduce((acc, value) => {
//     acc += value.age;
//     return acc;
//
// }, 0);
//
// console.log(number);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)


// let reduce = usersWithAddress.reduce((acc, value) => {
//     if(value.age > 30 && value.isMarried){
//         value.child = true;
//         acc.push(value);
//     }
//     return acc;
// }, []);
//
// console.log(reduce);


//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля

const cars = [
    {owner: {name: "Bohdan", age: 27, experiance: 3}, price: 5000,producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {owner: {name: "Ivanka", age: 25, experiance: 4}, price: 8000,producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {owner: {name: "Ivan", age: 28, experiance: 9}, price: 9000,producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {owner: {name: "Vova", age: 56, experiance: 34}, price: 3000,producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {owner: {name: "Katy", age: 30, experiance: 0}, price: 10000,producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {owner: {name: "Olena", age: 35, experiance: 1}, price: 9000,producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {owner: {name: "Serhiy", age: 24, experiance: 4}, price: 3000,producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {owner: {name: "Andriy", age: 23, experiance: 1}, price: 2000,producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {owner: {name: "Oleh", age: 29, experiance: 1}, price: 20000,producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {owner: {name: "Anton", age: 20, experiance: 1}, price: 10000,producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {owner: {name: "Kindrat", age: 27, experiance: 8}, price: 12000,producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {owner: {name: "Ania", age: 19, experiance: 2}, price: 45000,producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {owner: {name: "Marya", age: 46, experiance: 18}, price: 7000,producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// let carsProto = JSON.stringify(cars);
// let cars2 = JSON.parse(carsProto);
//
//
// function repair(arr){
//     let reduce = arr.map((value, index) => {
//         if(value.power < 200){
//             value.power += value.power * 0.1;
//             // value.owner = {name: prompt(`Owner's name ${index} car`),
//             // age: prompt(`Owner's age ${index} car`),
//             // experiance: prompt(`Owner's experiance ${index} car`)};
//         }
//         return value;
//     })
//         .map(((value, index) => {
//             if(index % 2 === 0){
//                 value.power += value.power * 0.1;
//                 value.price += value.price * 0.05;
//             }
//             return value;
//         }))
//         .map(value => {
//             if(value.owner.experiance < 5 && value.owner.age > 25){
//                 value.owner.experiance += 1;
//             }
//             return value;
//         })
//         .reduce((acc, value) => {
//             acc += value.price;
//
//             return acc;
//         }, 0);
//     console.log(reduce);
//
// }
//
// repair(cars2);
//
// console.log(cars);
// console.log(cars2);


//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// arr = [1, 1, 2, 3, 4, 4, 4, 4, 6, 6, 6, 6, 7, 7, 9, 14, 17, 17, 17];
//
// function findIndexes(arr, e){
//     let indexOf = arr.indexOf(e);
//     let lastIndexOf = arr.lastIndexOf(e);
//
//     console.log(`MinIndex of ${e}: ${indexOf}, MaxIndex of ${e}: ${lastIndexOf}`);
// }
//
// findIndexes(arr, 2);
// findIndexes(arr, 4);
// findIndexes(arr, 6);
// findIndexes(arr, 17);
