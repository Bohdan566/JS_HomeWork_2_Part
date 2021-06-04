// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

// let elementById = document.getElementById("main_header");
// elementById.style.color = "green";


// b) робить шириниу елементу ul 400px

// let elementsByTagName = document.getElementsByTagName("ul");
//
// for (const element of elementsByTagName) {
//     element.style.width = "400px";
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName("linkList");
//
// for (const element of elementsByClassName) {
//     element.style.width = "50%";
// }


// d) отримує текст який зберігається в елементі з класом listElement2

// let elementsByClassName = document.getElementsByClassName("listElement2");
//
// for (const e of elementsByClassName) {
//     console.log(e.innerText);
// }


// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagName = document.getElementsByTagName("li");
//
// for (const e of elementsByTagName) {
//     e.style.backgroundColor = "blue";
// }


// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsByTagName = document.getElementsByTagName("a");
// for (const e of elementsByTagName) {
//     e.classList.add("anchor");
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elementsByTagName = document.getElementsByTagName("a");
//
// for (const e of elementsByTagName) {
//     if(e.innerText === 'link3'){
//         e.style.fontSize = "40px";
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementsByTagName = document.getElementsByTagName("a");
//
// for (const e of elementsByTagName) {
//     let str = `element_${e.innerText}`
//     e.classList.add(str);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let elementsByClassName = document.getElementsByClassName("sub-header");
//
// let color = prompt("Select background");
//
// for (const e of elementsByClassName) {
//     e.style.backgroundColor = color;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let elementsByClassName = document.getElementsByClassName("sub-header");
//
// let color = prompt("Select color");
//
// for (const element of elementsByClassName) {
//     if(element.innerText === "content 2 segment")
//     element.style.color = color;
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let elementsByClassName = document.getElementsByClassName("content_1");
// let text = prompt("Write some text");
// for (const e of elementsByClassName) {
//     e.innerHTML = `<p>${text}</p>`;
// }

// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName("p");
//
// for (const e of elementsByTagName) {
//     e.style.padding = "20px";
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let elementsByClassName = document.getElementsByClassName("text2");
//
// for (const e of elementsByClassName) {
//     e.innerText = "mon-year";
// }

//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

// for (const rule of rules) {
//     let htmlDivElement = document.createElement("div");
//     htmlDivElement.innerHTML = `<h1>${rule.title}</h1><p>${rule.body}</p>`;
//     document.body.appendChild(htmlDivElement);
// }

// ===========================================================================

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// let usersWithCities = [];
//
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         let address = city;
//
//         if(user.id === city.user_id){
//             usersWithCities.push(user);
//             user.address = city;
//             console.log(address);
//         }
//     }
// }
//
// console.log(usersWithCities);


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         ];
