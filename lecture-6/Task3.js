// Реалізувати власноруч метод Array.prototype.reduce
// reduce = (arr, reduceCallback, initialValue)

//A simple solution
function reduce2(arr, reduceCallback, initialValue) {
    let i = 0;

    if (arguments.length < 3) {
        i = 1;
        initialValue = arr[0];
    }
    for (; i < arr.length; i++) {
        initialValue = reduceCallback(initialValue, arr[i], i, arr);
    }
    return initialValue;
};

//solutions with error warning
function reduce3(arr, reduceCallback, initialValue) {
    if (arr == null) {
        throw new Error("Cant iterate over undefined or null");
    }
    if (typeof reduceCallback !== "function") {
        throw new Error("Callback is not a function");
    }

    let result;
    let i = 0;

    let O = Object(arr);
    let length = arr.length;

    if (arguments.length >= 3) {
        result = initialValue;
    } else {
        if (length === 0) {
            throw new Error("Reduce of empty array with no initial value");
        }
        result = O[i];
        i++;
    }

    for (; i < arr.length; i++) {
        if (i in O) {
            result = reduceCallback(result, O[i], i, O);
        }
    }

    return result;
};

//Functions that we will use for callback
function add(a, b) {
    return a + b;
}

function concatenate(a, b) {
    return a.concat(b);
}

let array1 = [1, 2, 3, 4];

console.log(`Calls to compare result of the function:`)

console.log(`reduce: ${array1.reduce(add)}`);
console.log(`reduce2: ${reduce2(array1, add)}`);
console.log(`reduce3: ${reduce3(array1, add)}`);

console.log(`reduce: ${[1, 2, 3, 4].reduce(add)}`);
console.log(`reduce2: ${reduce2([1, 2, 3, 4], add)}`);
console.log(`reduce3: ${reduce3([1, 2, 3, 4], add)}`);

console.log(`reduce: ${array1.reduce(add, 10)}`);
console.log(`reduce2: ${reduce2(array1, add, 10)}`);
console.log(`reduce3: ${reduce3(array1, add, 10)}`);

console.log(`reduce: ${array1.reduce(concatenate, "X")}`);
console.log(`reduce2: ${reduce2(array1 ,concatenate, "X")}`);
console.log(`reduce3: ${reduce3(array1 ,concatenate, "X")}`);