//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let check = (mail) => {
//     mail = mail.toLowerCase();
//     mail = mail.split('@');
//     // return mail;
//     if (mail.length > 2) {
//         return 'Try again!!!';
//     }
//
//     let temp = mail[1].split('');
//
//     if (temp.includes('.') === false || temp.indexOf('.') < 1) {
//         return 'Try again!!!';
//     }
//
//     temp = mail[0];
//
//     if(mail[0].includes('#') === true || mail[0].includes('$') === true || mail[0].includes(',') === true || mail[0].includes('?') === true){
//         return 'Try again!!!';
//     }
//
//     return 'Operation completed successfully';
// }
//
// console.log(check('someemail@gmail.com'));
// console.log(check('someeMAIL@gmail.com'));
// console.log(check('someeMAIL@i.ua'));
// console.log(check('some.email@gmail.com'));


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let sortedArray = coursesArray.sort((item1, item2) => item2.modules.length - item1.modules.length);
//
// console.log(sortedArray);

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// // document.writeln(count(str, symb)) // 5
//
//
// let count  =  (str, stringsearch) =>{
// let num = 0;
// for (let i = 0; i < str.length; i++) {
//     if(str[i] === stringsearch){
//         num++;
//     }
// }
// return num;
// }
// console.log(count(str, symb));



// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
//
// let cutString =(str, n) => {
//     let temp =  str.split(' ');
//
//
//         temp.splice(n, temp.length - n );
//
//     return temp;
// }
//
// console.log(cutString(str, 2));