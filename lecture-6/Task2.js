// Написати метод для виведення унікальних значень в масиві.
// [1, 2, 2, 3, 3, 3] => [1, 2, 3]

function getUniqueElements(arr) {
    //simple solution
    let result = [];
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;

    //solution dased on Set
    // return Array.from(new Set(arr));
}

let arr = [1, 2, 2, 3, 3, 3];

console.log(arr);
console.log(getUniqueElements(arr));