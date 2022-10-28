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

// function toArabic(str) {
//     if (!/^[IVXLCDMZ]+$/i.test(str)) throw new Error('Incorrect roman number format: ' + str)
//     return str.toUpperCase().split('').reduce(function (r, v, i, arr) {
//         const [a, b, c] = [digits[arr[i]], digits[arr[i + 1]], digits[arr[i + 2]]];
//         if (b && c && a <= b && b < c)
//             throw new Error('Incorrect roman number format: ' + str);
//         return b > a ? r - a : r + a;
//     }, 0)
// }

// function toArabic(romanNumber) {
//     romanNumber = romanNumber.toUpperCase();
//     const romanNumList = ["CM", "M", "CD", "D", "XC", "C", "XL", "L", "IX", "X", "IV", "V", "I"];
//     const corresp = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
//     let index = 0,
//         num = 0;
//     for (let rn in romanNumList) {
//         index = romanNumber.indexOf(romanNumList[rn]);
//         while (index != -1) {
//             num += parseInt(corresp[rn]);
//             romanNumber = romanNumber.replace(romanNumList[rn], "-");
//             index = romanNumber.indexOf(romanNumList[rn]);
//         }
//     }
//     return num;
// }

// function toRoman(number) {
//     let roman = "";
//     const romanNumList = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XV: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     };
//     let a;
//     if (number < 1 || number > 3999)
//         return "Enter a number between 1 and 3999";
//     else {
//         for (let key in romanNumList) {
//             a = Math.floor(number / romanNumList[key]);
//             if (a >= 0) {
//                 for (let i = 0; i < a; i++) {
//                     roman += key;
//                 }
//             }
//             number = number % romanNumList[key];
//         }
//     }
//     return roman;
// }

// function toRoman(num) {
//     if (!/^\-?\d+$/.test(num + '')) throw new Error('Can`t convert that arabic numeric to roman: ' + num)
//     if (num < 1) return '';
//     let result = '';
//     for (let key in digits)
//         while (num >= digits[key]) {
//             result += key;
//             num -= digits[key];
//         }
//     return result;
// }

function toRoman(num) {
    if (num < 1) return '';
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
    console.log(`Sum in Arabic system: ${sum}`);
    return sum;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter two natural numbers in X+Y format: ", function (answer) {

    console.log(`You entered: "${answer}"`);

    if (answer.includes(`+`)) {
        if (answer[0] === "+" || answer[answer.length - 1] === "+") {
            console.log(`Знак + має бути між числами, спробуйте ще раз.`);
        } else {
            let numbers = answer.toUpperCase();

            let numbersArr = numbers.split('+');

            let firstNumber = toArabic(numbersArr[0]);
            let secondNumber = toArabic(numbersArr[1]);

            console.log(`Sum of numbers: ${toRoman(sumOfRomanNumerals(firstNumber, secondNumber))}`);
        }
    } else {
        console.log(`Введіть дані в форматі: Перше число+Друге число`);
    }

    readline.close();
});