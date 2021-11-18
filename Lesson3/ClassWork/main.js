//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//let i = 0;
// 1. перебрати його циклом while

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// 2. перебрати його циклом for

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// while (i < arr.length) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом


// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// while (i < arr.length) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = "okten";
//     }
//     console.log(arr[i]);
//     i++;
// }


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = "okten";
//     }
//     console.log(arr[i]);
// }

// 8. вивести масив в зворотньому порядку.

// i=arr.length-1;
//
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//i = arr.length-1;

// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }


// for (let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// for (let i = arr.length-1; i >= 0; i--) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
// }


// while (i >= 0) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
//     i--;
// }


// for (let i = arr.length-1; i >= 0; i--) {
//     if (i % 2 === 1) {
//         console.log(arr[i]);
//     }
// }


// while (i >=0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--;
// }


// for (let i = arr.length-1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }


// while (i >=0) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = "okten";
//     }
//     console.log(arr[i]);
//     i--;
// }


// for (let i = arr.length-1; i >= 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = "okten";
//     }
//     console.log(arr[i]);
// }


// document.write(`<ul>`);
// for (let i = 0; i < arr.length; i++) {
//     document.write(`<li>${arr[i]}</li>`);
//     console.log(arr[i]);
// }
// document.write(`</ul>`);


// let info = [
//     {
//         name: "Vitalii", surname: "Shtark", age: 18, info: "ukrainian",
//         img: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Audi_A7_Sportback_Genf_2018.jpg/1200px-Audi_A7_Sportback_Genf_2018.jpg" alt="audi">`
//     },
//     {
//         name: "Vitalii", surname: "Shtark", age: 18, info: "ukrainian",
//         img: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Audi_A7_Sportback_Genf_2018.jpg/1200px-Audi_A7_Sportback_Genf_2018.jpg" alt="audi">`
//     },
//     {
//         name: "Vitalii", surname: "Shtark", age: 18, info: "ukrainian",
//         img: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Audi_A7_Sportback_Genf_2018.jpg/1200px-Audi_A7_Sportback_Genf_2018.jpg" alt="audi">`
//     },
// ];

// for (let i = 0; i < info.length; i++) {
//     document.write(`<div>`);
//     for (const infoKey in info[i]) {
//         document.write(info[i][infoKey] + ' ');
//     }
//     document.write(`</div>`);
// }

// for (let i = 0; i < info.length; i++) {
//     document.write(`<div>`);
//     document.write(`  <h2>${info[i]["name"]} ${info[i]["surname"]} age is - ${info[i]["age"]}</h2>
//     <p>${info[i]["info"]}</p>
//     ${info[i]["img"]}`);
//     document.write(`</div>`);
// }


// document.write(`<div style="background:blue;">`);
//     for (let i = 0; i < info.length; i++) {
//     document.write(`<div style="background:aqua;">`);
//     document.write(`  <h2>${info[i]["name"]} ${info[i]["surname"]} age is - ${info[i]["age"]}</h2>
//     <p>${info[i]["info"]}</p>
//     ${info[i]["img"]}`);
//     document.write(`</div>`);
// }
// document.write(`</div>`);

// let cards = [
//     {
//         title: "Audi", price: 300,
//         img: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Audi_A7_Sportback_Genf_2018.jpg/1200px-Audi_A7_Sportback_Genf_2018.jpg" alt="audi">`
//     },
//     {
//         title: "Audi-2", price: 700,
//         img: `<img src="https://cdn0.riastatic.com/photosnew/auto/photo/audi_rs7__414362240bx.jpg" alt="audi">`
//     },
// ];
//
// document.write(`<div>`);
// for (let i = 0; i < cards.length; i++) {
//     document.write(`<div class="product-card">`);
//     document.write(`<h3 class="product-title">${cards[i]["title"]}. Price - ${cards[i]["price"]}</h3>
// ${cards[i]["img"]}`)
//     document.write(`</div>`);
// }
// document.write(`</div>`);



// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`);
// for (let i = 0; i < listOfItems.length; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`);
//     console.log(listOfItems[i]);
// }
// document.write(`</ul>`);



// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

// for (let i = 0; i < simpsons.length; i++) {
//     if(i === simpsons.length-1){
//         document.write(`<div class="block">`);
//         document.write(`<h3>${simpsons[i]["name"]} ${simpsons[i]["surname"]}</h3>
//      <h4>Вік: ${simpsons[i]["age"]} рік</h4>
//      <div class="info">${simpsons[i]["info"]}</div>
//     <img src="${simpsons[i]["photo"]}" alt="simpson">`);
//         document.write(`</div>`);
//     }
//     else {
//         document.write(`<div class="block">`);
//         document.write(`<h3>${simpsons[i]["name"]} ${simpsons[i]["surname"]}</h3>
//      <h4>Вік: ${simpsons[i]["age"]} років</h4>
//      <div class="info">${simpsons[i]["info"]}</div>
//     <img src="${simpsons[i]["photo"]}" alt="simpson">`);
//         document.write(`</div>`);
//     }
// }

// for (let i = 0; i < simpsons.length; i++) {
//     document.write(`<div class="block">`);
//     document.write(`  <h2>${simpsons[i]["name"]} ${simpsons[i]["surname"]} age is - ${simpsons[i]["age"]}</h2>
//     <p>${simpsons[i]["info"]}</p>
//     <img src="${simpsons[i]["photo"]}" alt="simpson character">
//     `);
//     document.write(`</div>`);
// }

let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="cards">`);
for (let i = 0; i < products.length; i++) {
    document.write(`<div class="product-card">`);
    document.write(`<h3 class="product-title"><div>${products[i]["title"]}</div> Price - ${products[i]["price"]}</h3>
<img src="${products[i]["image"]}" alt="products item">
`);
    document.write(`</div>`);
}
document.write(`</div>`);

