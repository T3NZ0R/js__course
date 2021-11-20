//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let width = +prompt("Width?");
// let height = +prompt("Height?");
//
// function square(width, height){
//     return width * height;
// }
//
// let s = square(width, height);
//
// console.log(s);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let r = +prompt("Radius?");
//
// function circleSquare(r){
//  const PI = 3.14;
//  return (PI * Math.pow(r, 2)).toFixed(1);
// }
//
// let s = circleSquare(r);
//
// console.log(s);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function volume(height, r){
//      const PI = 3.14;
//     return height * (PI * Math.pow(r, 2)).toFixed(1);
// }
//
// let height = +prompt("Height?");
// let r = +prompt("Radius?");
//
// let v =  volume(height, r);
//
// console.log(v);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,2,3,4,5,6,7,8,9,10];
//
// function output(arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//
// output(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum cupiditate dolorem doloremque enim fugiat ipsa laboriosam molestias quasi similique."
//
// function paragraph(t){
//     document.write(`<p>${t}</p>`);
// }
//
// paragraph(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let name = "okten";
//
// function list(item){
//     document.write(`<ul>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`</ul>`);
// }
//
// list(name);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let name = "okten";
// let num = +prompt('List length?');
//
// function list(item, length){
//     document.write(`<ul>`);
//     for (let i = 0; i < length; i++) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// list(name, num);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list(arr){
//     document.write(`<ol>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ol>`);
// }
//
// let arr = [1, "one", true];
// list(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: "Vitalik", age: 18},
    {id: 2, name: "Mike", age: 17},
    {id: 3, name: "Tom", age: 14},
]

function usersBlocks(id, name, age) {
    document.write(`<div class="block">`);
    document.write(`<h3> ${id} - ${name} is ${age}</h3>`)
    document.write(`</div>`);
}

for (let i = 0; i < users.length; i++) {
    usersBlocks(users[i]["id"], users[i]["name"], users[i]["age"]);
}














