//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.setAttribute('id','button');
// button.innerText = "Click to hide text";
// document.body.appendChild(button);
//
// let text = document.createElement('div');
// text.setAttribute('id', 'text');
// text.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, voluptatibus."
// document.body.appendChild(text);
//
// button.onclick = () => {
//     text.style.display = "none";
//     button.style.display = "none";
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button = document.getElementById('button');
//
// button.onclick = () => {
// let age  =document.getElementById('age').value;
//     if (!age){
//         document.write('Enter your age');
//     } else if (age >= 18) {
//         document.write('Your age is 18+');
//     } else if (age <= 18) {
//         document.write('Your age is less than 18');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.getElementById('menu');
//
// let button = document.getElementById('hideButton');
//
// button.onclick = () =>{
//     menu.classList.toggle('hidden');
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'Lionel', body: 'Plays football'},
    {title: 'Xavi', body: 'Plays football'},
    {title: 'Gavi', body: 'Plays football'},
    {title: 'Fati', body: 'Plays football'},
];

for (const comment of comments) {
    let div = document.createElement('div');
    let name = document.createElement('h2');
    name.innerText = comment.title;
    name.classList.add('block');
    let body = document.createElement('p');
    body.innerText = comment.body;
    let button = document.createElement('button');
    button.innerText = 'Hide/Show';

    div.append(name, body, button);
    document.body.appendChild(div);
    button.onclick = () =>{
        body.classList.toggle('hidden');
    }

}

