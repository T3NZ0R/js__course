//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function output(){
//     if(arguments.length === 1){
//         console.log(arguments[0]);
//     }
//     else if(arguments.length === 2){
//         let words = arguments[0] + ' ' + arguments[1];
//         console.log(words);
//     }
// }
//
// output("one", "two");

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let arr1 = [32, 54, 67, 34];
// let arr2 = [30, 55, 69, 35];
//
// function sumArr(arr1, arr2){
//     let temp = [];
//     for (let i = 0; i < arr1.length; i++) {
//         temp[i] = arr1[i] + arr2[i];
//     }
//     return temp;
// }
//
// let result = [];
//
// result = sumArr(arr1, arr2);
//
// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let result = [];
//
// function createArray(arr){
//     let temp = [];
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (const arrKey in arr[i]) {
//             temp[j] = arrKey;
//             j++;
//         }
//     }
//     return temp;
// }
//
// result = createArray(arr);
//
// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let result = [];

function createArray(arr){
    let temp = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        for (const arrKey in arr[i]) {
            temp[j] = arr[i][arrKey];
            j++;
        }
    }
    return temp;
}

result = createArray(arr);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}