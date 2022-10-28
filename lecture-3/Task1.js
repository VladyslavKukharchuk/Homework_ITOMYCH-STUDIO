// Програма зчитує двоцифрове число і виводить через пропуск кожну цифру окремо.

// Вхідні дані
// Натуральне число на проміжку від 10 до 99 включно.

// Вихідні дані
// Спочатку першу цифру числа і через пропуск другу.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a two-digit number between 10 and 99: ", function (answer) {

    console.log(`You entered: "${answer}"`);

    let number = answer;
    if (number === "") {
        console.log(`You have entered an empty string, please try again.`);
    } else if (number.includes(` `)) {
        console.log(`You entered numbers with spaces, please try again.`);
    } else if (isNaN(Number(number)) === true) {
        console.log(`You entered a number in the wrong format, please try again.`);
    } else if (Number(number) < 10) {
        console.log(`The number entered is less than 10, please try again.`);
    } else if (Number(number) > 99) {
        console.log(`The number you entered is greater than 99, please try again.`);
    } else {

        let stringWithSpaces = "";
        for (let i = 0; i < number.length; ++i) {
            if (i !== number.length - 1) {
                stringWithSpaces += number[i] + " ";
            } else {
                stringWithSpaces += number[i];
            }
        }
        console.log(`<${stringWithSpaces}>`);
    }

    readline.close();
});