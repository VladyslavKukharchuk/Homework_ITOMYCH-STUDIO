// “Розумне множення”
// function multiply(num1, num2) {
// // Write your code here...
// }

// Реалізувати double, square на основі функції multiply;
// double(5);  // => 10
// square(5); // => 25

function multiply(num1, num2 = 2) {
    return num1 * num2;
}

multiply(2, 6);
console.log(`Result of the function multiply: ${multiply(2, 6)}`);

// function double(num){
//     return multiply(num);
// }

let double = (num) => multiply(num);;

double(5);
console.log(`Result of the function double: ${double(5)}`);

function square(num){
    return num ** 2;
}

square(5);
console.log(`Result of the function square: ${square(5)}`);