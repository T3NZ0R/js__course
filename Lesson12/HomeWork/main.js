//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let container = document.getElementsByClassName('container');
//
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(posts => {
//         for (const post of posts) {
//             let postItem = document.createElement('div');
//             postItem.setAttribute('class', 'post');
//             let title = document.createElement('h3');
//             title.innerText = post.title;
//             let body = document.createElement('p');
//             body.innerText = post.body;
//             postItem.append(title, body);
//             for (const item of container) {
//                 item.append(postItem);
//             }
//         }
//     });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        return response.json();
    })
    .then(comments => {
        for (const comment of comments) {
            let commentItem = document.createElement('div');
            commentItem.setAttribute('class', 'comment');
            let id = document.createElement('h3');
            id.innerText = `ID: ${comment.id}`;
            let name = document.createElement('h4');
            name.innerText = `Name: ${comment.name}`;
            let email = document.createElement('h4');
            email.innerText = `Email: ${comment.email}`;
            let body = document.createElement('p');
            body.innerText = comment.body;
            commentItem.append(id, name, email, body);
            for (const item of container) {
                item.append(commentItem);
            }
        }
    });