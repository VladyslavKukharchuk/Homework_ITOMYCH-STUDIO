// Напишіть функції:

// - Для перевірки чи порожній об’єкт
// - Порівнює два об'єкти.
// - Знаходить перетин об'єктів і повертає об'єкт перетинів.
// - Знаходить значення за заданим ключем

const firstObject = {
    name: "Nazar",
    course: "Node.js",
    courseProgram: practice = {
        number: 24
    },
    isThisHomeworkDone(object) {
        return JSON.stringify(object) === '{}';
    }
}

const secondObject = {
    name: "Nazar",
    course: "Node.js",
    courseProgram: practice = {
        number: 24
    },
    isThisHomeworkDon(object1) {
        return JSON.stringify(object1) === '{}';
    }
};

// const secondObject = {
//     name: "Nazar",
//     course: ".Net",
//     courseProgram: practice = {
//         number: 12
//     }
// };


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



//пройтися по об'єкту і поернути тільки значення які однакові
function fingCrossingOfObjects(firstObject, secondObject) {

}

function findValueByKey(key) {
    console.log(firstObject.key);
    console.log(firstObject['key']);
    console.log(firstObject["key"]);
    console.log(firstObject[`key`]);
    console.log(firstObject.name);
    let value = firstObject.key;
    if (value === undefined) {
        return `No values found by key: "${key}".`
    } else {
        return `By key "${key}" was found: "${value}".`
    }

    // if(key in firstObject){
    //     return `Існує значення з ключом "${key}".`
    // } else {
    //     return `Значення з ключом "${key}" не існує.`
    // }
}

console.log(objectIsEmpty(firstObject) ? "The object is empty." : "The object is not empty.");
console.log(objectIsEmpty(secondObject) ? "The object is empty." : "The object is not empty.");

console.log(objectsIsIdentical(firstObject, secondObject) ? "Objects are identical." : "The objects are not identical.");
console.log(objectsIsIdentical(firstObject, firstObject) ? "Objects are identical." : "Objects are not identical.");


// console.log(findValueByKey("name"));