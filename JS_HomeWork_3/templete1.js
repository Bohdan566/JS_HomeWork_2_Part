// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

// let elementById = document.getElementById("content");
// console.log(elementById.innerText);

// b) отримує текст з блоку з id "rules"

// let elementById = document.getElementById("rules");
// console.log(elementById.innerText);

// c) замініть текст параграфа з id 'content' на будь-який інший

// let elementById = document.getElementById("content");
//
// let text = "Hello Bohdan";
//
// elementById.innerText = text;

// d) замініть текст параграфа з id 'rules' на будь-який інший

// let elementById = document.getElementById("rules");
//
// let text = "Hello my name is Bohdan, I am learning do my have my courses in OK10 school and I also study English language to become as a strong developer";
//
// elementById.innerText = text;

// e) змініть кожному елементу колір фону на червоний

// let elementByIdContent = document.getElementById("content");
// let elementByIdRules = document.getElementById("rules");
// let elementsByTagName = document.getElementsByTagName("ul");
//
// elementByIdContent.style.backgroundColor = "red";
// elementByIdRules.style.backgroundColor = "red";
//
// for (const element of elementsByTagName) {
//     element.style.backgroundColor = "red";
// }


// f) змініть кожному елементу колір тексту на синій

// let elementByIdContent = document.getElementById("content");
// let elementByIdRules = document.getElementById("rules");
// let elementsByTagName = document.getElementsByTagName("ul");
//
// elementByIdContent.style.color = "blue";
// elementByIdRules.style.color = "blue";
//
// for (const element of elementsByTagName) {
//     element.style.color = "blue";
// }

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

// let elementByIdRules = document.getElementById("rules");
//
// console.log(elementByIdRules.classList.value);

// h) отримати всі елементи з класом fc_rules

// let elementsByClassName = document.getElementsByClassName("fc_rules");
//
// for (const element of elementsByClassName) {
//     console.log(element);
// }


// i) поміняти колір тексту у всіх елементів fc_rules на червоний

// let elementsByClassName = document.getElementsByClassName("fc_rules");
//
// for (const element of elementsByClassName) {
//     element.style.color = "red";
// }

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


// for (const user of users) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.innerHTML = `
//     <div>
//     Name - ${user.name} Age - ${user.age} Status - ${user.status}
//     </div>
//     <div>
//     <p>City - ${user.address.city}</p>
//     <p>Country - ${user.address.country}</p>
//     <p>Street - ${user.address.street}</p>
//     <p>HouseNumber - ${user.address.houseNumber}</p>
//     </div>
//     <br>
//     `;
//
//     document.body.appendChild(htmlDivElement);
// }
