// // --створити масив з:
// // - з 5 числових значень
//     let arr = [1, 2, 3, 4, 5];
// // - з 5 стічкових значень
//     let arr2 = ["Hello", "Welcome", "Good lock", "Well done", "Good"];
// // - з 5 значень стрічкового, числового та булевого типу
//     let arr3 = [1, 2, "Bohdan", "Katy", true];
// // - та вивести його в консоль
//     console.log(arr3);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 1;
// arr[1] = "Bohdan";
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello Bohdan</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello - ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let x = 0;
//
// while (x < 20){
//     document.write(`<h1>Hello</h1>`);
//     x++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let x = 0;
//
// while (x < 20){
//     document.write(`<h1>Hello - ${x}</h1>`);
//     x++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [12, 23, 34, 56, 656, 34, 656, 34, 656, 878];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ["Oleg", "Bohdan", "Serhiy", "Ivan", "Ivanka", "Vova", "Vasil", "Katy", "Olga", "Seroga"];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ["Oleg", "Bohdan", true, "Ivan", "Ivanka", 1234, "Vasil", "Katy", "Olga", {name: "Bob"}];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ["Oleg", "Bohdan", true, "Ivan", true, 1234, false, "Katy", "Olga", {name: "Bob"}];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === "boolean"){
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [222, "Oleg", "Bohdan", true, "Ivan", true, 1234, false, "Katy", "Olga", {name: "Bob"}, 21];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === "number"){
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [222, "Oleg", "Bohdan", true, "Ivan", true, 1234, false, "Katy", "Olga", {name: "Bob"}, 21];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === "string"){
//         console.log(arr[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
//
// arr[0] = 222;
// arr[1] = "Oleg";
// arr[2] = "Bohdan";
// arr[3] = true;
// arr[4] = "Ivan";
// arr[5] = true;
// arr[6] = 1234;
// arr[7] = false;
// arr[8] = "Katy";
// arr[9] = 21;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`step is ${i+1}`);
//     document.write(`step is ${i+1} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`step is ${i+1}`);
//     document.write(`step is ${i+1} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(`step is ${i+1}`);
//     document.write(`step is ${i+1} <br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//
//     if (i % 2 === 0){
//         console.log(`step is ${i}`);
//         document.write(`step is ${i} <br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//
//     if (i % 2 !== 0){
//         console.log(`step is ${i}`);
//         document.write(`step is ${i} <br>`);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i <= 2; i++) {
//     let k = 0;
//     do {
//         if (k < 10){
//             console.log(`0${i} - 0${k}`);
//         } else {
//             console.log(`0${i} - ${k}`);
//         }
//         k++;
//     }
//     while (k < 60 && i < 2)
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let i = 0; i <= 2; i++) {
//     let k = 0;
//     do {
//         for (let j = 0; j < 60; j++) {
//             if (k < 10){
//                 console.log(`0${i} - 0${k}`);
//             } else {
//                 console.log(`0${i} - ${k}`);
//             }
//         }
//         k++;
//     }
//     while (k < 60 && i < 2)
// }


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];
//
// arr.push(1, 2, 3);
//
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr = [1, 2, 3];
// arr.reverse();
//
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1, 2, 3];
//
// arr.push(4, 5, 6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr = [1, 2, 3];
//
// arr.unshift(4, 5, 6);
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];
//
// let string = arr.shift();
// console.log(string);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq'];
//
// let string = arr.pop();
// console.log(string);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(0,3);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2,3);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 2);
// arr.push("a", "b", "c", 4, 5);
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.

// let arr = [1, 2, 3, 4, 5];
//
// let splice = arr.splice(1, 5);
// let splice2 = splice.splice(0, 3);
//
// arr.push("a", "b");
//
// for (let i = 0; i < splice2.length; i++) {
//    arr.push(splice2[i]);
// }
//
// arr.push("c", splice[0], "e");
//
// console.log(splice);
// console.log(splice2);
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [12, 4545, 56, 453, 343, 64, 454, 45, 232, 65];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr = [12, 4545, 56, 453, 343, 64, 454, 45, 232, 65];
// let arr2 = [];
//
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
// }
//
// console.log(arr2);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [12, 4545, 56, 453, 343, 64, 454, 45, 232, 65];
// let arr2 = [];
//
// for (let i = 0; i < arr.length; i++) {
//     arr2.unshift(arr[i]);
// }
//
// arr2.reverse();
// console.log(arr2);

// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let j = 0;
// while (j < arr.length){
//     if (j % 2 !== 0){
//         console.log(arr[j]);
//     }
//     j++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0){
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// let j = 0;
// while (j < arr.length){
//     if (arr[j] % 2 === 0){
//         console.log(arr[j]);
//     }
//     j++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0){
//         arr[i] = `${arr[i]} okten`;
//     }
//     console.log(arr[i]);
// }

// 8. вивести масив в зворотньому порядку.

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// console.log(arr.reverse());

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

// let arr = [];
//
// for (let i = 0; i < 50; i++) {
//     // console.log(Math.floor((Math.random() * 50) + 1) * 2);
//     arr[i] = Math.floor((Math.random() * 50) + 1) * 2;
// }
//
// console.log(arr);

// - заповнити його 50 непарними числами за допомоги циклу.

// let arr = [];
//
// let i = 0;
// while (arr.length < 50){
//     let randomNumber = Math.floor((Math.random() * 50) + 1);
//     if(randomNumber % 2 !== 0){
//         console.log(randomNumber);
//         arr[i] = randomNumber;
//         i++;
//     }
// }
//
// console.log(arr);

// 1. Створити пустий масив та :
//
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// let max = 732;
// let min = 8;
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor((Math.random() * (max - min +1 )) + min);
// }
//
// console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен

// let arr = [];
// let max = 732;
// let min = 8;
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor((Math.random() * (max - min +1 )) + min);
// }
//
// for (let i = 0; i < arr.length; i++) {
//     if (i % 3 === 0){
//         console.log(arr[i]);
//     }
// }
//
// console.log(arr);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arr = [];
// let max = 732;
// let min = 8;
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor((Math.random() * (max - min +1 )) + min);
// }
//
// for (let i = 0; i < arr.length; i++) {
//     if (i % 3 === 0 && arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
//
// console.log(arr);

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr = [];
// let arr2 = [];
// let max = 732;
// let min = 8;
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor((Math.random() * (max - min +1 )) + min);
// }
//
// for (let i = 0; i < arr.length; i++) {
//     if (i % 3 === 0 && arr[i] % 2 === 0){
//         console.log(arr[i]);
//         arr2.push(arr[i]);
//     }
// }
//
// console.log(arr);
// console.log(arr2);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [];
//
// let max = 732;
// let min = 8;
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor((Math.random() * (max - min +1 )) + min);
// }
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
//
// console.log(arr);


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100,250,50,168,120,345,188];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//
//     console.log(arr[i]);
//     if (i < arr.length - 1){
//         sum += arr[i];
//     }
// }
//
// console.log(arr);
// console.log(sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = [];
// let arr2 = [];
//
// for (let i = 0; i < 10; i++) {
//     let max = 10;
//     let min = 0;
//     arr.push(Math.floor(Math.random() * (max - min + 1) + min));
// }
//
// for (let i = 0; i < arr.length; i++) {
//    arr2.push(arr[i] * 5);
// }
//
// console.log(arr);
// console.log(arr2);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = [1,"Bohdan", true, 12, "Katy", "Oleg", 10, 67, false, 20, "Inna"];
// let arr2 = [];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (typeof(arr[i]) === "number"){
//        arr2.push(arr[i]) ;
//     }
// }
//
// console.log(arr2);

//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let word = '';
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];
// }
//
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let word = '';
//
// let i = 0;
//
// while (i < arr.length){
//     word += arr[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let word = '';
//
// for (const arrElement of arr) {
//     word += arrElement;
// }
//
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let word = '';
//
// for (const arrElement in arr) {
//     word += arr[arrElement];
// }
//
// console.log(word);
