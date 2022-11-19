"use strict";
function isPointBelongsTriangle(O, A, B, C) {
    let a = (O.x - A.x) * (O.y - B.y) - (O.x - B.x) * (O.y - A.y), b = (O.x - B.x) * (O.y - C.y) - (O.x - C.x) * (O.y - B.y), c = (O.x - C.x) * (O.y - A.y) - (O.x - A.x) * (O.y - C.y);
    return ((a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0)) ? 1 : 0;
}
console.log(isPointBelongsTriangle({ x: 3, y: 5 }, { x: 2, y: 5 }, { x: 5, y: 10 }, { x: 10, y: 5 }));
console.log(isPointBelongsTriangle({ x: 4, y: 10 }, { x: 2, y: 5 }, { x: 5, y: 10 }, { x: 10, y: 5 }));
console.log(isPointBelongsTriangle({ x: 6, y: 10 }, { x: 2, y: 5 }, { x: 5, y: 10 }, { x: 10, y: 5 }));
console.log(isPointBelongsTriangle({ x: 10, y: 5 }, { x: 2, y: 5 }, { x: 5, y: 10 }, { x: 10, y: 5 }));
console.log(isPointBelongsTriangle({ x: -11, y: -6 }, { x: -15, y: -5 }, { x: -10, y: -5 }, { x: -10, y: -10 }));
console.log(isPointBelongsTriangle({ x: 8, y: 8 }, { x: -10, y: 10 }, { x: -5, y: 10 }, { x: -10, y: 5 }));
console.log(isPointBelongsTriangle({ x: -2, y: 2 }, { x: -5, y: -5 }, { x: -5, y: 5 }, { x: 5, y: 5 }));
let isCompleted = false;
let decimal = 6;
let integer = 7.10;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let name1 = 'Yauhen';
const u = undefined;
const n = null;
const greetUser = () => {
    alert('Hello, nice to see you!');
};
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let x1;
x1 = ['goodboy', 42];
let x2 = ['goodboy', 42];
let y = ['goodboy', 42];
let z = ['goodboy', 42];
let notSure = false;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 6] = "Left";
    Directions[Directions["Right"] = 7] = "Right";
})(Directions || (Directions = {}));
const msg = 'hello';
const error = (msg) => {
    throw new Error(msg);
};
let id1;
let id2;
let user1 = {
    name: `Yauhen`,
    age: 30
};
let user2 = {
    name: `Yauhen`,
    age: 30
};
const createPassword1 = (name, age) => `${name}${age}`;
const createPassword2 = (age = 20) => `${age}`;
const createPassword3 = (name, age) => `${name}${age}`;
const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
class User {
    constructor(name, age, nickName) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}
const yauhen = new User('Yauhen', 22, 'webDev');
