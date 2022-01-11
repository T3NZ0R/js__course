let container = document.createElement('div');
container.setAttribute('class', 'container');

let idUser = 'user_id';

let userItem = localStorage.getItem(idUser);

console.log(userItem);


fetch(`https://jsonplaceholder.typicode.com/users/${userItem}`)
    .then(response => {
        return response.json();
    })
    .then(details => {
        let userBlock = document.createElement('div');
        userBlock.className = 'userBlock';

        let postWrap = document.createElement('div');
        postWrap.className = 'postWrap';

        let id = document.createElement('h3');
        id.innerText = `ID: ${details.id}`;

        let name = document.createElement('h3');
        name.innerText = `Fullname: ${details.name}`;

        let username = document.createElement('h3');
        username.innerText = `Username: ${details.username}`;

        let email = document.createElement('h3');
        email.innerText = `Email: ${details.email}`;

        let street = document.createElement('h3');
        street.innerText = `Street: ${details.address.street}`;

        let suite = document.createElement('h3');
        suite.innerText = `Suite: ${details.address.suite}`;

        let city = document.createElement('h3');
        city.innerText = `City: ${details.address.city}`;

        let zipcode = document.createElement('h3');
        zipcode.innerText = `Zipcode: ${details.address.zipcode}`;

        let latitude = document.createElement('h3');
        latitude.innerText = `Latitude: ${details.address.geo.lat}`;

        let longitude = document.createElement('h3');
        longitude.innerText = `Longitude: ${details.address.geo.lng}`;

        let phone = document.createElement('h3');
        phone.innerText = `Phone: ${details.phone}`;

        let website = document.createElement('h3');
        website.innerText = `Website: ${details.website}`;

        let companyName = document.createElement('h3');
        companyName.innerText = `Name: ${details.company.name}`;

        let companyCatchPhrase = document.createElement('h3');
        companyCatchPhrase.innerText = `Catch phrase: ${details.company.catchPhrase}`;

        let companyBs = document.createElement('h3');
        companyBs.innerText = `BS: ${details.company.bs}`;

        let privateBlock = document.createElement('div');
        privateBlock.className = "privatBlock";
        privateBlock.append(id, name, username, email, phone, website)

        let geoBlock = document.createElement('div');
        geoBlock.className = "geoBlock";
        geoBlock.append(latitude, longitude);

        let addressBlock = document.createElement('div');
        addressBlock.innerHTML = " <h2>Address</h2> ";
        addressBlock.className = "addressBlock";
        addressBlock.append(street, suite, city, zipcode, geoBlock);

        let companyBlock = document.createElement('div');
        companyBlock.innerHTML = " <h2>Company</h2> ";
        companyBlock.className = "companyBlock";
        companyBlock.append(companyName, companyCatchPhrase, companyBs);

        let postButton = document.createElement('button');
        postButton.innerText = 'POST OF CURRENT USER';
        postButton.className = "postButton";


        postButton.onclick = () => {

            fetch(`https://jsonplaceholder.typicode.com/user/${details.id}/posts`)
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

                        let postDetailsButton = document.createElement('button');
                        postDetailsButton.innerHTML = '<a href="../post/post-details.html"> show post details</a>';

                        let help = document.createElement('div');
                        help.className = 'help';
                        help.append(postDetailsButton);

                        let info = document.createElement('div');
                        info.className = 'info';
                        info.append(postId, postTitle);

                        postDetailsButton.onclick = () => {
                            let idPost = 'post_id';
                            localStorage.setItem(idPost, `${post.id}`);
                        }

                        postBlock.append(info, help);
                        postWrap.append(postBlock);
                    }
                });
        }

        userBlock.append(privateBlock, addressBlock, companyBlock, postButton);
        container.append(userBlock, postWrap);
    });

document.body.append(container);