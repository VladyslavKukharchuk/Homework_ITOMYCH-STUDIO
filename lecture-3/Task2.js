// Підрахувати суму двох натуральних чисел A i B, записаних в римській системі числення.
// Вiдповiдь записати також, в римській системі числення.

// M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1 (Всі числа – менші 2000).

// Вхідні дані
// В рядку записано два числа римською системою числення, між якими стоїть знак + .

// Вихідні дані
// Одне число, сума чисел також римською системою числення. Числа в римській
// системі числення записані великими латинськими літерами.

const digits = {
    Z: 2000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function toArabic(str) {
    return str.split('').reduce(function (r, v, i, arr) {
        const [a, b, c] = [digits[arr[i]], digits[arr[i + 1]], digits[arr[i + 2]]];
        return b > a ? r - a : r + a;
    }, 0)
}

function toRoman(num) {
    let result = '';
    for (let key in digits)
        while (num >= digits[key]) {
            result += key;
            num -= digits[key];
        }
    return result;
}

function sumOfRomanNumerals(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    console.log(`First number in Arabic system: ${firstNumber}`);
    console.log(`Second number in Arabic system: ${secondNumber}`);
    console.log(`Sum in Arabic system: ${sum}`);
    return sum;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter two natural numbers in X+Y format: ", function (answer) {

    console.log(`You entered: "${answer}"`);

    let numbers = answer.toUpperCase();

    if (answer === "") {
        console.log(`You entered an empty string, please try again.`);
    } else if (answer.includes(` `)) {
        console.log(`You entered numbers with spaces, please try again.`);
    } else if (answer.includes(`-`)) {
        console.log(`You entered not a natural number, please try again.`);
    } else if (answer.includes(`+`)) {
        if (answer[0] === "+" || answer[answer.length - 1] === "+") {
            console.log(`The + sign must be between the numbers, try again.`);
        } else {
            let numbersArr = numbers.split('+');

            if (!/^[IVXLCDMZ]+$/i.test(numbersArr[0]) || !/^[IVXLCDMZ]+$/i.test(numbersArr[1])) {
                console.log("You entered an incorrect roman number format, please try again.")
            } else {
                let firstNumber = toArabic(numbersArr[0]);
                let secondNumber = toArabic(numbersArr[1]);

                console.log(`Sum of numbers: ${toRoman(sumOfRomanNumerals(firstNumber, secondNumber))}`);
            }
        }
    } else {
        console.log(`Enter the data in the format: First number+Second number`);
    }

    readline.close();
});