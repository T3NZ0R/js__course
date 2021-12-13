//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

let userName = document.forms.namedItem('userForm').name;
let userAge = document.forms.namedItem('userForm').age;

let userBtn = document.getElementById('btn');

let saveObject = (name, age) => {
    let user = {
        userName: name,
        userAge: age
    }
    localStorage.setItem('user', JSON.stringify(user));
}
userBtn.onclick = () => {
    saveObject(userName.value, userAge.value);
}

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carModel = document.forms.namedItem('carForm').model;
let carType = document.forms.namedItem('carForm').type;
let carVolume = document.forms.namedItem('carForm').volume;

let carBtn = document.getElementById('btnCar');

let carArray = (model, type, volume) => {
    let car = [model, type, volume];
    localStorage.setItem('car', JSON.stringify(car));
}

carBtn.onclick = () => {
    carArray(carModel.value, carType.value, carVolume.value);
}

