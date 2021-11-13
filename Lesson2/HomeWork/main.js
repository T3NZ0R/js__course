// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Enter minute from 0 to 59.');
//
// if(time < 15){
//     console.log('First part');
// }
// else if(time >= 15 && time < 30)
//     {
//         console.log('Second part');
//     }
// else if(time >= 30 && time < 45)
// {
//     console.log('Third part');
// }
// else if(time >= 45 && time < 60)
// {
//     console.log('Fourth part');
// }


// switch (true) {
//     case time <= 15:
//         console.log('First part');
//         break;
//     case time > 15 && time <= 31:
//         console.log('Second part');
//         break;
//     case time >= 30 && time < 45:
//         console.log('Third part');
//         break;
//     case time >= 45 && time < 60:
//         console.log('Fourth part');
//         break;
// }


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = +prompt('Enter day number from 1 to 31.');
//
// if(day <= 15){
//     console.log('First part');
// }
// else if(day > 15 && day <= 31)
// {
//     console.log('Second part');
// }


//
// switch (true) {
//     case day <= 15:
//         console.log('First part');
//         break;
//     case day > 15 && day <= 31:
//         console.log('Second part');
//         break;
// }


//- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)


// let test = confirm();
//
// if(test === true){
//     console.log("Вірно");
// }
// else{
//     console.log("Неправильно");
// }
//
// switch (true){
//     case test===true:
//         console.log("Вірно");
//         break;
//     default:
//         console.log("Неправильно");
// }
// let testHelp = test === true ? 'Вірно' : 'Неправильно';
// console.log(testHelp);

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Enter number');

// let a = [1, 0, -3];
// for (let i = 0; i<3; i++){
// if(a[i] !== 0){
//     console.log("Вірно");
// }
// else{
//     console.log("Невірно");
// }
// }
//
// for (let i = 0; i<3; i++){
//     switch (true){
//         case a[i]!==0:
//             console.log("Вірно");
//             break;
//         default:
//             console.log("Невірно");
//     }
// }


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let dayNum = +prompt("Enter number of day");
//
// switch (dayNum) {
//     case 1:
//         let monday = {
//             name: "Monday",
//             plan: "Lecture"
//         }
//         console.log(monday.name);
//         console.log(monday.plan);
//         break;
//     case 2:
//         let tuesday = {
//             name: "Tuesday",
//             plan: "Practical work"
//         }
//         console.log(tuesday.name);
//         console.log(tuesday.plan);
//         break;
//     case 3:
//         let wednesday = {
//             name: "Wednesday",
//             plan: "Lecture"
//         }
//         console.log(wednesday.name);
//         console.log(wednesday.plan);
//         break;
//     case 4:
//         let thursday  = {
//             name: "Thursday ",
//             plan: "Practical work"
//         }
//         console.log(thursday.name);
//         console.log(thursday.plan);
//         break;
//     case 5:
//         let friday  = {
//             name: "Friday ",
//             plan: "Lecture"
//         }
//         console.log(friday.name);
//         console.log(friday.plan);
//         break;
//     case 6:
//         let saturday  = {
//             name: "Saturday ",
//             plan: "Chill"
//         }
//         console.log(saturday.name);
//         console.log(saturday.plan);
//         break;
//     case 7:
//         let sunday  = {
//             name: "Sunday ",
//             plan: "Chill"
//         }
//         console.log(sunday.name);
//         console.log(sunday.plan);
//         break;
//     default:
//         console.log("A week has only 7 days");
//         break;
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Enter year');
//
// let yearHelp = year % 4 === 0 && year !== 0 ? 'Рік високосний' : 'Рік невисокосний';
// console.log(yearHelp);

// if( year % 4 === 0){
//     console.log('Рік високосний');
// }
// else{
//     console.log('Рік невисокосний');
// }
//
// switch (true){
//     case year % 4 === 0:
//         console.log('Рік високосний');
//         break;
//     default:
//         console.log('Рік невисокосний');
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!»

// let question = prompt("Яка «офіційна» назва JavaScript?");

// if(question === "ECMAScript"){
//     console.log("Правильно!");
// }
// else {
//     console.log("Не знаєте? ECMAScript!");
// }

// switch (true){
//     case question === "ECMAScript":
//     console.log("Правильно!");
//         break;
//     default:
//     console.log("Не знаєте? ECMAScript!");
// }

// let answer = question === "ECMAScript"? 'Правильно!' : 'Не знаєте? ECMAScript!';
// console.log(answer);











