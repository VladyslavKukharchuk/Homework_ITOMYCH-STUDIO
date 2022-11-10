// Реалізувати власноруч метод Array.prototype.reduce
// reduce = (arr, reduceCallback, initialValue)

// reduce = (arr, reduceCallback, initialValue);



// function reduce(arr, reduceCallback, initialValue) {
//     let initialValue 
// }

let arr = [1, 2, 2, 3, 3, 3];

console.log(Array.prototype.reduce.toString());

// reduce(arr, reduceCallback, initialValue);



//Reduce
// const array = ['apple','banana','peach','orange'];
//
// let fruits  = array.reduce((acc, elem) => {
//     acc[elem] = 1;
//     return acc;
// }, {});
//
// console.log(fruits);

// Напишите алгоритм, который берет массив и перемещает все нули в конец,
// сохраняя порядок других элементов.

let moveZeros = (arr) =>
  arr.reduceRight(
    (acc, val) => (val === 0 ? [...acc, val] : [val, ...acc]),
    []
  );

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

//Разворачивание массива массивов
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((a, b) => a.concat(b));
console.log(flattened);

// Если дан двумерный массив целых чисел, верните выровненную версию массива
//  со всеми целыми числами в отсортированном (возрастающем) порядке.
// Пример: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]],
// ваша функция должна вернуть [1, 2, 3, 4, 5, 6, 7, 8, 9].

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function concatenate(a, b) {
  return a.concat(b);
}

const flattenAndSort = (array) => {
  return array.reduce(concatenate, []).sort(subtract);
};

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

Array.prototype.reduce2 = function (f, result) {
  let i = 0;

  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = f(result, this[i], i, this);
  }
  return result;
};
let a = [1, 2, 3, 4];

console.log(a.reduce(add), a.reduce2(add));
console.log(a.reduce(add, 10), a.reduce2(add, 10));

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

Array.prototype.reduce3 = function (callback, initialValue) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let result;
  let i = 0;

  let O = Object(this);
  let len = O.length;

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    if (len === 0) {
      throw new Error("Reduce of empty array with no initial value");
    }
    result = O[i];
    i++;
  }

  for (; i < this.length; i++) {
    if (i in O) {
      result = callback(result, O[i], i, O);
    }
  }

  return result;
};

console.log([1, 2, 3, 4].reduce3(add));
console.log(a.reduce3(concatenate, "X"), a.reduce(concatenate, "X"));