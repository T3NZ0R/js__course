//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let id = document.getElementById("main_header");
// console.log(id);
// id.innerText = "September-2021";
// console.log(id.innerText);


//     b) робить шириниу елементу ul 400px
// let ulElement = document.getElementsByTagName('ul');
// console.log(ulElement);
//
// for (const item of ulElement) {
//     item.style.background = 'silver';
//     item.style.width = '400px';
// }


//     c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkList = document.getElementsByClassName('linkList');
//
// console.log(linkList);
//
// for (const item of linkList) {
//     item.style.width = '50%';
//     item.style.background = 'green';
//}

//     d) отримує текст який зберігається в елементі з класом listElement2

// let listElement2 = document.getElementsByClassName('listElement2');
//
// //console.log(listElement2);
//
// let listElement2Text;
//
// for (const item of listElement2) {
//     listElement2Text = item.innerText;
// }
//
// console.log(listElement2Text);

//     e) отримує всі елементи li та змінює ім колір фону на сірий

// let liList = document.getElementsByTagName('li');
//
// for (const item of liList) {
//     item.style.background = 'silver';
//     item.style.border = 'solid black 1px';
// }

//     f) отримує всі елементи 'a' та додає їм клас anchor

// let aList = document.getElementsByTagName('a');

// console.log(aList);
//
// for (const item of aList) {
//     item.classList.toggle('anchor');
// }
//
// console.log(aList);

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (const item of aList) {
//     if (item.innerText.includes('link3')) {
//         item.style.fontSize = '40px';
//     }
// }

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (const item of aList) {
//     item.classList.toggle('element_' + item.innerText);
//}

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()


// let subHeaderElements = document.getElementsByClassName('sub-header');
//
// for (const item of subHeaderElements) {
//     item.style.background = prompt('Enter color');
// }

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// for (const item of subHeaderElements) {
//     if (item.innerText === 'content 2 segment') {
//         item.style.background = prompt('Enter color');
//     }
// }

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content = document.getElementsByClassName('content_1');
//
// for (const item of content) {
//     item.innerText = prompt('Enter text');
// }

//     l) отримати елементи p та змінити їм padding на 20px

// let pList = document.getElementsByTagName('p');

// for (const item of pList) {
//     item.style.padding = '20px';
// }

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text = document.getElementsByClassName('text2');

for (const item of text) {
    item.innerText = 'September - 2021';
}


