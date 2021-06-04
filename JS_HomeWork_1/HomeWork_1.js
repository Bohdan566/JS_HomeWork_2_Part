<!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.-->
<!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
<!-- - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.-->
<!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
<!-- - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.-->
<!--Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".-->
<!-- - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).-->
<!-- - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.-->
<!-- - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.-->
<!-- - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.-->
<!--Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.-->
<!-- - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.-->
<!-- - За допомогою prompt() отримати 2 цілих числа.-->
<!--Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.-->
<!--За допомогою Math.pow (Google) піднести перше число в степінь другого числа.-->
<!--Example. Число 1 = 5. Число 2 = 2. Результат = 25-->
<!-- - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.-->
<!--let a = 100; let b = '100'; let c = true;-->
<!-- - Поставет відповідний оператор в виразах що б вийшов відповідний результат.-->
<!--В однакових виразаї не використовувати однакові оператори!!!-->
<!--5 ? 6 -> true-->
<!--5 ? 6 -> false-->
<!--5 ? 6 -> false-->
<!--5 ? 6 -> false-->
<!--10 ? 10 -> true-->
<!--10 ? 10 -> true-->
<!--10 ? 10 -> false-->
<!--10 ? 10 -> false-->
<!--10 ? 10 -> false-->
<!--123 ? '123' -> false-->
<!--123 ? '123' -> true-->

<!--Додатково:-->
<!-- - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.-->
<!--console.log(132 > 100 && 45 < 12 );-->
<!--console.log(34 > 33 && 23 < 90 );-->
<!--console.log(99 > 100 && 45 > 12 );-->
<!--console.log(132 > 100 || 45 < 12 );-->
<!--console.log(111 > 11 || 45 < 111 );-->
<!--console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );-->
<!--console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );-->
<!--console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );-->
<!--console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));-->
<!--console.log(!!'-1');-->
<!--console.log(!!-1);-->
<!--console.log(!!'0');-->
<!--console.log(!!'null');-->
<!--console.log(!!'undefined');-->
<!--console.log(!!(3/'owu'));-->
<!--console.log((111 > 11 || 45 < 111) ||  !!'0');-->
<!--console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));-->

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
//
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11
//
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.
//
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
// parseInt("435")
// parseInt("Вася")
//
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
//
//
// =====================
// ======ДОП============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!


// <!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.-->
//
//
// // let string1 = "hello";
// // let string2 = "owu";
// // let string3 = "com";
// // let string4 = "ua";
// //
// // let number1 = 1;
// // let number2 = 10;
// // let number3 = -999;
// // let number4 = 123;
// // let number5 = 3.14;
// // let number6 = 2.7;
// // let number7 = 16;
// //
// // let boolean1 = true;
// // let boolean2 = false;

// <!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
//
// // console.log(string1);
// // console.log(string2);
// // console.log(string3);
// // console.log(string4);
// //
// // console.log(number1);
// // console.log(number2);
// // console.log(number3);
// // console.log(number4);
// // console.log(number5);
// // console.log(number6);
// // console.log(number7);
// //
// // console.log(boolean1);
// // console.log(boolean2);
// //
// // alert(string1);
// // alert(string2);
// // alert(string3);
// // alert(string4);
// //
// // alert(number1);
// // alert(number2);
// // alert(number3);
// // alert(number4);
// // alert(number5);
// // alert(number6);
// // alert(number7);
// //
// // alert(boolean1);
// // alert(boolean2);
// //
// // document.write(string1 + "<br/>");
// // document.write(string2 + "<br/>");
// // document.write(string3 + "<br/>");
// // document.write(string4 + "<br/>");
// //
// // document.write(number1 + "<br/>");
// // document.write(number2 + "<br/>");
// // document.write(number3 + "<br/>");
// // document.write(number4 + "<br/>");
// // document.write(number5 + "<br/>");
// // document.write(number6 + "<br/>");
// // document.write(number7 + "<br/>");
// //
// // document.write(boolean1 + "<br/>");
// // document.write(boolean2 + "<br/>");

// <!-- - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.-->
//
// // string1 = "Hello Bohdan";
// // string2 = "Octen Web";
// // string3 = "com.ua";
// // string4 = "Ucraine";
// //
// // number1 = 100;
// // number2 = 1000;
// // number3 = -99900;
// // number4 = 12300;
// // number5 = 3.1400;
// // number6 = 2.700;
// // number7 = 1600;
// //
// // boolean1 = false;
// // boolean2 = true;

// <!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
//
// // console.log(string1);
// // console.log(string2);
// // console.log(string3);
// // console.log(string4);
// //
// // console.log(number1);
// // console.log(number2);
// // console.log(number3);
// // console.log(number4);
// // console.log(number5);
// // console.log(number6);
// // console.log(number7);
// //
// // console.log(boolean1);
// // console.log(boolean2);
//
// // alert(string1);
// // alert(string2);
// // alert(string3);
// // alert(string4);
// //
// // alert(number1);
// // alert(number2);
// // alert(number3);
// // alert(number4);
// // alert(number5);
// // alert(number6);
// // alert(number7);
// //
// // alert(boolean1);
// // alert(boolean2);
//
// // document.write(string1 + "<br/>");
// // document.write(string2 + "<br/>");
// // document.write(string3 + "<br/>");
// // document.write(string4 + "<br/>");
// //
// // document.write(number1 + "<br/>");
// // document.write(number2 + "<br/>");
// // document.write(number3 + "<br/>");
// // document.write(number4 + "<br/>");
// // document.write(number5 + "<br/>");
// // document.write(number6 + "<br/>");
// // document.write(number7 + "<br/>");
// //
// // document.write(boolean1 + "<br/>");
// // document.write(boolean2 + "<br/>");

// <!-- - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.-->
//
// let firstName = prompt("Your first name");
// let lastName = prompt("Your last name");
// let age = prompt("Your age");
//
// <!--Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".-->
//
// console.log(`Welcome ${firstName} ${lastName}, you have ${age} years`);
//
// <!-- - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).-->
//
// let foolString = firstName + lastName + age;
// console.log(foolString);

// <!-- - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.-->
//
// let number1 = +prompt("First number");
// let number2 = +prompt("Second number");
// let number3 = parseInt(prompt("Third number"));
//
// console.log(number1, number2, number3);

// <!-- - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.-->
//
// let number1 = parseInt(prompt("First number"));
// let number2 = parseInt(prompt("Second number"));
// let number3 = parseInt(prompt("Third number"));
// let number4 = parseInt(prompt("Fourth number"));
//
// console.log(number1 + number2 + number3 + number4);

// <!-- - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.-->
//
// let number1 = parseFloat(prompt("First number"));
// let number2 = parseFloat(prompt("Second number"));
// let number3 = parseFloat(prompt("Third number"));
//
//
//
// <!--Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.-->
// let result = number1 + number2 + number3;
// console.log(result);
//
// <!-- - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").Просумувати їх між собою. Результат вивести в консоль.-->
//
// let roundNumber1 = Math.round(number1);
// let roundNumber2 = Math.round(number2);
// let roundNumber3 = Math.round(number3);
//
// console.log(roundNumber1 + roundNumber2 + roundNumber3);

// <!-- - За допомогою prompt() отримати 2 цілих числа.-->
// <!--Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.-->
// <!--За допомогою Math.pow (Google) піднести перше число в степінь другого числа.-->
// <!--Example. Число 1 = 5. Число 2 = 2. Результат = 25-->
//
// let number1 = parseInt(prompt("First number"));
// let number2 = parseInt(prompt("Second number"));
//
// console.log(number1);
// console.log(number2);
//
// let powd = Math.pow(number1, number2);
//
// console.log(powd);

// <!-- - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.-->
// <!--let a = 100; let b = '100'; let c = true;-->
//
// let a = 100;
// let b = '100';
// let c = true;
//
// let typeA = typeof(a);
// let typeB = typeof(b);
// let typeC = typeof(c);
//
// console.log(typeA, typeB, typeC);

// <!-- - Поставет відповідний оператор в виразах що б вийшов відповідний результат.-->
// <!--В однакових виразаї не використовувати однакові оператори!!!-->
//
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 != 10);
// console.log(10 < 10);
// console.log(10 > 10);
// console.log(123 === '123');
// console.log(123 == '123');

// <!--Додатково:-->
// <!-- - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.-->
// console.log(132 > 100 && 45 < 12, "false");
// console.log(34 > 33 && 23 < 90, "t" );
// console.log(99 > 100 && 45 > 12, "f" );
// console.log(132 > 100 || 45 < 12, "t" );
// console.log(111 > 11 || 45 < 111, "t" );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12), "t" );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12), "t" );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ), "f" );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ), "t");
// console.log(!!'-1', "t");
// console.log(!!-1, "t");
// console.log(!!'0', "t");
// console.log(!!'null', "t");
// console.log(!!'undefined', "t");
// console.log(!!(3/'owu'), "f");
// console.log((111 > 11 || 45 < 111) ||  !!'0', "t");
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ), "f");


// // 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// // За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
//
// let str = "Hello";
// let num = 123;
// let flag = true;
// let txt = "true";
//
// let typeStr = typeof(str);
// let typeNum = typeof(num);
// let typeFlag = typeof(flag);
// let typeTxt= typeof(txt);
//
// console.log(typeStr, typeNum, typeFlag, typeTxt);

// // 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
// //     34,
// //         12,
// //         66,
// //         90,
// //         87
// // Старайтесь використовувати різні оператори.
// //     Example: 88 = (16 / 2) * 11
//
// let a1 = 12 * 3 - 4;
// let a2 = 12 / 3 * 3;
// let a3 = 6 * 10 +6;
// let a4 = 900 / 10 + 0;
// let a5 = 100 - 13 -0;
//
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// // 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     let a1 = 5 % 3;
//     let a2 = 3 % 5;
//     let a3 = 5 + '3';
//     let a4 = '5' - 3;
//     let a5 = 75 + 'кг';
//
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// // 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// // Значееня площі зберігати в змінній s.
//
// let height = 23;
// let width = 10;
// let s = height * width;
//
// console.log(s);

// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// //     результат поместите в переменную v.
//
// let p = 3.14;
// let r = 2;
// let r2 = Math.pow(r, 2);
// let h = 10;
// let v = p * r2 * h;
//
// console.log(v);

// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// // Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
//
// let n = 3;
// let m = 4;
// let k = Math.pow(n, 2) + Math.pow(n, 2);
//
// console.log(k);

// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
//
// let str = "Hello World";
//
// document.write(str);
// alert(str);
// console.log(str);

// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
// alert("Bohdan \nLevandivskyi \n26 \nweightlifting");

// // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// //     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// //     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// let str1 = "Who ";
// let str2 = "are ";
// let str3 = "you?";
// let concatenation = str1 + str2 + str3;
//
// document.write(concatenation);

// // 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "205" + "<br/>");
// document.write(str - a + "15" + "<br/>");
// document.write(str * "2" + "40" + "<br/>");
// document.write(str / 2 + "10" + "<br/>");

// // 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"), 3)
// console.log(parseInt("-7.875"), -7)
// console.log(parseInt("435"), 435)
// console.log(parseInt("Вася"), NaN)

// // 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// // 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//
// let s = prompt("Concatinate two numbers");
// let string = parseInt(s);
// console.log(s);
// alert(string);

// // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// // Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
//
// let firstName = prompt("FirstName");
// let secondName = prompt("SecondName");
// let age = prompt("Age");
//
// alert(`Good evening ${firstName} ${secondName}, my congratulations that you are ${age} years old`);

// // 1. Три різних числа вводяться через prompt().
// //     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//
// let first = +prompt("first");
// let second = +prompt("second");
// let third = +prompt("third");
//
// if(first < second && first < third){
//     if (second < third){
//         console.log(first, second, third);
//     } else {
//         console.log(first, third, second);
//     }
// } else if (second < first && second < third){
//     if (first < third){
//         console.log(second, first, third);
//     } else {
//         console.log(second, third, first);
//     }
// } else {
//     if (first < second){
//         console.log(third, first, second);
//     } else {
//         console.log(third, second, first);
//     }
// }

// // 2. Все параматры получаем с клавиатуры!!!!
// //     Имитируем поведение пешехода на перекстке.
// //     Если светофор зеленый - вывести "иди".
// //     Если светофор желтый - вывести "подожди".
// //     Если светофор красный - вывести "стой".
// //     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
//
// let lightColor = prompt("color");
//
// if (lightColor === "green") {
//     console.log("go");
// }else if( lightColor === "yellow"){
//     console.log("wait");
// }else if(lightColor === "red"){
//     console.log("stop")
// } else {
//     console.log("do what you want")
// }

// //     3 Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// // Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// //     Улучшаем предыдущее задание.
// //     Если светофор зеленый и машин нет - вывести "иди".
// //     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// // Если светофор желтый и машины есть - вывести "жди".
// //     Если светофор желтый и машин нет - вывести "все рано жди".
// //     Если светофор красный и машин нет- вывести "стой все рано".
// //     Если светофор красный - и машины есть вывести "стой и жди".
// //     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let isRoadClear = confirm("Is cars in the road?");
//
//     let lightColor = prompt("color");
// if (lightColor === "green" && !isRoadClear) {
//     console.log("go");
// }else if (lightColor === "green" && isRoadClear){
//     console.log("wait when cars go");
// }else if( lightColor === "yellow" && !isRoadClear){
//     console.log("wait anyway");
// }else if( lightColor === "yellow" && isRoadClear) {
//     console.log("wait");
// }else if(lightColor === "red" && isRoadClear){
//     console.log("stop");
// }else if(lightColor === "red" && !isRoadClear){
//     console.log("stop anyway");
// } else {
//     console.log("do what you want")
// }
