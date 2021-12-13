

let favoritesUsers = JSON.parse(localStorage.getItem('favorites'));
let container = document.getElementById('container');

for (const user of favoritesUsers) {
    let div = document.createElement('div');
    div.className = 'user';
    let userInfo = document.createElement('h3');
    userInfo.innerText = `${user.name} - ${user.age} - ${user.status}`;
    div.appendChild(userInfo);
    container.appendChild(div);
}