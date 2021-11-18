//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ['one', 'two', 'three', 'four', 'five'];
// let arr3 = [true, 'hello', 45, false, 'world'];
//
// for (let i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
//     console.log(arr2[i]);
//     console.log(arr3[i]);
// }


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//

// let arr = [];
//
// for (let i = 0; i<10;i++){
//     arr[i]=i+1;
//     console.log(arr[i]);
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i=0; i<10; i++){
//     document.write(`<div>hello world<\div>`);
// }

// for (let i=0; i<10; i++){
//     document.write(`<div> hello world ${i+1} <\div>`);
// }

// let i = 0;

// while (i<20){
//     document.write(`<h1> hello world <\h1>`);
//     i++;
// }

// while (i<20){
//     document.write(`<h1> hello world ${i+1} <\h1>`);
//     i++;
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [];
// for(let i = 0; i<10; i++){
//     arr[i]=Math.round(Math.random() * 100);
// }
//
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let temp = [123, 'eleven', true, 321, 'ten', false];
// let arr = [];

// for(let i =0; i<10; i++){
//     arr[i]=temp[Math.round(Math.random() * 5)];
//     console.log(arr[i]);
// }

// for (let i = 0; i < 10; i++) {
//     arr[i] = temp[Math.round(Math.random() * 5)];
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i]);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     arr[i] = temp[Math.round(Math.random() * 5)];
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     arr[i] = temp[Math.round(Math.random() * 5)];
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
// }


//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let temp = [123, 'eleven', true, 321, 'ten', false];
// let arr = [];
//
// for (let i = 0; i < 10; i++) {
//     arr[i] = temp[Math.round(Math.random() * 5)];
//     if (i > 0) {
//         while (arr[i] === arr[i-1]) {
//             arr[i] = temp[Math.round(Math.random() * 5)];
//         }
//     }
//     console.log(arr[i]);
// }


// for (let i = 0; i < 10; i++) {
//     document.write(`<div> ${i} <\div>`);
//     console.log(i)
// }

// for (let i = 0; i < 100; i++) {
//     document.write(`<div> ${i} <\div>`);
//     console.log(i)
// }

// for (let i = 0; i < 100; i+=2) {
//     document.write(`<div> ${i} <\div>`);
//     console.log(i)
// }

// for (let i = 0; i <= 100; i++) {
//     if(i%2 === 0){
//         document.write(`<div> ${i} <\div>`);
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if(i%2 === 1){
//         document.write(`<div> ${i} <\div>`);
//         console.log(i)
//     }
// }