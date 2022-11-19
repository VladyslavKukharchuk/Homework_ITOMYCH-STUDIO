// Настроїти typescript для проекту
// Використовувати ‘строгу’ типізацію


//Приклад використання типів даних і строгої типізації в TypeScript:

//boolean
let isCompleted: boolean = false;
//number
let decimal: number = 6;
let integer: number = 7.10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//string
let name1: string = 'Yauhen';
//undefined 
const u: undefined = undefined;
//null
const n: null = null;
//void
const greetUser = (): void => {
    alert('Hello, nice to see you!')
}
//array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//tuple
let x1: [string, number];
x1 = ['goodboy', 42];
//альтернативний запис
let x2: [string, number] = ['goodboy', 42];
//any
let y: [any, any] = ['goodboy', 42];
let z: Array<any> = ['goodboy', 42];
let notSure: any = false;
//enum
enum Directions {
    Up,       //0
    Down,     //1
    Left = 6, //6
    Right     //7
}
//never
// Функція повертає помилку
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
}

//якщо змінна може мати декілька типів то оголошуємо через |
let id1: number | string;
//type - дозволяє створювати кастомні типи
type Name = string;
let id2: Name; //тепер змінна буде типу Name
//object
//звичайне оголошення
let user1 = {
    name: `Yauhen`,
    age: 30
}
//вимога до типів
let user2: { name: string, age: number } = {
    name: `Yauhen`,
    age: 30
}
//function
//Оголошення функції з вказанням типу вхідних аргументів
const createPassword1 = (name: string, age: number) => `${name}${age}`;
//Вказання декількох типів для аргументів і дефолтного значення:
const createPassword2 = (age: number | string = 20) => `${age}`;
//Необов'язковий аргумент для функції:
const createPassword3 = (name: string, age?: number) => `${name}${age}`;
//Тип даних для Rest оператора:
const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join()}`;

//class
class User {

    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const yauhen = new User('Yauhen', 22, 'webDev');