//- Дано натуральное число n. Выведите все числа от 1 до n.

// let n = +prompt("Limit?");
//
// let output = (n) =>{
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
//
// output(n);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let a = +prompt("Number?")
// let b = +prompt("Number?")
//
// let output = (num1, num2) => {
//     if (num1 > num2) {
//         for (let i = num2; i <= num1; i++) {
//             console.log(i);
//         }
//     } else if (num2 > num1) {
//         for (let i = num1; i <= num2; i++) {
//             console.log(i);
//         }
//     } else {
//         console.log(num1);
//     }
// }
// output(a, b);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = (arr, i) =>{
//     let temp = arr[i];
//     arr[i] = arr[i+1];
//     arr[i+1] = temp;
// }
//
// let arr = [1,2,3,4,5,6,7,];
//
// foo(arr, 3);
//
// console.log(arr);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


let sort = (arr) => {
    let j = 0;
    let k = arr.length - 1;

    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp[j] = arr[i];
            j++;
        } else {
            temp[k] = arr[i];
            k--;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
}

let arr = [1, 0, 6, 0, 3, 5, 0, 5, 0, 9, 6, 0, 6, 0, 10,];

sort(arr);
console.log(arr);
