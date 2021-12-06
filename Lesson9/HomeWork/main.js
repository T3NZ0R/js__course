//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

// let block = document.createElement('div');
// block.innerText = 'Hello Okten';
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
// document.body.appendChild(block);
// document.body.appendChild(block.cloneNode(true));
//
// let style = document.getElementsByClassName('wrap');
//
// for (const item of style) {
//     item.style.fontSize = '40px';
//     item.style.color = 'white';
//     item.style.background = 'blue';
// }

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let menu = document.getElementsByClassName('menu');
//
// let info = ['Main','Products','About us','Contacts'];
// let item = document.createElement('li');
//
// for (let i = 0; i < info.length; i++){
// item.innerText = info[i];
// menu[0].appendChild(item.cloneNode(true));
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let block = document.createElement('div');
// block.classList.add('block');
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     block.innerText = `${coursesAndDurationArray[i].title} -  ${coursesAndDurationArray[i].monthDuration}`
//     document.body.appendChild(block.cloneNode(true));
// }
//
// let wrap = document.getElementsByClassName('block');
//
// for (const item of wrap) {
//     item.style.background = 'coral';
//     item.style.border = 'black solid 5px';
//     item.style.margin = '20px';
// }


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    h1.innerText = `${coursesAndDurationArray[i].title}`;
    p.innerText = `${coursesAndDurationArray[i].monthDuration}`;
    div.appendChild(h1.cloneNode(true));
    div.appendChild(p.cloneNode(true));
    document.body.appendChild(div.cloneNode(true));
}ф
