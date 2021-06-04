// 1) створити функцію яка приймає масив та виводить його

// let arr = [1, 43, 54, 65, 3];
//
// function drawArr(arrey){
//     console.log(arrey);
// }
//
// drawArr(arr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function letRandomArr(){
//     let arr2 = [];
//     for (let i = 0; i < 5; i++) {
//         let number = Math.round(Math.random() * (200 - 100) + 100);
//         arr2.push(number);
//     }
//     return arr2;
// }
//
// drawArr(letRandomArr());


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber (a, b, c){
//     if (a < b && a < c){
//         console.log(a);
//     } else if (b < c && b < a){
//         console.log(b);
//     } else if(c < a && c < b){
//         console.log(c)
//     } else if (a === b && a < c){
//         console.log(`${a} = ${b}`);
//     } else if (b === c && b < a){
//         console.log(`${b} = ${c}`);
//     } else if (a === c && a < b){
//         console.log(`${a} = ${c}`);
//     }
// }
//
// minNumber(32, 23, 3);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber (a, b, c){
//     if (a > b && a > c){
//         console.log(a);
//     } else if (b > c && b > a){
//         console.log(b);
//     } else if(c > a && c > b){
//         console.log(c)
//     } else if (a === b && a > c){
//         console.log(`${a} = ${b}`);
//     } else if (b === c && b > a){
//         console.log(`${b} = ${c}`);
//     } else if (a === c && a > b){
//         console.log(`${a} = ${c}`);
//     }
// }
//
// maxNumber(233, 233, 22);

// 5) створити функцію яка повертає найбільше число з масиву

// let arr = [1, 43, 54, 65, 3];
//
// function maxNumber(arr){
//
//   // let number = Math.max(...arr);
//   // console.log(number);
//
//   let sort = arr.sort((a, b) => b - a);
//   console.log(sort);
//   let slice = sort.slice(0,1);
//     for (const sliceElement of slice) {
//         console.log(sliceElement);
//     }
// }
//
// maxNumber(arr);

// 6) створити функцію яка повертає найменьше число з масиву

// let arr = [1, 43, 54, 65, 3];
// function minNumber(arr){
//
//     // let number = Math.min(...arr);
//     // console.log(number);
//
//     let sort = arr.sort((a, b) => a - b);
//     console.log(sort);
//     let slice = sort.slice(0,1);
//     for (const sliceElement of slice) {
//         console.log(sliceElement);
//     }
// }
// minNumber(arr);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let arr = [1, 43, 54, 65, 3];
//
// function sum (arr){
//     let reduce = arr.reduce((acc, val) => acc + val);
//     console.log(reduce);
// }
//
// sum(arr);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [1, 43, 54, 65, 3];
// function sum (arr){
//     let reduce = arr.reduce((acc, val) => acc + val);
//     let number = reduce / arr.length;
//     console.log(number);
// }
// sum(arr);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'},
//     {girl: "Katy"}
//     ];
//
// function arrOfKeys(arr){
//
//     let reduce = arr.reduce((acc, value, index, arr) => {
//         for (const item in value) {
//             acc.push(item)
//         }
//         return acc
//     }, []);
//     console.log(reduce);
// }
//
// arrOfKeys(arr);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let arr = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'},
//     {girl: "Katy"}
// ];
// function arrOfKeys(arr){
//     let reduce = arr.reduce((acc, value, index, arr) => {
//         for (const item in value) {
//             acc.push(value[item])
//         }
//         return acc
//     }, []);
//     console.log(reduce);
// }
// arrOfKeys(arr);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// let newArr = [];
//
// function multiply(arr1, arr2){
//
//     for (const arr1Element of arr1) {
//         // console.log(arr1.indexOf(arr1Element));
//         for (const arr2Element of arr2) {
//             // console.log(arr2.indexOf(arr2Element))
//             if ( arr1.indexOf(arr1Element) === arr2.indexOf(arr2Element)){
//                 let newVar = arr1Element + arr2Element;
//                 // console.log(newVar)
//                 newArr.push(newVar);
//             }
//         }
//     }
// }
//
// multiply(arr1, arr2);
//
// console.log(newArr)

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
//
//
// function multiply(arr1, arr2){
//
//     let reduce = arr1.reduce((acc, value, index) => {
//         let newVar = acc[index] + value;
//         acc.splice(index, 1, newVar);
//         return acc
//     }, arr2);
//     console.log(reduce);
// }
//
// multiply(arr1, arr2);




//
//
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function numbers(...num){
//     console.log(num);
//     let max = - Infinity;
//     let min = Infinity;
//     num.filter((value, index) => {
//
//         if(value > max){
//             max = value;
//         }
//
//         if(value < min){
//             min = value;
//         }
//     })
//     console.log(max);
//     return min;
// }
//
// document.write(numbers(1, 4, 43, 3, 2,32, 23, 1000, 6, 323));


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let chose = prompt("Chose one of 'keys' or 'meanings'");
//
// function alertSomething(arr){
//     if(chose === 'keys'){
//         let reduce = arr.reduce((acc, value) => {
//             for (const item in value) {
//                 acc.push(item);
//             }
//             return acc;
//         }, []);
//
//         console.log(reduce);
//     } else if(chose === 'meanings') {
//         let reduce2 = arr.reduce((acc, value) => {
//             for (const item in value) {
//                 acc.push(value[item]);
//             }
//             return acc;
//         }, []);
//
//         console.log(reduce2);
//     } else {
//         alert(`You wrote "${chose}" and it's incorrect value!!!`)
//     }
// }
//
// alertSomething(arr);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

// let arr = [9,8,0,4];
//
// function change(arr, number){
//     for (const item of arr) {
//
//         if(arr.indexOf(item) === number){
//             console.log(item);
//             let newIndex = arr.indexOf(item) + number;
//             arr.splice(arr.indexOf(item), 1);
//             arr.splice(newIndex, 0, item);
//         }
//
//     }
//     console.log(arr);
// }
//
// change(arr, 2);

//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1,0,6,0,3, 10, 0, 11, 21, 0, 4, 6, 23, 0, 89];
//
// function endOfArr(arr){
//    let reduce = arr.reduce((acc, value, index) => {
//
//        if(value > 0){
//            acc.push(value)
//        }
//        return acc;
//    }, []);
//
//     console.log(reduce)
//
//     let number = arr.length - reduce.length;
//     for (let i = 0; i < number; i++) {
//         reduce.push(0)
//     }
//
//     console.log(reduce)
// }
//
// endOfArr(arr);


//
// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = '   Harry     Potter   '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// let n4 = "            My      name    is Bohdan and I     want     to be a good     as a developer";
//
// function trim(str){
//     let strings = str.split(' ');
//     let regexp = /^[0-9a-zA-Z]+$/;
//     let newStr = '';
//     for (const element of strings) {
//         if(regexp.test(element)){
//             newStr += `${element} `;
//         }
//     }
//     let cleanStr = newStr.trim();
//     console.log(cleanStr);
//
// }
//
// trim(n4);






//
// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// let str = "Hello OWU";
//
// function addStr(str){
//     let p = document.createElement('p');
//     p.innerText = str;
//     document.body.appendChild(p);
// }
//
// addStr(str);

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// let str = "Hello Bohdan";
// let div = document.createElement("div");
//
// function addElement(string, element){
//     element.innerText = string;
//     document.body.appendChild(element);
// }
//
// addElement(str, div);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let arr = ["reno", "pego", "honda", "hunday", "kopeyka"];
// let id = "index1";
//
// function addItems(array, id){
//     let elementById = document.getElementById(id);
//     for (const el of array) {
//         let htmlParagraphElement = document.createElement("p");
//         htmlParagraphElement.innerText = el;
//         elementById.appendChild(htmlParagraphElement)
//     }
// }
//
// addItems(arr, id);

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let element = "index1";
// let cars = [
//     {name: 'pego', year: 1994, power: 200, color: "red"},
//     {name: 'reno', year: 2003, power: 220, color: "black"},
//     {name: 'honda', year: 2008, power: 120, color: "green"},
//     {name: 'porsh', year: 2019, power: 320, color: "black"},
//     ];
//
// function addCars(arr, str){
//     let elementById = document.getElementById(str);
//     // for (const item of arr) {
//     //     let htmlDivElement = document.createElement('div');
//     //     htmlDivElement.innerText = `Name - ${item.name}`;
//     //     elementById.appendChild(htmlDivElement);
//     // }
//     arr.reduce((acc, value, index) => {
//         let divCar = document.createElement("div");
//         let pCar = document.createElement("p");
//         let heading = value.name.toUpperCase();
//         console.log(heading)
//         pCar.innerText = heading;
//         divCar.appendChild(pCar);
//
//         for (const item in value) {
//             let htmlDivElement = document.createElement('div');
//             htmlDivElement.innerText = `${item} - ${value[item]}`;
//             divCar.appendChild(htmlDivElement);
//          }
//         elementById.appendChild(divCar);
//         return acc;
//     }, [])
//
// }
//
// addCars(cars, element)
// // ******************* НАЗАД В МИНУЛЕ *********************** //
