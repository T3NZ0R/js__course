//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let users = [
//     new User(1, 'Mike', 'Tayson', 'mike@abc', '+380974365439'),
//     new User(3, 'Tom', 'Holand', 'tom@abc', '+3809744563439'),
//     new User(5, 'Lionel', 'Messi', 'messi@abc', '+380964665439'),
//     new User(2, 'Eric', 'Abidal', 'eric@abc', '+380974876439'),
//     new User(9, 'Dani', 'Alves', 'dani@abc', '+380974365439'),
//     new User(6, 'Andres', 'Iniesta', 'iniesta@abc', '+389747655439'),
//     new User(10, 'Carles', 'Puyol', 'puyol@abc', '+380974365656'),
//     new User(8, 'Luis', 'Suarez', 'luis@abc', '+38097436989'),
//     new User(7, 'Ansu', 'Fati', 'fati@abc', '+380974365875'),
//     new User(4, 'David', 'Villa', 'david@abc', '+38097545439')
// ];
//
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let evenUsers = users.filter((user) => user.id % 2 === 0);
//
// console.log(evenUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedByIdUsers = users.sort((item1, item2) => item1.id - item2.id);
//
// console.log(sortedByIdUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client(1, 'Mike', 'Tayson', 'mike@abc', '+380974365439', [1,2,3,4]),
    new Client(3, 'Tom', 'Holand', 'tom@abc', '+3809744563439',[1]),
    new Client(5, 'Lionel', 'Messi', 'messi@abc', '+380964665439',[1,2,3,4,5,6]),
    new Client(2, 'Eric', 'Abidal', 'eric@abc', '+380974876439',[1,2]),
    new Client(9, 'Dani', 'Alves', 'dani@abc', '+380974365439',[1,2,3,4,5,6,7,8,9]),
    new Client(6, 'Andres', 'Iniesta', 'iniesta@abc', '+389747655439',[1,2,3]),
    new Client(10, 'Carles', 'Puyol', 'puyol@abc', '+380974365656',[1,2,3,4,5]),
    new Client(8, 'Luis', 'Suarez', 'luis@abc', '+38097436989',[1,2,3,4,5,6,7]),
    new Client(7, 'Ansu', 'Fati', 'fati@abc', '+380974365875',[1,2,3,4,5,6,7,8,9,10]),
    new Client(4, 'David', 'Villa', 'david@abc', '+38097545439',[1,2,3,4,5,6,7,8])
];

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsSortedByOrderLength = clients.sort( (client1, client2) => client1.order.length - client2.order.length);

console.log(clientsSortedByOrderLength);
