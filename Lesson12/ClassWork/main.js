//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let container = document.getElementsByClassName('container');
let i = 1;
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        for (const post of posts) {
            if (post.userId === i) {
                let postItem = document.createElement('div');
                postItem.setAttribute('class', 'post');
                let postId = document.createElement('h3');
                postId.innerText = `${post.userId}`;
                let title = document.createElement('h4');
                title.innerText = post.title;
                let body = document.createElement('p');
                body.innerText = post.body;
                let button = document.createElement('button');
                button.innerText = "Show";

                button.onclick = () => {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => {
                            return response.json();
                        })
                        .then(comments => {
                            let commentsBlock = document.createElement('div');
                            for (const comment of comments) {
                                if(post.userId === comment.userId){
                                    let commentWrap = document.createElement("div");
                                    commentWrap.setAttribute('class', 'comment');
                                    let commentId = document.createElement('h3');
                                    commentId.innerText = `ID: ${comment.id}`;
                                    let commentTitle = document.createElement('h4');
                                    commentTitle.innerText = `Title: ${comment.title}`;
                                    let commentBody = document.createElement('p');
                                    commentBody.innerText = `Body: ${comment.body}`;
                                    commentWrap.append(commentId,commentTitle,commentBody);
                                    commentsBlock.append(commentWrap);
                                }
                                    }
                            postItem.append(commentsBlock);
                        });

                }
                postItem.append(postId, title, body, button);
                for (const item of container) {
                    item.append(postItem);
                }
                i++;
            }
        }
    });

