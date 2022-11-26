"use strict";
// Вводиться у символьній формі два многочлени від x з цілими коефіцієнтами. Вивести їх добуток у порядку зменшення степенів - також у символьній формі.
// Степінь заданих многочленів не більше 10, коефіцієнти заданих многочленів по модулю не білльші 104.
// Вхідні дані
// Два стрінга - многочлени: x+1 і x-1
// Вихідні дані
// Многочлен: x^2-1
function distributor(x, operator) {
    if (isNaN(+x)) {
        if (x.includes("^")) {
            let x1 = x.split("^", 2);
            return [operator, 1, x1[0], parseInt(x1[1])];
        }
        else {
            return [operator, 1, x[0], 1];
        }
    }
    else {
        if (operator === "-") {
            return -x;
        }
        else {
            return +x;
        }
    }
}
function parse(string, operator, operatorForX, operatorForY) {
    let result = [];
    let arr = string.split(operator, 2);
    result.push(distributor(arr[0], operatorForX));
    result.push(distributor(arr[1], operatorForY));
    return result;
}
function divide(string) {
    if (string[0] === "-") {
        let newString = string.slice(1, string.length + 1);
        if (newString.includes("-")) {
            return parse(newString, "-", "-", "-");
        }
        else {
            return parse(newString, "+", "-", "+");
        }
        ;
    }
    else {
        if (string.includes("-")) {
            return parse(string, "-", "+", "-");
        }
        else {
            return parse(string, "+", "+", "+");
        }
    }
}
function multiply(x, y) {
    if (Array.isArray(x) && (typeof (y) === 'number')) {
        if ((x[0] === "-") && (y < 0)) {
            return ["+", x[1] * Math.abs(y), x[2], x[3]];
        }
        else if ((x[0] === "+") && (y < 0)) {
            return ["-", x[1] * Math.abs(y), x[2], x[3]];
        }
        else if ((x[0] === "-") && (y > 0)) {
            return ["-", x[1] * y, x[2], x[3]];
        }
        else if ((x[0] === "+") && (y > 0)) {
            return ["+", x[1] * y, x[2], x[3]];
        }
    }
    else if ((typeof (x) === 'number') && Array.isArray(y)) {
        if ((x < 0) && (y[0] === "-")) {
            return ["+", y[1] * Math.abs(x), y[2], y[3]];
        }
        else if ((x > 0) && (y[0] === "-")) {
            return ["-", y[1] * x, y[2], y[3]];
        }
        else if ((x < 0) && (y[0] === "+")) {
            return ["-", y[1] * Math.abs(x), y[2], y[3]];
        }
        else if ((x > 0) && (y[0] === "+")) {
            return ["+", y[1] * x, y[2], y[3]];
        }
    }
    else if ((typeof (x) === 'number') && (typeof (y) === 'number')) {
        return x * y;
    }
    else if (Array.isArray(x) && Array.isArray(y)) {
        if ((x[0] === "-") && (y[0] === "-")) {
            return ["+", x[1] * y[1], x[2], x[3] + y[3]];
        }
        else if ((x[0] === "-") && (y[0] === "+")) {
            return ["-", x[1] * y[1], x[2], x[3] + y[3]];
        }
        else if ((x[0] === "+") && (y[0] === "-")) {
            return ["-", x[1] * y[1], x[2], x[3] + y[3]];
        }
        else if ((x[0] === "+") && (y[0] === "+")) {
            return ["+", x[1] * y[1], x[2], x[3] + y[3]];
        }
    }
}
function format(x) {
    if (isNaN(+x)) {
        if ((x[1] !== 1) && (x[3] !== 1)) {
            return `${x[0]}${x[1]}${x[2]}^${x[3]}`;
        }
        else if ((x[1] === 1) && (x[3] !== 1)) {
            return `${x[0]}${x[2]}^${x[3]}`;
        }
        else if ((x[1] !== 1) && (x[3] === 1)) {
            return `${x[0]}${x[1]}${x[2]}`;
        }
        else if ((x[1] === 1) && (x[3] === 1)) {
            return `${x[0]}${x[2]}`;
        }
    }
    return x.toString();
}
function multiplyPolynomials(polynomial1, polynomial2) {
    let polynomialArr1 = divide(polynomial1);
    let polynomialArr2 = divide(polynomial2);
    let a = polynomialArr1[0], b = polynomialArr1[1], c = polynomialArr2[0], d = polynomialArr2[1];
    let result = `${format(multiply(a, c))}${format(multiply(a, d))}${format(multiply(b, c))}${format(multiply(b, d))}`;
    if (result[0] === '+') {
        result = result.slice(1, result.length + 1);
    }
    return result;
}
console.log(multiplyPolynomials("x^3+1", "x^2-2"));
