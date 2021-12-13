// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let container_1 = document.createElement('div');
// let form_1 = document.createElement('form');
// form_1.setAttribute('name', 'form-1');
//
// let input_1 = document.createElement('input');
// input_1.type = "text";
// let input_2 = document.createElement('input');
// input_2.type = "text";
//
// form_1.append(input_1, input_2);
//
//
// let container_2 = document.createElement('div');
// let form_2 = document.createElement('form');
// form_2.setAttribute('name', 'form-2');
//
// let input_3 = document.createElement('input');
// input_3.type = "text";
// let input_4 = document.createElement('input');
// input_4.type = "text";
//
// form_2.append(input_3, input_4);
//
// let button = document.createElement('button');
// button.innerText = "Output";
//
// container_1.appendChild(form_1);
// container_2.appendChild(form_2);
// document.body.append(container_1, container_2, button);
//
// button.onclick = () => {
//     console.log(input_1.value.concat(' ').concat(input_2.value));
//     console.log(input_3.value.concat(' ').concat(input_4.value));
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let wrap = document.createElement('div');
// wrap.style.columnGap = '20px';
// wrap.style.display = 'flex';
// wrap.style.marginBottom = '30px';
//
// let container = document.createElement('form');
//
// container.style.columnGap = '20px';
// container.style.display = 'flex';
// container.setAttribute('name', 'table');
// let rows = document.createElement("input");
// rows.setAttribute('type', 'number');
// let columns = document.createElement("input");
// columns.setAttribute('type', 'number');
// let text = document.createElement("input");
// text.setAttribute('type', 'text');
// let button = document.createElement("button");
// button.innerText = "Click!!!";
//
// container.append(rows, columns, text);
//
// wrap.append(container, button);
//
// document.body.append(wrap);
//
// button.onclick = () =>{
//     let tableWrap = document.createElement('div');
//     for (let i = 0; i < rows.value; i++) {
//         let row = document.createElement('div');
//         row.style.display = 'flex';
//         row.style.columnGap = '20px';
//         row.style.marginBottom = '20px';
//         for (let j = 0; j <columns.value; j++) {
//             let block = document.createElement('div');
//             block.style.width = '50px';
//             block.style.height = '50px';
//             block.style.border = 'green solid 2px';
//             block.innerText = text.value;
//             row.append(block);
//         }
//         tableWrap.append(row);
//     }
//     document.body.append(tableWrap);
// }


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


let wordsArray = ['дідько', 'бабай', 'чорт'];

let input = document.createElement('input');
input.setAttribute('type', 'text');

let button = document.createElement('button');
button.innerText = "Click!!!";

document.body.append(input, button);

button.onclick = () => {
    for (let i = 0; i < wordsArray.length; i++) {
        if(wordsArray[i].includes(input.value)){
            alert("Ах ти ж розбійнику! \nВийди і зайди нормально!!!");
            break;
        } else if (i+1 === wordsArray.length){
            alert("Харош");
        }
    }
}



