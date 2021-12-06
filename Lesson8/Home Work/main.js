//- Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
//     -- отримує текст з блоку з id "rules"
//     -- замініть текст параграфа з id 'content' на будь-який інший
//     -- замініть текст параграфа з id 'rules' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний

//     -- отримує текст з параграфа з id "content"

//let contentText = document.getElementById('content').innerText;
//console.log(contentText);

//     -- отримує текст з блоку з id "rules"

// let rulesText = document.getElementById('rules').innerText;
// console.log(rulesText);

//     -- замініть текст параграфа з id 'content' на будь-який інший

// let content = document.getElementById('content');
// content.innerText = 'Hello Okten';

//     -- замініть текст параграфа з id 'rules' на будь-який інший

// let rules = document.getElementById('rules');
// rules.innerText = 'Hello Okten';


//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій

// let elements = document.body.children;
//
// for (const element of elements) {
//     element.style.background = 'red';
//     element.style.color = 'blue';
// }

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let rules = document.getElementById('rules');
//
// console.log(rules.classList);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний

let elements = document.getElementsByClassName('fc_rules');

for (const element of elements) {
    element.style.color = 'red';
}