// Реалізувати функцію createBase

// let addSix = createBase(6);

// addSix(10); // returns 16

// addSix(21); // returns 27

function createBase(num){
    return 10 + num;
}

let addSix = createBase(6);

addSix(10); // returns 16
console.log(`Result of the function addSix: ${addSix(10)}`);

addSix(21); // returns 27
console.log(`Result of the function addSix: ${addSix(21)}`);