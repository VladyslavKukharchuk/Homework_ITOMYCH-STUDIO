// Напишіть функції:

// - Для перевірки чи порожній об’єкт
// - Порівнює два об'єкти.
// - Знаходить перетин об'єктів і повертає об'єкт перетинів.
// - Знаходить значення за заданим ключем

const firstObject = {
    "name": "Ruslan"
}

const secondObject = {};

const emptyObject = {};
console.log(emptyObject);

function objectIsEmpty(object) {
    console.log(object);
    if(object == emptyObject){
        console.log(true);
    }else {
        console.log(false);
    }
}

function comparisonOfObjects(firstObject, secondObject) {

}

function fingCrossingOfObjects(firstObject, secondObject) {

}

function findValueByKey(key) {
    // console.log(firstObject.key);
    // console.log(firstObject['key']);
    // console.log(firstObject["key"]);
    // console.log(firstObject[`key`]);
    // console.log(firstObject.name);
    // let value = firstObject.key;
    // if(value === undefined){
    //     return `No values found by key: "${key}".`
    // } else {
    //     return `By key "${key}" was found: "${value}".`
    // }

    if(key in firstObject){
        return `Існує значення з ключом "${key}".`
    } else {
        return `Значення з ключом "${key}" не існує.`
    }
}

console.log(`---objectIsEmpty---`);

objectIsEmpty(firstObject);
objectIsEmpty(secondObject);

console.log(`---findValueByKey---`);

console.log(findValueByKey("name"));

