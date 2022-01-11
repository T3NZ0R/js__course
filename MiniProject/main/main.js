let container = document.createElement('div');
container.setAttribute('class', 'container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(users => {
        for (const user of users) {
            let userBlock = document.createElement('div');
            userBlock.setAttribute('class', 'user');

            let userId = document.createElement('h3');
            userId.innerText = `ID: ${user.id}`;

            let userName = document.createElement('h4');
            userName.innerText = `Name: ${user.name}`;

            let userButton = document.createElement('button');
            userButton.innerHTML = `<a href="../user/user-details.html">Show details</a>`;

            userButton.onclick = () => {
                let idUser = 'user_id';
                localStorage.setItem(idUser, `${user.id}`);
                    }

            userBlock.append(userId, userName, userButton);
            container.append(userBlock);
        }
    });

document.body.append(container);
