// Реалізувати функцію createBase

// let addSix = createBase(6);

// addSix(10); // returns 16

// addSix(21); // returns 27

function createBase(increment){

    return function(num){
        return num + increment;
    }
}

let addSix = createBase(6);

addSix(10); // returns 16
console.log(`Result of the function addSix: ${addSix(10)}`);

addSix(21); // returns 27
console.log(`Result of the function addSix: ${addSix(21)}`);