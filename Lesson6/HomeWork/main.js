//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

//let words = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let i = 0; i < words.length; i++) {
//     console.log(words[i].length);
// }

// for (let i = 0; i < words.length; i++) {
//     console.log(words[i].toUpperCase());
// }

//let words2 =['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

// for (let i = 0; i < words.length; i++) {
//     console.log(words[i].toLowerCase());
// }


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

//let str = 'Каждый охотник желает знать';
//
// let stringToarray = (str) =>{
// let temp = str.split(" ");
// return temp;
// }
//
// let arr = stringToarray(str);

// console.log(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, length) =>{
//     let temp = str.slice(0, length);
//     return temp;
// }
//
// let length = 10;
// document.writeln(delete_characters(str, length));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) =>{
//     return str.replaceAll(' ', '-');
// }
//
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//

// str = "okten";
//
let toUp = (str) => {
    let temp = str.split('');
    temp[0] = temp[0].toUpperCase();
    let result = '';
    for (let i =0; i<temp.length; i++){
        result = result.concat('', temp[i]);
    }
    return result;
}
//
// let news = toUp(str);
//
// console.log(news);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str = 'Каждый охотник желает знать';

let capitalize = (str) =>{
    let temp = str.split(" ");

    for (let i = 0; i < temp.length; i++) {
        temp[i] = toUp(temp[i]);
    }

    let result = '';
    for (let i =0; i<temp.length; i++){
        result = result.concat(' ', temp[i]);
    }
    return result;
}

console.log(capitalize(str));
