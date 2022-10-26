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

    answer = answer.toUpperCase();
    console.log(`You entered: ${answer}`)

    console.log(`Result: ${answer[0]} ${answer[1]}`);
    readline.close();
});