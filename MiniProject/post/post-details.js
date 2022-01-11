let container = document.createElement('div');
container.setAttribute('class', 'container');

let idPost = 'post_id';

let userItem = localStorage.getItem(idPost);

console.log(userItem);

fetch(`https://jsonplaceholder.typicode.com/posts/${userItem}`)
    .then(response => {
        return response.json();
    })
    .then(details => {
        let postBlock = document.createElement('div');
        postBlock.setAttribute('class', 'post');

        let postId = document.createElement('h3');
        postId.innerText = `ID: ${details.id}`;

        let postTitle = document.createElement('h4');
        postTitle.innerText = `Title: ${details.title}`;

        let postBody = document.createElement('p');
        postBody.innerText = `Body: ${details.body}`;

        let commentButton = document.createElement('button');
        commentButton.className = "commentButton";
        commentButton.innerText = 'comments of current post';

        let commentWrap = document.createElement('div');
        commentWrap.className = ("commentWrap");

        commentButton.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${userItem}/comments`)
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
                        commentWrap.append(commentBlock);
                    }

                });


        }

        postBlock.append(postId, postTitle, postBody, commentButton);
        container.append(postBlock, commentWrap);


    });

document.body.append(container);