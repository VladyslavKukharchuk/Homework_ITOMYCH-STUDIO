"use strict";
// Настроїти typescript для проекту
// Використовувати ‘строгу’ типізацію
//Приклад використання типів даних і строгої типізації в TypeScript:
//boolean
let isCompleted = false;
//number
let decimal = 6;
let integer = 7.10;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//string
let name1 = 'Yauhen';
//undefined 
const u = undefined;
//null
const n = null;
//void
const greetUser = () => {
    console.log('Hello, nice to see you!');
};
//array
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
//tuple
let x1;
x1 = ['goodboy', 42];
//альтернативний запис
let x2 = ['goodboy', 42];
//any
let y = ['goodboy', 42];
let z = ['goodboy', 42];
let notSure = false;
//enum
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 6] = "Left";
    Directions[Directions["Right"] = 7] = "Right"; //7
})(Directions || (Directions = {}));
//never
// Функція повертає помилку
const msg = 'hello';
const error = (msg) => {
    throw new Error(msg);
};
//якщо змінна може мати декілька типів то оголошуємо через |
let id1;
let id2; //тепер змінна буде типу Name
//object
//звичайне оголошення
let user1 = {
    name: `Yauhen`,
    age: 30
};
//вимога до типів
let user2 = {
    name: `Yauhen`,
    age: 30
};
//function
//Оголошення функції з вказанням типу вхідних аргументів
const createPassword1 = (name, age) => `${name}${age}`;
//Вказання декількох типів для аргументів і дефолтного значення:
const createPassword2 = (age = 20) => `${age}`;
//Необов'язковий аргумент для функції:
const createPassword3 = (name, age) => `${name}${age}`;
//Тип даних для Rest оператора:
const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
//class
class User {
    constructor(name, age, nickName) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}
const yauhen = new User('Yauhen', 22, 'webDev');
