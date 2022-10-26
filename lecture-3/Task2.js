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
    if (!/^[IVXLCDMZ]+$/i.test(str)) throw new Error('Incorrect roman number format: ' + str)
    return str.toUpperCase().split('').reduce(function (r, v, i, arr) {
        const [a, b, c] = [digits[arr[i]], digits[arr[i + 1]], digits[arr[i + 2]]];
        if (b && c && a <= b && b < c)
            throw new Error('Incorrect roman number format: ' + str);
        return b > a ? r - a : r + a;
    }, 0)
}

function toRoman(num) {
    if (!/^\-?\d+$/.test(num + '')) throw new Error('Can`t convert that arabic numeric to roman: ' + num)
    if (num < 1) return '';
    let result = '';
    for (let key in digits)
        while (num >= digits[key]) {
            result += key;
            num -= digits[key];
        }
    return result;
}

function sumOfRomanNumerals(numbers) {
    numbers = numbers.split('+');
    console.log(`First number in Arabic system: ${toArabic(numbers[0])}`)
    console.log(`Second number in Arabic system: ${toArabic(numbers[1])}`)
    let sum = toRoman(toArabic(numbers[0]) + toArabic(numbers[1]));
    console.log(`Sum in Arabic system: ${toArabic(sum)}`);
    return sum;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter two natural numbers in X+Y format: ", function (answer) {

    answer = answer.toUpperCase();
    console.log(`You entered: ${answer}`)

    console.log(`Sum of numbers: ${sumOfRomanNumerals(answer)}`);
    readline.close();
});