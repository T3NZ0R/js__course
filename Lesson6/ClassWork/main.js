//- Дано список імен.
//  let n1 = 'Harry..Potter';
//  let n2 = 'Ron---Whisley';
//  let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let normalize = (str) =>{
//  let temp = str.replaceAll('.', " ").replaceAll('_', " ").replaceAll('-', " ");
//  temp = temp.split(" ");
//  let result = '';
//  for (let i =0; i<temp.length; i++){
//   if(temp[i].length>0){
//    result = result.concat(' ', temp[i]);
//   }
//  }
//  return result;
// }
// console.log(normalize(n1));
// console.log(normalize(n2));
// console.log(normalize(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr=[];
//
// let randomize = (arr) => {
//     for (let i = 0; i < 10; i++) {
//           arr[i] = Math.round(Math.random()* 100);
//     }
// }

// randomize(arr);
// console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// arr.sort((num1, num2) => {
//     return num1 - num2;
// })
//
// console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arr2  = arr.filter( (arrItem) => {
//     return arrItem % 2 === 0;
//  });
//
// console.log(arr2);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


// let callback = (fn) =>{
//     console.log(fn);
// }
//
// callback( arr.map((item) => item.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

// let sortNums = (arr, direction) =>{
//     if(direction === 'ascending'){
//     arr.sort((num1, num2) => {
//     return num1 - num2;
// })
//     }else if(direction === 'descending'){
//         arr.sort((num1, num2) => {
//             return num2 - num1;
//         })
//     }
//     else{
//         console.log('ERROR!!!');
//     }
// }
//
//
// sortNums(arr, 'descending');
// console.log(arr);


//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//  -- відсортувати його за спаданням за monthDuration

// coursesAndDurationArray.sort((item1,item2) => {
//     return item2.monthDuration - item1.monthDuration;
// });
//
// console.log(coursesAndDurationArray);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let temp  = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
//
// console.log(temp);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
// let temp = [];
// let start = 0;
// let end = n;
// let i = 0;
// while(start < str.length){
//     temp[i] = str.substring(start, end);
//     start+=n;
//     end+=n;
//     i++;
// }
// return temp;
// }
//
// let newStr = cutString('татишо?', 2);

// console.log(newStr);
