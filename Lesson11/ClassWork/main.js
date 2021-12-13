//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


let favoritesKey = 'favorites';
localStorage.setItem(favoritesKey, JSON.stringify([]));
let container = document.getElementById('container');

for (const user of users) {

    let div = document.createElement('div');
    div.className = 'user';
    let userInfo = document.createElement('h3');
    userInfo.innerText = `${user.name} - ${user.age} - ${user.status}`;
    let button = document.createElement('button');
    button.innerText = "Add to favorites";
    button.onclick = () => {
        let element = localStorage.getItem(favoritesKey);
        let favorites = JSON.parse(element);
        favorites.push(user);
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));
        button.disabled = true;
    }
    div.appendChild(userInfo);
    div.appendChild(button);
    container.appendChild(div);
}
