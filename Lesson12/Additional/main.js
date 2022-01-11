// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

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

            let userUsername = document.createElement('h4');
            userUsername.innerText = `Username: ${user.username}`;

            let userEmail = document.createElement('h4');
            userEmail.innerText = `Email: ${user.email}`;

            let userButton = document.createElement('button');
            userButton.innerText = 'Show user`s posts';

            userButton.onclick = () => {

                fetch(`https://jsonplaceholder.typicode.com/user/${user.id}/posts`)
                    .then(response => {
                        return response.json();
                    })
                    .then(posts => {
                        for (const post of posts) {

                            let postBlock = document.createElement('div');
                            postBlock.setAttribute('class', 'post');

                            let postId = document.createElement('h3');
                            postId.innerText = `ID: ${post.id}`;

                            let postTitle = document.createElement('h4');
                            postTitle.innerText = `Title: ${post.title}`;

                            let postBody = document.createElement('p');
                            postBody.innerText = `Body: ${post.body}`;

                            let postButton = document.createElement('button');
                            postButton.innerText = 'Show post`s comments';

                            postButton.onclick = () => {

                                fetch(`https://jsonplaceholder.typicode.com/post/${post.id}/comments`)
                                    .then(response => {
                                        return response.json();
                                    })
                                    .then(comments => {
                                        for (const comment of comments) {

                                            let commentBlock = document.createElement('div');
                                            commentBlock.setAttribute('class', 'comment');

                                            let commentId = document.createElement('h3');
                                            commentId.innerText = `ID: ${comment.id}`;

                                            let commentName = document.createElement('h4');
                                            commentName.innerText = `Name: ${comment.name}`;

                                            let commentEmail = document.createElement('h4');
                                            commentEmail.innerText = `Email: ${comment.email}`;

                                            let commentBody = document.createElement('p');
                                            commentBody.innerText = `Body: ${comment.body}`;

                                            commentBlock.append(commentId, commentName, commentEmail, commentBody)
                                            postBlock.append(commentBlock);

                                        }
                                    });
                            }
                            postBlock.append(postId, postTitle, postBody, postButton);
                            userBlock.append(postBlock);
                        }
                    });
            }
            userBlock.append(userId, userName, userUsername, userEmail, userButton);
            container.append(userBlock);
        }
    });

document.body.append(container);

/*
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
        "lat": "-68.6102",
            "lng": "-47.0653"
    }
},
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
}
}*/
