// Напишіть функції:

// - Для перевірки чи порожній об’єкт
// - Порівнює два об'єкти.
// - Знаходить перетин об'єктів і повертає об'єкт перетинів.
// - Знаходить значення за заданим ключем

const emptyObject = {};

const firstObject = {
    name: "Nazar",
    course: "Node.js",
    courseProgram: practice = {
        number: 24
    },
    isThisHomeworkDone(status) {
        return status ? "все ок. прийнято" : "перероби ";
    }
}

const secondObject = {
    name: "Nazar",
    course: "Node.js",
    courseProgram: practice = {
        number: 24
    },
    isThisHomeworkDone(status) {
        return status ? "все ок. прийнято" : "перероби";
    }
};


//1
//A simple solution
// function objectIsEmpty(object) {
//     return JSON.stringify(object) === '{}';
// }

function objectIsEmpty(object) {
    for (const key in object) {
        return false;
    }
    return true;
}

//2
//A simple solution
// function objectsIsIdentical(firstObject, secondObject) {
//     return JSON.stringify(firstObject) === JSON.stringify(secondObject)
// }

// a more complex solution
function objectsIsIdentical(firstObject, secondObject) {
    for (const key in firstObject) {
        if (firstObject.hasOwnProperty(key) !== secondObject.hasOwnProperty(key)) return false;

        switch (typeof (firstObject[key])) {
            case 'object':
                if (!objectsIsIdentical(firstObject[key], secondObject[key])) return false;
                break;
            case 'function':
                if (typeof (secondObject[key]) == 'undefined' || (key != 'compare' && firstObject[key].toString() != secondObject[key].toString())) return false;
                break;
            default:
                if (firstObject[key] != secondObject[key]) return false;
        }
    }

    for (const key in secondObject) {
        if (typeof (firstObject[key]) == 'undefined') return false;
    }
    return true;
};


//3
function getIdenticalValues(firstObject, secondObject) {
    const identicalValues = {}
    for (const key in firstObject) {
        switch (typeof (firstObject[key])) {
            case 'object':
                if (objectsIsIdentical(firstObject[key], secondObject[key])) {
                    identicalValues[key] = firstObject[key];
                } else {
                    break;
                };
                break;
            case 'function':
                if (typeof (secondObject[key]) == 'undefined' || (key != 'compare' && firstObject[key].toString() != secondObject[key].toString())) {
                    break;
                } else {
                    identicalValues[key] = firstObject[key];
                };
                break;
            default:
                if (firstObject[key] === secondObject[key]) {
                    identicalValues[key] = firstObject[key];
                }
        }

    }
    return identicalValues;
}

//4
function getValueByKey(key, object) {
    if (key in object) {
        return object[key]
    } 
}

//alternative function with input in CLI
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function getValueByKey(object) {
//     readline.question("Enter the key by which you want to get the value: ", function (answer) {
//         let key = answer;
//         if (key in object) {
//             console.log(`For the key: "${key}" was found value: "${object[key]}".`);
//         } else {
//             console.log(`Value with key "${key}" does not exist.`);
//         }
//         readline.close();
//     });
// }

//1
console.log(objectIsEmpty(emptyObject) ? "The object is empty." : "The object is not empty.");
console.log(objectIsEmpty(firstObject) ? "The object is empty." : "The object is not empty.");

//2
console.log(objectsIsIdentical(firstObject, secondObject) ? "Objects are identical." : "The objects are not identical.");
console.log(objectsIsIdentical(firstObject, firstObject) ? "Objects are identical." : "Objects are not identical.");

//3
console.log(getIdenticalValues(firstObject, secondObject));
console.log(getIdenticalValues(firstObject, firstObject));

//4
console.log(getValueByKey("name" ,firstObject) ? `Value: ${getValueByKey("name" ,firstObject)}` : `Value for the key you entered does not exist.`);
//Calling an alternative function
// getValueByKey(firstObject)