//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let num1 = +prompt("Number?");
// let num2 = +prompt("Number?");
// let num3 = +prompt("Number?");
// //
// let min = (arg1, arg2, arg3) => {
//     if (arg1 < arg2 && arg1 < arg3) {
//         console.log(arg1);
//     }
//     else if (arg2 < arg1 && arg2 < arg3) {
//         console.log(arg2);
//     }
//     else{
//         console.log(arg3);
//     }
// }
//
// min(num1,num2,num3);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let max = (arg1, arg2, arg3) => {
//     if (arg1 > arg2 && arg1 > arg3) {
//         console.log(arg1);
//     }
//     else if (arg2 > arg1 && arg2 > arg3) {
//         console.log(arg2);
//     }
//     else{
//         console.log(arg3);
//     }
// }
//
// max(num1,num2,num3);


// - створити функцію яка повертає найбільше число з масиву

//let arr = [2,4,32,4,65,3,56,2,98,53,43];
//
// let max = (arr) => {
//     let result = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > result){
//             result = arr[i];
//         }
//     }
//
//     return result;
// }
//
// console.log(max(arr));

// - створити функцію яка повертає найменьше число з масиву


// let min = (arr) => {
//     let result = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < result){
//             result = arr[i];
//         }
//     }
//     return result;
// }
//
// console.log(min(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sum = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result+=arr[i];
//     }
//     return result;
// }
//
// console.log(sum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let avr = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result+=arr[i];
//     }
//     return (result / arr.length).toFixed(1);
// }
//
// console.log(avr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...arguments) =>{
//     let resultMin = arguments[0];
//     let resultMax = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if(arguments[i] < resultMin){
//             resultMin = arguments[i];
//         }
//         if(arguments[i] > resultMax){
//             resultMax = arguments[i];
//         }
//     }
//     console.log(resultMax);
//     return resultMin;
// }
//
// console.log(minMax(21,45,65,78,54,45,76,6,43,76,67,54));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arr = [];
//
// let randomize = (arr) => {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//         console.log(arr[i]);
//     }
// }
// randomize(arr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// let randomize = (arr, limit) => {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//         console.log(arr[i]);
//     }
// }
//
// let arr = [];
// let max = +prompt("Max value?");
// randomize(arr, max);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [2, 4, 6, 7, 4, 3, 9];
//
// let reverse = (arr) => {
//     let temp = [];
//     let j = 0;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         temp[j] = arr[i];
//         j++;
//     }
//     return temp;
// }
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// arr = reverse(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }





