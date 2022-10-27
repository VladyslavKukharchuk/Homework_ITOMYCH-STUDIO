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
        console.log(`Ви ввели пусту строку, спробуйте ще раз.`);
    } else if (number.includes(` `)) {
        console.log(`Введіть числа без пробілів, спробуйте ще раз.`);
    } else if (isNaN(Number(number)) === true) {
        console.log(`Ви ввели не число, спробуйте ще раз.`);
    } else if (Number(number) < 10) {
        console.log(`Введене число менше 10, спробуйте ще раз.`);
    } else if (Number(number) > 99) {
        console.log(`Введене число більше 99, спробуйте ще раз.`);
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